<template>
  <div class="context">
    <div class="conver">
      <div class="header">
        <div>
          <div>{{ $t("mine.Subordinate") }}</div>
          <div class="num">{{ subordinate }}</div>
        </div>
        <div>
          <div>{{ $t("mine.direct") }}</div>
          <div class="num">{{ directMans }}</div>
        </div>
        <div>
          <div>{{ $t("mine.Indirect") }}</div>
          <div class="num">{{ indirectMans }}</div>
        </div>
        <div>
          <div>{{ $t("mine.Yesterday") }}</div>
          <div class="num">+{{ yesterdayAdd }}</div>
        </div>
      </div>
      <div>
        <n-scrollbar x-scrollable>
          <div class="xscroll">
            <div class="card">
              <div>{{ $t("mine.personalHash") }}</div>
              <div>{{ selfHash }} p</div>
            </div>
            <div class="card">
              <div>{{ $t("mine.Collected") }}</div>
              <div>{{ collected }} STC</div>
            </div>
            <div class="card">
              <div>{{ $t("mine.waitingCollected") }}</div>
              <div>{{ waitCollected }} STC</div>
            </div>
          </div>
        </n-scrollbar>
      </div>
    </div>
    <div class="mining-body">
      <!-- 空状态 -->
      <n-empty :description="$t('buyMachine.empty')" v-if="!list.length">
        <template #icon>
          <img src="@/assets/img/empty.png" alt="" style="height: 55px" />
        </template>
      </n-empty>
      <template v-else>
        <n-tabs
          :bar-width="0"
          type="line"
          class="custom-tabs"
          :on-update:value="tabchange"
        >
          <template #prefix>
            <span style="font-size: 1.2em; font-weight: 600; color: #000">{{
              $t("mine.Team")
            }}</span>
          </template>
          <n-tab-pane name="Direct" :tab="$t('mine.direct')">
            <div style="display: flex">
              <div style="display: flex; align-items: center">
                <span
                  :style="{
                    color: condition === 'time' ? '#073BBD' : '#BCB4D3',
                  }"
                  style="font-size: 15px; font-weight: 500"
                  @click="change('time')"
                  >{{ $t("mine.joinInTime") }}</span
                >
                <div
                  style="
                    display: flex;
                    flex-direction: column;
                    margin-left: 5px;
                  "
                  @click="change('time')"
                  v-show="condition === 'time'"
                >
                  <n-icon
                    size="30"
                    :color="direction === 'up' ? '#6D4AE0' : '#D0D5E3'"
                  >
                    <MdArrowDropup />
                  </n-icon>
                  <n-icon
                    size="30"
                    style="margin-top: -20px"
                    :color="direction === 'down' ? '#6D4AE0' : '#D0D5E3'"
                  >
                    <MdArrowDropdown />
                  </n-icon>
                </div>
              </div>
              <!-- 邀请人数 -->
              <div
                style="display: flex; align-items: center; margin-left: 20px"
              >
                <span
                  :style="{
                    color: condition === 'nums' ? '#073BBD' : '#BCB4D3',
                  }"
                  style="font-size: 15px; font-weight: 500"
                  @click="change('nums')"
                  >{{ $t("mine.inviteMans") }}</span
                >
                <div
                  style="
                    display: flex;
                    flex-direction: column;
                    margin-left: 5px;
                  "
                  @click="change('nums')"
                  v-show="condition === 'nums'"
                >
                  <n-icon
                    size="30"
                    :color="direction === 'up' ? '#6D4AE0' : '#D0D5E3'"
                  >
                    <MdArrowDropup />
                  </n-icon>
                  <n-icon
                    size="30"
                    style="margin-top: -20px"
                    :color="direction === 'down' ? '#6D4AE0' : '#D0D5E3'"
                  >
                    <MdArrowDropdown />
                  </n-icon>
                </div>
              </div>
            </div>
            <!-- 搜索框 -->
            <!-- <n-input :placeholder="$t('mine.inputAddress')" :on-input="input">
              <template #prefix>
                <n-icon :component="MdSearch" />
              </template>
            </n-input> -->
            <div
              class="machine-items"
              v-for="(item, index) in list"
              :key="index"
            >
              <div>
                <img src="@/assets/img/mine-avatar.png" alt="" />
                <div style="margin-left: 15px">
                  <div style="color: #000; font-size: 1.2em; font-weight: 500">
                    {{ FORMATTER_ADDRS(item.user_addr) }}
                  </div>
                  <div>{{ item.create_date }}</div>
                </div>
              </div>
              <div style="margin: 10px 0">
                <div style="text-align: right">
                  <div style="color: #000; font-size: 1.2em; font-weight: 500">
                    {{ item.direct_num }}
                  </div>
                  <div>{{ $t("mine.inviteMans") }}</div>
                </div>
              </div>
            </div>
          </n-tab-pane>
          <!-- 全部 -->
          <n-tab-pane name="all" :tab="$t('mine.all')">
            <div style="display: flex">
              <div style="display: flex; align-items: center">
                <span
                  :style="{
                    color: condition === 'time' ? '#073BBD' : '#BCB4D3',
                  }"
                  style="font-size: 15px; font-weight: 500"
                  @click="change('time')"
                  >{{ $t("mine.joinInTime") }}</span
                >
                <div
                  style="
                    display: flex;
                    flex-direction: column;
                    margin-left: 5px;
                  "
                  @click="change('time')"
                  v-show="condition === 'time'"
                >
                  <n-icon
                    size="30"
                    :color="direction === 'up' ? '#6D4AE0' : '#D0D5E3'"
                  >
                    <MdArrowDropup />
                  </n-icon>
                  <n-icon
                    size="30"
                    style="margin-top: -20px"
                    :color="direction === 'down' ? '#6D4AE0' : '#D0D5E3'"
                  >
                    <MdArrowDropdown />
                  </n-icon>
                </div>
              </div>
              <!-- 邀请人数 -->
              <div
                style="display: flex; align-items: center; margin-left: 20px"
              >
                <span
                  :style="{
                    color: condition === 'nums' ? '#073BBD' : '#BCB4D3',
                  }"
                  style="font-size: 15px; font-weight: 500"
                  @click="change('nums')"
                  >{{ $t("mine.inviteMans") }}</span
                >
                <div
                  style="
                    display: flex;
                    flex-direction: column;
                    margin-left: 5px;
                  "
                  @click="change('nums')"
                  v-show="condition === 'nums'"
                >
                  <n-icon
                    size="30"
                    :color="direction === 'up' ? '#6D4AE0' : '#D0D5E3'"
                  >
                    <MdArrowDropup />
                  </n-icon>
                  <n-icon
                    size="30"
                    style="margin-top: -20px"
                    :color="direction === 'down' ? '#6D4AE0' : '#D0D5E3'"
                  >
                    <MdArrowDropdown />
                  </n-icon>
                </div>
              </div>
            </div>
            <!-- 搜索框 -->
            <!-- <n-input :placeholder="$t('mine.inputAddress')" :on-input="input">
              <template #prefix>
                <n-icon :component="MdSearch" />
              </template>
            </n-input> -->
            <div
              class="machine-items"
              v-for="(item, index) in list"
              :key="index"
            >
              <div>
                <img src="@/assets/img/mine-avatar.png" alt="" />
                <div style="margin-left: 15px">
                  <div style="color: #000; font-size: 1.2em; font-weight: 500">
                    {{ FORMATTER_ADDRS(item.user_addr) }}
                  </div>
                  <div>{{ item.create_date }}</div>
                </div>
              </div>
              <div style="margin: 10px 0">
                <div style="text-align: right">
                  <div style="color: #000; font-size: 1.2em; font-weight: 500">
                    {{ item.direct_num }}
                  </div>
                  <div>{{ $t("mine.inviteMans") }}</div>
                </div>
              </div>
            </div>
          </n-tab-pane>
        </n-tabs>
      </template>
    </div>
  </div>
