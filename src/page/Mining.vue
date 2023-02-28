<template>
  <div class="context">
    <div class="conver">
      <div>{{ $t("buyMachine.machineNums") }}</div>
      <div style="color: #ffffff; font-size: 2em; font-weight: 600">
        {{ machinelist.length }} {{ $t("buyMachine.pic") }}
      </div>
      <div>
        <n-grid x-gap="12" :cols="3">
          <n-gi>
            <div>{{ $t("buyMachine.totalPower") }}</div>
            <div style="color: #fff; font-size: 1.1em">{{ totalPower }} P</div>
          </n-gi>
          <n-gi>
            <div>{{ $t("buyMachine.totalOutput") }}</div>
            <div style="color: #fff; font-size: 1.1em">
              {{ historyOutput }} STC
            </div>
          </n-gi>
          <n-gi>
            <div>{{ $t("buyMachine.dayOutput") }}</div>
            <div style="color: #fff; font-size: 1.1em">{{ dayOutput }} STC</div>
          </n-gi>
        </n-grid>
      </div>
    </div>
    <div class="mining-body">
      <!-- 空状态 -->
      <n-empty :description="$t('buyMachine.empty')" v-if="!machinelist.length">
        <template #icon>
          <img src="@/assets/img/empty.png" alt="" style="height: 55px" />
        </template>
      </n-empty>
      <template v-else>
        <div
          class="machine-items"
          v-for="(item, index) in machinelist"
          :key="index"
        >
          <div>
            <span style="color: #000000; font-size: 1.2em">{{
              $t(item.name)
            }}</span>
            <span style="color: #15ef81">{{ $t("buyMachine.running") }}</span>
          </div>
          <div style="margin: 10px 0">
            <div>
              <div style="color: #1532d4; font-size: 1.2em; font-weight: 500">
                {{ item.power }}P
              </div>
              <div>{{ $t("buyMachine.effective-CP") }}</div>
            </div>
            <div style="text-align: right">
              <div style="color: #000; font-size: 1.2em; font-weight: 500">
                12 months
              </div>
              <div>{{ $t("buyMachine.cycle") }}</div>
            </div>
          </div>

          <div>
            <span>{{ item.id }}</span>
            <div class="but" @click="toLink(item)">
              {{ $t("buyMachine.detail") }}
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script setup>
import useState from "@/plugins/useState";
import { useRouter } from "vue-router";
import { useFetch } from "@/utils/request.js";
import { useStore } from "vuex";
import { computed, onActivated } from "vue";
import moment from "moment";

const store = useStore();
const router = useRouter();
// 运行矿机总数
const machinelist = computed(()=>store.state.res.depositList);
// 总算力
const totalPower = computed(()=>{
  let num = Number(store.state.res.userGet.self_hash).toFixed(1);
  return isNaN(num) ? "0.0" : num;
})
// 累计挖出
const historyOutput = computed(()=>{
  let num = Number(store.state.res.userReward.total_reward).toFixed(4);
  return isNaN(num) ? "0.0000" : num;
})
// 昨日挖出
const dayOutput = computed(()=>{
  let num = Number(store.state.res.userReward.deposit_reward).toFixed(4);
  return isNaN(num) ? "0.0000" : num;
})
//详情
const toLink = (item) => {
  if (item.id) {
    router.push({
      path: `/Detail/${item.id}`,
      query: {
        power: item.power,
        creatTime: moment(item.create_date, "YYYY-MM-DD HH:mm:ss")
          .add(1, "y")
          .format("YYYY-MM-DD"),
      },
    });
  }
};

</script>
<style lang="less" scoped>
.context {
  background: #1532d4;
  height: 100%;
  display: flex;
  flex-direction: column;

  .conver {
    height: 26vh;
    background-image: url("@/assets/img/mining-bg.png");
    background-size: contain;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: #d6dcff;
  }
  .mining-body {
    flex: 1;
    overflow: auto;
    border-radius: 15px 15px 0 0;
    background: #fff;
    padding: 30px 20px 20px;

    ::v-deep(.n-empty) {
      margin-top: 30px;
      .n-empty__icon {
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
      }
    }

    .machine-items {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 20px 10px;

      & > div {
        display: flex;
        justify-content: space-between;
        color: #aaaaaa;
      }

      .but {
        color: #1532d4;
        background: #e8ebfa;
        padding: 5px 20px;
      }
    }
  }
}
</style>
