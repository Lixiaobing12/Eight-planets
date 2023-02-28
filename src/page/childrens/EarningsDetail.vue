<template>
  <div class="context">
    <div class="card">
      <div>
        <div>{{ $t("home.totalRevenue") }}</div>
        <div class="num">{{ revenue }} STC</div>
      </div>
      <div>{{ $t("mine.myLevel") }}：{{ $t(explorer) }}</div>
    </div>
    <div class="card-margin">
      <div class="modal" v-for="(item,index) in list" :key="index">
        <div style="text-align: left">
          <div class="foot">{{$t(item.event)}}</div>
          <div>{{item.create_date}}</div>
        </div>
        <div style="text-align: right">
          <div class="foot">+{{item.value}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useFetch } from "@/utils/request.js";
import { onActivated, onMounted } from "vue";
import useState from "@/plugins/useState";
import { useStore } from "vuex";

const store = useStore();
// 用户等级
const explorer = computed(() => store.state.res.userGet.levelName || 'mine.none');
const [list,setList] = useState([]);

const revenue = computed(() => {
  let num = (
    Number(store.state.res.userGet.total_reward) +
    Number(store.state.res.userReward.total_reward)
  ).toFixed(4);
  return isNaN(num) ? "0.0000" : num;
});
onMounted(() => {
  useFetch("/withdraw/list").then(({ data }) => {
    if (!Array.isArray(data)) data = [];
    data.forEach(item=>{
      item.value = Number(item.value).toFixed(4);
      switch(item.event){
        case '流量奖励':item.event = 'mine.TrafficReward';break;
        case '直推奖励':item.event = 'mine.RecommendReward';break;
        case '团队奖励':item.event = 'mine.TeamReward';break;
        case '等级奖励':item.event = 'mine.LevelReward';break;
        case '达标奖励':item.event = 'mine.ReachReward';break;
      }
    })
    setList(data);
  });
});
</script>
<style lang="less" scoped>
.context {
  background: #24193d;
  height: 100%;
  padding: 20px;
  text-align: center;
  color: #fff;
  overflow: auto;
  .card {
    background-image: url("@/assets/img/EarningsDetail-bg.png");
    background-size: 100% 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding: 0 20px;
    text-align: left;
    height: 150px;
    color: #cdd3e1;

    .num {
      font-size: 1.2em;
      color: #fff;
      font-weight: 600;
    }
  }
  .card-margin {
    padding: 30px 0;

    .modal {
      color: #fff;
      padding: 20px;
      display: flex;
      justify-content: space-between;
      background: #372957;
      border-radius: 10px;
      margin-bottom: 20px;
      .foot {
        font-size: 1.1em;
      }
    }
  }
}
</style>