</template>
<script setup>
import useState from "@/plugins/useState";
import { useRouter } from "vue-router";
import { MdArrowDropup, MdArrowDropdown, MdSearch } from "@vicons/ionicons4";
import { useFetch } from "@/utils/request.js";
import { onActivated, onMounted, watch } from "vue";
import { FORMATTER_ADDRS } from "@/utils/methods.js";
import moment from "moment";

const router = useRouter();
// 源数据
let MetaData = [];
// 运行矿机总数
const [list, setList] = useState([]);
// 总人数
const [subordinate, setSubordinate] = useState(0);
// 直推人数
const [directMans, setDirectMans] = useState(0);
// 间推人数
const [indirectMans, setindirectMans] = useState(0);
// 昨日新增
const [yesterdayAdd, setManAdd] = useState(0);
// 个人算力
const [selfHash, setSelfHash] = useState("0.0");
// 已领取奖励
const [collected, setCollected] = useState("0.0000");
// 待领取奖励
const [waitCollected, setWaitCollected] = useState("0.0000");

// 总算力
const [totalPower, setTotalPower] = useState("0");
// 累计挖出
const [historyOutput, setHistoryOutput] = useState("0.000");
// 昨日挖出
const [dayOutput, setDayOutput] = useState("0.000");
// 筛选条件
const [condition, setCondition] = useState("time");
// 从上往下 or 从下往上
const [direction, setDirection] = useState("up");
// 防抖
const [debounceStatus, setStatus] = useState(false);
// tab
let tabType = "Direct";

