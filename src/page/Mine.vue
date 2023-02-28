<template>
  <div class="context">
    <div class="avatar">
      <n-avatar round :size="60" :src="avater" />
      <div>{{ FORMATTER_ADDRS(account) }}</div>
    </div>
    <div class="level" v-show="!!explorer">{{ $t(explorer) }}</div>
    <div style="margin: 20px 0">
      <n-grid x-gap="20" :cols="2" item-responsive>
        <n-gi>
          <div class="mining gird-img" @click="toLink('/Wallet')">
            <div>
              <span>{{ $t("mine.wallet") }} (STC)</span>
              <span>{{ balanceOf }}</span>
            </div>
          </div>
        </n-gi>
        <n-gi>
          <div class="power gird-img">
            <div>
              <span>{{ $t("mine.teamPower") }}</span>
              <span>{{ teamPower }} P</span>
            </div>
          </div>
        </n-gi>
      </n-grid>
    </div>
    <div>
      <!-- 星际战队& 收益明细 -->
      <div class="black row">
        <div class="list" @click="toLink('/StarTeam')">
          <div class="icon">
            <img src="@/assets/img/mine-icon1.png" alt="" />
            <div>{{ $t("home.starTeam") }}</div>
          </div>
          <div class="comment">
            <n-icon size="20" color="#160A3E">
              <AngleRight />
            </n-icon>
          </div>
        </div>
        <div class="list" @click="toLink('/EarningsDetail')">
          <div class="icon">
            <img src="@/assets/img/mine-icon2.png" alt="" />
            <div>{{ $t("router.RevenueDetails") }}</div>
          </div>
          <div class="comment">
            <n-icon size="20" color="#160A3E">
              <AngleRight />
            </n-icon>
          </div>
        </div>
      </div>
      <!-- end -->

      <!-- 我的竞猜&项目白皮书 -->
      <div class="black row">
        <div class="list" @click="toLink('/MyGuess')">
          <div class="icon">
            <img src="@/assets/img/mine-icon3.png" alt="" />
            <div>{{ $t("router.MyGuess") }}</div>
          </div>
          <div class="comment">
            <n-icon size="20" color="#160A3E">
              <AngleRight />
            </n-icon>
          </div>
        </div>
        <div class="list">
          <div class="icon">
            <img src="@/assets/img/mine-icon4.png" alt="" />
            <div>{{ $t("mine.WhitePaper") }}</div>
          </div>
          <div class="comment">
            <n-icon size="20" color="#160A3E">
              <AngleRight />
            </n-icon>
          </div>
        </div>
      </div>
      <!-- end -->

      <!-- 邀请好友&语言切换 -->
      <div class="black row">
        <div class="list" @click="open">
          <div class="icon">
            <img src="@/assets/img/mine-icon5.png" alt="" />
            <div>{{ $t("mine.Invitation") }}</div>
          </div>
          <div class="comment">
            <n-icon size="20" color="#160A3E">
              <AngleRight />
            </n-icon>
          </div>
        </div>
        <div class="list" @click="toLink('/Lang')">
          <div class="icon">
            <img src="@/assets/img/mine-icon6.png" alt="" />
            <div>{{ $t("router.langChange") }}</div>
          </div>
          <div class="comment">
            <n-icon size="20" color="#160A3E">
              <AngleRight />
            </n-icon>
          </div>
        </div>
      </div>

      <!-- end -->
    </div>
  </div>
  <n-drawer
    v-model:show="active"
    width="100%"
    placement="bottom"
    style="background: rgba(0, 0, 0, 0.9); border-radius: 15px 15px 0 0"
    height="320px"
    :display-directive="'show'"
  >
    <n-drawer-content
      closable
      :body-style="{ color: '#fff' }"
      :header-style="{ border: 0 }"
    >
      <Invite />
    </n-drawer-content>
  </n-drawer>
</template>
<script setup>
import { Router } from "@vicons/carbon";
import { AngleRight } from "@vicons/fa";
import { useRouter } from "vue-router";
import Invite from "./childrens/invite.vue";
import { useFetch } from "@/utils/request.js";
import { computed, onActivated } from "vue";
import { useStore } from "vuex";
import { FORMATTER_ADDRS } from "@/utils/methods.js";

const router = useRouter();
const store = useStore();
const avater = new URL("../assets/img/mine-avatar.png", import.meta.url).href;
// 钱包地址
const account = computed(() => store.state.web3.defaultAccount);
// 余额
const balanceOf = computed(() => {
  let num = Number(store.state.res.userReward.total_reward).toFixed(4);
  return isNaN(num) ? "0.0000" : num;
});
// 团队算力
const teamPower = computed(() => {
  let num = Number(store.state.res.userGet.team_hash).toFixed(1);
  return isNaN(num) ? "0.0" : num;
});
// 用户等级
const explorer = computed(() => store.state.res.userGet.levelName || '');
// 邀请好友弹窗状态
const active = ref(false);

// 跳转
const toLink = (path) => {
  if (path === "/Lang") {
    router.push(path);
  } else if (account.value) {
    router.push(path);
  }
};
// 打开弹窗
const open = () => {
  if (account.value) {
    active.value = true;
  }
};
</script>
<style lang="less" scoped>
.context {
  background: #160a3e;
  height: 100%;
  padding: 20px;
  text-align: center;
  overflow: auto;
  .avatar {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;

    div {
      margin-top: 15px;
    }
  }
  .level {
    background-image: url("@/assets/img/buy-machine.png");
    background-size: 100% 100%;
    padding: 5px 20px;
    display: inline-block;
  }

  .gird-img {
    background-size: 100% 100%;
    text-align: center;
    padding: 10px 10px;
    color: #b6f0ff;
    display: flex;

    div {
      display: flex;
      flex-direction: column;
      flex: 1;
    }
  }
  .mining {
    background-image: url("@/assets/img/mine-wallet-left.png");
  }
  .power {
    background-image: url("@/assets/img/mine-team-right.png");
  }
  .black {
    background: rgba(37, 40, 84, 0.6);
    color: #fff;
    padding: 6px 20px;
    border-radius: 10px;
    margin-bottom: 15px;

    .list {
      display: flex;
      justify-content: space-between;
      margin: 10px 0;
      width: 100%;
    }

    .icon {
      display: flex;
      align-items: center;

      img {
        width: 25px;
        height: 25px;
        margin-right: 20px;
      }
    }
  }
  .row {
    .comment {
      font-size: 0.9em;
      margin-top: 10px;
    }
  }
}
</style>
