<template>
  <div class="context">
    <div class="conver">
      <img src="@/assets/img/detail-banner.png" alt="" />
    </div>
    <div class="black row">
      <div>
        <div>{{ id }}</div>
        <div class="comment">{{$t('detail.machineNum')}}</div>
      </div>
      <div>
        <div>{{ power }} P</div>
        <div class="comment">{{$t('detail.power')}}</div>
      </div>
      <div>
        <div>{{outTime}}</div>
        <div class="comment">{{$t('detail.Contractexpirationtime')}}</div>
      </div>
    </div>
    <div class="black">
      <div class="list">
        <div>{{$t('detail.MiningRecords')}}</div>
        <div>{{$t('buyMachine.totalOutput')}}：{{totalOutput}} STC</div>
      </div>
      <div v-for="(item, index) in list" :key="index" class="list">
        <div>{{ item.start_reward_date }}</div>
        <div>{{ item.reward }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import useState from "@/plugins/useState";
import { onActivated, ref } from "vue";
import { useFetch } from "@/utils/request.js";

const route = useRoute();
// 当前算力
const [power, setPower] = useState(route.query.power);
// 累计挖出
const [totalOutput,setTotalPower] = useState('0.000');
//过期时间
const [outTime,setOutTime] = useState(route.query.creatTime);
const id = route.params.id;

const list = ref([]);
onActivated(()=>{
  useFetch('/deposit/reward/list',{tid:id})
  .then(res=>{
    list.value = res.data.List;
    setTotalPower(res.data.total_reward);
  })
})
</script>
<style lang="less" scoped>
.context {
  background-image: url("@/assets/img/detail-bg.png");
  background-size: 100% 100%;
  height: 100%;
  overflow: auto;
  .conver {
    padding: 30px 20px;
    display: flex;
    justify-content: center;
  }
  .black {
    background: rgba(37, 40, 84, 0.6);
    color: #fff;
    padding: 20px;
    margin: 0 10px 20px;
    border-radius: 10px;

    .list {
      display: flex;
      justify-content: space-between;
      margin: 15px 0;
    }
  }
  .row {
    display: flex;
    justify-content: space-around;
    text-align: center;
    .comment {
      font-size: 0.9em;
      margin-top: 10px;
    }
  }
}
</style>
