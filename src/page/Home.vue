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

      <n-input
        v-model:value="inputAmount"
        type="text"
        style="width: 60%; color: #fff"
        placeholder=""
      >
        <template #suffix>
          <span @click="max">MAX</span>
        </template>
      </n-input>
      <div style="width: 80%; text-align: center; margin: 20px auto">
        <n-grid x-gap="12" :cols="2">
          <n-gi>
            <div class="but" @click="buy">
              <n-spin :size="16" v-if="locading" stroke="#fff"/>
              <span v-else>{{ $t("home.pay") }}</span>
            </div>
          </n-gi>
          <n-gi>
            <div class="but withdraw">{{ $t("home.withward") }}</div>
          </n-gi>
        </n-grid>
      </div>

      <div>
        <div class="data-img ethimg">
          <span>{{ $t("home.amount") }}：</span>
          <span>0.05 - 5 ETH</span>
        </div>
        <div class="data-img">
          <span>{{ $t("home.Quantity") }}：</span>
          <span>10,000,000</span>
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
            margin-bottom: 50px;
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
  padding: 20px;
  text-align: left;
  position: relative;
  overflow: auto;

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
