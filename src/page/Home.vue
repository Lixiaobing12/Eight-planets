<template>
  <div class="context">
    <n-page-header>
      <template #subtitle>
        <div class="img-absolute">
          <div>{{ $t("home.totalRevenue") }}</div>
          <div>{{ revenue }} STC</div>
        </div>
      </template>
      <template #extra>
        <div class="img-position">
          <img src="@/assets/img/home-signin.png" alt="" width="40" />
          <div>{{ $t("home.signIn") }}</div>
        </div>
      </template>
    </n-page-header>

    <div class="notice">
      <div class="img-position">
        <img src="@/assets/img/home-notice.png" width="40" alt="" />
      </div>
      {{$t('home.tip1')}}~
    </div>

    <div class="bottom-absolute">
      <div class="connect-wallet" @click="connect">
        {{ account ? FORMATTER_ADDRS(account) : $t("home.connectWallet") }}
      </div>
      <div style="width: calc(100% - 40px)">
        <n-grid x-gap="12" :cols="2" item-responsive>
          <n-gi>
            <div class="mining gird-img" @click="toLink('/Mining')">
              <img src="@/assets/img/home-my-mining.png" alt="" width="40" />
              <div>
                <span>{{ $t("home.miningMachine") }}</span>
                <span>{{ myMachineCount }}</span>
              </div>
            </div>
          </n-gi>
          <n-gi>
            <div class="power gird-img" @click="toLink('/MyPower')">
              <img src="@/assets/img/home-my-power.png" alt="" width="40" />
              <div>
                <span>{{ $t("home.computingPower") }}</span>
                <span>{{ myPower }}</span>
              </div>
            </div>
          </n-gi>
        </n-grid>

        <n-grid x-gap="12" :cols="4">
          <n-gi>
            <div class="span-position" @click="toLink('/BuyMachine')">
              <img src="@/assets/img/home-machine.png" alt="" width="70" />
              <span>{{ $t("home.buy") }}</span>
            </div>
          </n-gi>
          <n-gi>
            <div class="span-position" @click="toLink('/StarTeam')">
              <img src="@/assets/img/home-startTeam.png" alt="" width="70" />
              <span>{{ $t("home.starTeam") }}</span>
            </div>
          </n-gi>
          <n-gi>
            <div class="span-position">
              <img src="@/assets/img/home-space.png" alt="" width="70" />
              <span>{{ $t("home.space") }}</span>
            </div>
          </n-gi>
          <n-gi>
            <div class="span-position">
              <img src="@/assets/img/home-leaderboard.png" alt="" width="70" />
              <span>{{ $t("home.leaderboard") }}</span>
            </div>
          </n-gi>
        </n-grid>
      </div>
    </div>
  </div>
</template>
<script setup>
import useState from "@/plugins/useState";
import { useI18n } from "vue-i18n";
import { useRouter, useRoute } from "vue-router";
import { useFetch } from "@/utils/request.js";
import { useStore } from "vuex";
import { computed, onActivated, watch } from "vue";
import { FORMATTER_ADDRS } from "@/utils/methods.js";
import { useMessage } from "naive-ui";

const { t, locale } = useI18n();
const router = useRouter();
const store = useStore();
const message = useMessage();
const route = useRoute();
const account = computed(() => {
  return store.state.web3.defaultAccount;
});
// 连接钱包
const connect = async () => {
  if (!account.value) {
    await store.dispatch("web3/connect");
    message.info(t("home.connectSuccess"));
  }
};
const revenue = computed(() => {
  let num = (
    Number(store.state.res.userGet.total_reward) +
    Number(store.state.res.userReward.total_reward)
  ).toFixed(4);
  return isNaN(num) ? "0.0000" : num;
});
const myPower = computed(() => {
  let num = Number(store.state.res.userGet.self_hash).toFixed(1);
  return isNaN(num) ? "0.0" : num;
});
const myMachineCount = computed(() => store.state.res.depositList.length);
const fetch = () => {
  useFetch("/user/get")
    .then((res) => {
      if (!res.data.parent_addr && !res.data.child.length) {
        let parent = route.query.ref;
        if (parent && parent !== account.value) {
          useFetch("/bind/parent", {
            parent_addr: parent,
          });
        }
      }
    })
    .catch((err) => {});
};
watch(account, fetch);
const toLink = (path) => {
  router.push(path);
};
</script>
<style lang="less" scoped>
.context {
  background-image: url("@/assets/img/home-bj.png");
  background-size: 100% 100%;
  height: 100%;
  padding: 20px;
  text-align: center;
  position: relative;
  .img-absolute {
    background-image: url("@/assets/img/home-reward.png");
    background-size: 100% 100%;
    padding: 10px 30px;
    color: #00f1ff;
    text-align: left;
    padding-left: 50px;
    margin-bottom: -20px;
    min-width: 150px;
  }
  .img-position {
    position: relative;
    display: flex;
    justify-content: center;
    div {
      position: absolute;
      bottom: -2px;
      color: #00f1ff;
      background: rgba(23, 50, 144, 0.5);
      border: 1px solid #11f4ff;
      left: -9px;
      right: -9px;
      text-align: center;
      padding: 1px 5px;
    }
  }
  .notice {
    color: #00f1ff;
    background-color: rgba(23, 50, 144, 0.5);
    border: 1px solid #11f4ff;
    padding: 5px 40px;
    display: inline-flex;
    margin: 50px auto;
    position: relative;

    .img-position {
      position: absolute;
      top: -10px;
      left: -20px;
    }
  }

  .bottom-absolute {
    position: absolute;
    bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    left: 0;
    right: 0;
    padding-bottom: 30px;
    .connect-wallet {
      background-image: url("@/assets/img/home-connect.png");
      background-size: 100% 100%;
      text-align: center;
      padding: 10px 30px;
      color: #b6f0ff;
      margin-bottom: 15px;
    }

    .gird-img {
      background-size: 100% 100%;
      text-align: center;
      padding: 15px 10px 25px;
      color: #b6f0ff;
      display: flex;

      div {
        display: flex;
        flex-direction: column;
        flex: 1;
      }
    }
    .mining {
      background-image: url("@/assets/img/home-mining.png");
    }
    .power {
      background-image: url("@/assets/img/home-power.png");
    }

    .span-position {
      position: relative;
      display: flex;
      justify-content: center;

      span {
        position: absolute;
        bottom: 0;
      }
    }
  }
}
</style>