// 输入筛选地址
const input = (value) => {
  if (!debounceStatus.value) {
    setStatus(true);
    setTimeout(() => {
      setStatus(false);
      // 做事
      const data = list.value.filter(item=>item.user_addr.includes(value));
      if(value){
      setList(data);
      }
    }, 200);
  }
};

// watch(condition,(value)=>{
// console.log('condition',value)

// });
// watch(direction,value=>{
//   console.log('direction',value)
// })

// 排序
const sort = () => {
  let arr = JSON.parse(JSON.stringify(MetaData));
  if (tabType === "all") {
    arr = [];
    function flatArr(data) {
      arr.push(...data);
      data.forEach((item) => {
        item.child && flatArr(item.child);
      });
    }
    flatArr(MetaData);
  }

  if (condition.value === "time") {
    if (direction.value === "up")
      arr.sort(
        (a, b) =>
          moment(a.create_date, "YYYY-MM-DD HH:mm:ss").valueOf() -
          moment(b.create_date, "YYYY-MM-DD HH:mm:ss").valueOf()
      );
    else
      arr.sort(
        (a, b) =>
          moment(b.create_date, "YYYY-MM-DD HH:mm:ss").valueOf() -
          moment(a.create_date, "YYYY-MM-DD HH:mm:ss").valueOf()
      );
  } else {
    if (direction.value === "up")
      arr.sort((a, b) => b.direct_num - a.direct_num);
    else arr.sort((a, b) => a.direct_num - b.direct_num);
  }
  setList(arr);
};
// tab切换
const tabchange = (value) => {
  tabType = value;
  //all 全部；Direct 直属
  setCondition("time");
  setDirection("up");
  sort();
};
// 修改筛选条件
const change = (type) => {
  // time: 加入时间 nums：邀请人数
  if (type !== condition.value) {
    setDirection("up");
    setCondition(type);
  } else {
    setDirection(direction.value === "up" ? "down" : "up");
  }
  sort();
};
onMounted(() => {
  useFetch("/user/get").then(({ data }) => {
    setList(data.child || []);
    MetaData = JSON.parse(JSON.stringify(list.value));
    setSubordinate(data.team_num);
    setDirectMans(data.direct_num);
    setindirectMans(data.team_num - data.direct_num);
    setSelfHash(Number(data.self_hash).toFixed(1));

    useFetch("/user/reward").then((reward) => {
      setCollected(Number(data.team_reward) + Number(reward.data.team_reward));
      setWaitCollected(reward.data.team_reward);
    });
  });
  useFetch("/user/bind/add").then(({ data }) => {
    setManAdd(data);
  });
});
</script>
<style lang="less" scoped>
.context {
  background: #6d4ae0;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .conver {
    height: 26vh;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: #d6dcff;

    .header {
      display: flex;
      justify-content: space-between;
      padding: 0 20px;

      .num {
        font-size: 1.1em;
        color: #fff;
        font-weight: 600;
      }
    }
    .xscroll {
      display: flex;
    }
    .card {
      background: #fff;
      display: inline-flex;
      padding: 10px 20px;
      flex-direction: column;
      color: #000;
      margin: 0 10px;
      width: 120px;
      border-radius: 10px;
    }
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
      justify-content: space-between;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
      }
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

    ::v-deep(.n-tabs-nav-scroll-content) {
      justify-content: flex-end;
      --n-tab-gap: 10px;
      .n-tabs .n-tabs-tab-pad {
        width: 10px;
      }
      .n-tabs-tab {
        height: 30px;
        padding: 0px 10px;
      }
      .n-tabs-tab--active {
        background: #6d4ae0;
        color: #fff;
        border-radius: 5px;
        height: 30px;
      }
    }
  }
}
</style>
