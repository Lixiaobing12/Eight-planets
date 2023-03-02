<template>
  <div class="context">
    <img src="@/assets/web/home-banner.png" style="width: 100%" alt="" />
    <img src="@/assets/web/home-tip1.png" style="width: 80%" alt="" />
    <div style="margin: -40px 0 20px 20px; width: 80%">
      {{ $t("home.tip1") }}
    </div>
    <img src="@/assets/web/home-tip2.png" style="width: 80%" alt="" />
    <div style="margin: -40px 0 20px 20px; width: 80%">
      {{ $t("home.tip2") }}
    </div>

    <div style="text-align: center; margin-top: 40px">
      <div style="display: flex; align-items: center; justify-content: center">
        <img src="@/assets/web/home-transparent-lobo.png" width="40" alt="" />
        <div style="margin-left: 20px; font-size: 1.5em">SNAIL SWAP</div>
      </div>
      <div style="font-size: 2em; marign-top: 2em; font-weight: 700">
        {{ $t("home.Donate") }}
      </div>

      <n-input v-model:value="inputAmount" type="text" style="width: 60%" placeholder="">
        <template #suffix>
          <span>MAX</span>
        </template>
      </n-input>
      <div style="width: 80%; text-align: center; margin: 20px auto">
        <n-grid x-gap="12" :cols="2">
          <n-gi>
            <div class="but">支付</div>
          </n-gi>
          <n-gi>
            <div class="but">领取</div>
          </n-gi>
        </n-grid>
      </div>

      <div>
        <div class="data-img ethimg">
          <span>{{$t("home.amount")}}：</span>
          <span>0.05 - 5 ETH</span>
        </div>
        <div class="data-img">
          <span>{{$t('home.Quantity')}}：</span>
          <span>10000000枚</span>
        </div>
      </div>
      <div>
        <div style="text-align: left; margin: 80px 0 0">
          <img src="@/assets/web/home-coming.png" alt="" style="width: 180px" />
        </div>
        <div style="position: relative; display: flex; align-items: center">
          <img src="@/assets/web/home-ifo.png" alt="" style="width: 100%" />
          <span
            style="position: absolute; left: 10px; right: 10px; bottom: 20px"
            :style="{ bottom: locale === 'en' ? '5px' : '20px' }"
            >{{ $t("home.tip3") }}</span
          >
        </div>
        <div style="position: relative; display: flex; align-items: center">
          <img src="@/assets/web/home-nft.png" alt="" style="width: 100%" />
          <span
            style="position: absolute; left: 10px; right: 10px; bottom: 20px"
            :style="{ bottom: locale === 'en' ? '5px' : '20px' }"
            >{{ $t("home.tip4") }}</span
          >
        </div>
        <div style="position: relative; display: flex; align-items: center">
          <img src="@/assets/web/home-game.png" alt="" style="width: 100%" />
          <span
            style="position: absolute; left: 10px; right: 10px; bottom: 20px"
            :style="{ bottom: locale === 'en' ? '5px' : '20px' }"
            >{{ $t("home.tip5") }}</span
          >
        </div>
      </div>

      <div>
        <img
          src="@/assets/web/home-footer.png"
          alt=""
          style="width: 100%; margin: 50px 0"
        />
        <div
          style="
            display: flex;
            justify-content: space-around;
            margin-bottom:50px;
          "
        >
          <img src="@/assets/web/discord.png" alt="" width="30" />
          <img src="@/assets/web/twitter.png" alt="" width="30" />
          <img src="@/assets/web/telegram.png" alt="" width="30" />
        </div>
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
const inputAmount = ref('');
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
  height: 100%;
  padding: 20px;
  text-align: left;
  position: relative;
  overflow: auto;

  .n-input {
    background: transparent;

    ::v-deep(.n-input__border) {
      border: 2px solid #4381dc !important;
      border-radius: 10px;
    }

    ::v-deep(.n-input__suffix) {
      color: #fff;
      font-weight: 700;
    }
  }

  .but {
    background-image: url("@/assets/web/home-but.png");
    background-size: 100% 100%;
    color: #fff;
    font-weight: 700;
    padding: 7px 16px;
  }

  .data-img {
    background-image: url("@/assets/web/home-n.png");
    background-size: 100% 100%;
    color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 80%;
    margin: 20px auto;
    height: 50px;
    padding: 0 16px;
    font-size: 1.2em;

    & span:nth-of-type(2) {
      font-size: 0.8em;
      margin-left: 2em;
    }
  }
  .ethimg {
    background-image: url("@/assets/web/home-eth.png");
  }
}
</style>
