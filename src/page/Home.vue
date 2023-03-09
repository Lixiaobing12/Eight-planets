<template>
  <div class="context">
    <n-space justify="center">
      <n-grid cols="4" item-responsive responsive="screen">
        <n-grid-item span="4 m:2 l:2">
         <div>
           <h1>SnailSwap</h1>
           <h4>Super-Farm&Defi-Metaverse &wonderful Gamefi </h4>
         </div>
         <n-space>
         <n-tag>Farm Now</n-tag>
         <n-tag>Get Nft</n-tag>
         </n-space>
        </n-grid-item>
        <n-grid-item span="4 m:2 l:2">
          <img src="@/assets/res/home-row1-right.png" alt="">
        </n-grid-item>
      </n-grid>
    </n-space>
  </div>
</template>
<script setup>
import useState from "@/plugins/useState";
import { useI18n } from "vue-i18n";
import { useRouter, useRoute } from "vue-router";
import { useFetch } from "@/utils/request.js";
import { useStore } from "vuex";
import { computed, onActivated, ref, watch } from "vue";
import { FORMATTER_ADDRS } from "@/utils/methods.js";
import { useMessage } from "naive-ui";
import BigNumber from "bignumber.js";
import loading from "naive-ui/es/_internal/loading";

const { t, locale } = useI18n();
const router = useRouter();
const store = useStore();
const message = useMessage();
const route = useRoute();
const inputAmount = ref("");
const account = computed(() => {
  return store.state.web3.defaultAccount;
});
const locading = ref(false);

let amount = ref("0");
const isActive = ref(false);
// 连接钱包
const connect = async () => {
  if (!account.value) {
    await store.dispatch("web3/connect");
    message.info(t("home.connectSuccess"));
  }
};
// 最大
const max = () => {
  inputAmount.value = BigNumber(5e18).minus(amount.value).div(1e18).toFixed(2);
};
const buy = async () => {
  if (!account.value || locading.value) return;
  let max = BigNumber(5e18).minus(amount.value);
  let input = BigNumber(inputAmount.value || 0).times(1e18);
  if (input.isGreaterThan(max)) {
    inputAmount.value = max.div(1e18).toFixed(2);
  }
  if (input.isLessThan(0.05e18)) {
    inputAmount.value = "0.05";
  }
  try {
    locading.value = true;
    await store.dispatch("web3/buy", BigNumber(inputAmount.value).times(1e18));
    locading.value = false;
    message.success(t("buyMachine.buySuccess"));
  } catch (err) {
    locading.value = false;
  }
};
let interval = null;
const fetch = () => {
  if (interval) clearInterval(interval);
  interval = setInterval(() => {
    store.dispatch("web3/isActive").then((res) => {
      isActive.value = res;
    });
    store.dispatch("web3/balanceOf").then((res) => {
      amount.value = BigNumber(res);
    });
  }, 1500);
};
watch(account, fetch);
const toLink = (path) => {
  router.push(path);
};
</script>
<style lang="less" scoped>
.context {
  height: 100%;
  text-align: left;
  position: relative;
  overflow: auto;
  background-image: url("@/assets/res/home-bg1.png");
  background-size: cover;
  padding-top: 50px;

  .n-input {
    background: transparent;
    ::v-deep(.n-input__input-el) {
      color: #fff;
    }
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
  .withdraw {
    filter: opacity(0.5);
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
