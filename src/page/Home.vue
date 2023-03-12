<template>
  <div class="context">
    <n-space justify="center">
      <n-grid cols="4" item-responsive responsive="screen">
        <n-grid-item span="4 m:2 l:2">
          <div>
            <h1 style="font-size: 3em">SnailSwap</h1>
            <h2>{{ $t("home.superFarm") }} <br />{{ $t("home.wonderful") }}</h2>
          </div>
          <n-space>
            <n-tag
              @click="toLink('/Pool')"
              style="
                background: #4033b9;
                color: #fff;
                font-weight: 700;
                border: 0;
                --n-border: 0;
                padding: 0 15px;
                cursor: pointer;
              "
              round
              >{{ $t("home.farmNow") }}</n-tag
            >
            <n-tag
              @click="toLink('/BlindBox')"
              round
              style="
                background: transparent;
                color: #fff;
                font-weight: 700;
                border: 0;
                padding: 0 15px;
                cursor: pointer;
              "
              >{{ $t("home.getNft") }}</n-tag
            >
          </n-space>
        </n-grid-item>
        <n-grid-item span="4 m:2 l:2">
          <img
            src="@/assets/res/home-row1-right.png"
            alt=""
            class="media-img"
          />
        </n-grid-item>
      </n-grid>
    </n-space>
  </div>
  <div class="context2">
    <n-grid cols="3" item-responsive responsive="screen">
      <n-grid-item span="3 m:1">
        <n-space vertical align="center">
          <div style="font-size: 3em">8</div>
          <div>【CELESTIAL FARM】</div>
          <n-tag
            round
            style="
              background: transparent;
              color: #fff;
              font-weight: 700;
              border: 0;
              padding: 0 40px;
            "
            >eight Farms</n-tag
          >
        </n-space>
      </n-grid-item>
      <n-grid-item span="3 m:1">
        <n-space vertical align="center">
          <div style="font-size: 3em">8</div>
          <div>【NFT TYPE】</div>
          <n-tag
            round
            style="
              background: transparent;
              color: #fff;
              font-weight: 700;
              border: 0;
              padding: 0 40px;
            "
            >N / R / SR / SSR</n-tag
          >
        </n-space>
      </n-grid-item>
      <n-grid-item span="3 m:1">
        <n-space vertical align="center">
          <div style="font-size: 3em">8</div>
          <div>【GAMEFI】</div>
          <n-tag
            round
            style="
              background: transparent;
              color: #fff;
              font-weight: 700;
              border: 0;
              padding: 0 40px;
            "
            >play to earn</n-tag
          >
        </n-space>
      </n-grid-item>
    </n-grid>
  </div>
  <div class="context3">
    <n-space vertical justify="center" align="center" style="margin: 80px 0">
      <img src="/logo.png" alt="" width="40" />
      <h1>VEN IDO</h1>
      <n-tag
        style="
          background: #4f5c60;
          color: #fff;
          padding: 0 20px;
          border-radius: 15px;
          --n-border: 0;
        "
        >10,000,000 <span style="color: #dfea52">TOKEN</span></n-tag
      >
      <n-button
        color="#161a2f"
        round
        style="margin-top: 20px; padding: 28px 0; border: 1px solid #fff"
        @click="toLink('/Ido')"
      >
        <div style="display: flex; align-items: center; margin: 0 10px">
          <div style="font-size: 1.5em; margin-top: 3px; margin-right: 10px">
            {{ $t("home.PEESALE") }}
          </div>
          <n-icon color="#858793" size="25"><CaretRight24Filled /></n-icon>
        </div>
      </n-button>
      <div style="text-align: center; margin-top: 20px">
        {{ $t("home.eachAdd") }}
      </div>
    </n-space>
  </div>
  <div class="context4">
    <n-space justify="center">
      <n-grid cols="4" item-responsive responsive="screen" :x-gap="24">
        <n-grid-item span="4 m:2 l:2">
          <img
            src="@/assets/res/home-row4-left.png"
            alt=""
            class="media-img-4"
          />
        </n-grid-item>
        <n-grid-item span="4 m:2 l:2">
          <div>
            <h1 style="font-size: 3em">{{ $t("home.firstPlanet") }}</h1>
            <h3>
              {{ $t("home.ucans") }}
              <span style="color: #866c3a">VEN/USDC VEN/WETH</span> <br />
              {{ $t("home.joinin") }}
            </h3>
          </div>
          <n-space>
            <n-tag
              @click="toLink('/Venus')"
              round
              style="
                background: transparent;
                color: #fff;
                font-weight: 700;
                border: 0;
                padding:0 15px;
                cursor: pointer;

              "
              >{{ $t("home.toStake") }}</n-tag
            >
          </n-space>
        </n-grid-item>
      </n-grid>
    </n-space>
  </div>
  <div class="context5">
    <n-space class="title">
      <n-tag
        style="
          background: transparent;
          color: #fff;
          font-weight: 700;
          border: 0;
          border-radius: 10px;
          padding: 20px 10px;
          font-size: 1.5em;
        "
        >NFT DEFI TO EARN</n-tag
      >
    </n-space>
    <n-space>
      <img :src="getLangImg" alt="" class="-centerimg" />
    </n-space>
    <img
      src="@/assets/res/home-row5-bottom.png"
      alt=""
      srcset=""
      class="absolute-img"
    />
  </div>
  <div class="context6">
    <n-space justify="center" align="center">
      <div class="-bgimg">
        <h1>BLACK HOLE</h1>
        <h3>
          <span style="color: #eca63d">{{ $t("home.general") }}</span>
          {{ $t("home.blackholea") }}
          <span style="color: #eca63d">{{ $t("home.super") }}</span>
          {{ $t("home.blackhole") }}
        </h3>
      </div>
    </n-space>
    <n-space>
      <n-grid cols="2" responsive="screen">
        <n-grid-item>
          <img
            src="@/assets/res/home-row6-left.png"
            alt=""
            class="pleant-img-small"
          />
        </n-grid-item>
        <n-grid-item>
          <img
            src="@/assets/res/home-row6-right.png"
            alt=""
            class="pleant-img-big"
          />
        </n-grid-item>
      </n-grid>
    </n-space>
    <n-tag
      round
      style="
        background: transparent;
        color: #fff;
        font-weight: 700;
        border: 0;
        padding: 10px 20px;
        --n-border: 4px solid #888f8f;
      "
      >{{ $t("home.enter") }}</n-tag
    >
    <n-space justify="center" align="center">
      <div style="text-align: center; margin-top: 20px" class="span-media">
        {{ $t("home.blackholetip") }}
      </div>
    </n-space>
    <Nfooter style="margin-top: 50px" />
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
import { CaretRight24Filled } from "@vicons/fluent";
import Nfooter from "@/layout/footer.vue";

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

const getLangImg = computed(() => {
  let path =
    locale.value === "en"
      ? "/dynamic/home-row5-center-en.png"
      : "/dynamic/home-row5-center-zh.png";
  return path;
});
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
  min-height: 85%;
  text-align: left;
  position: relative;
  overflow: auto;
  background-image: url("@/assets/res/home-bg1.png");
  background-size: cover;
  padding-top: 100px;
}
.context2 {
  min-height: 300px;
  text-align: left;
  position: relative;
  background-image: url("@/assets/res/home-bg2.png");
  background-size: cover;
  display: flex;
  align-items: center;
}
.context3 {
  min-height: 300px;
  text-align: left;
  position: relative;
  background-image: url("@/assets/res/home-bg3.png");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.context4 {
  min-height: 400px;
  text-align: left;
  position: relative;
  overflow: auto;
  background-image: url("@/assets/res/home-bg4.png");
  background-size: cover;
  padding-top: 50px;

  .media-img-4 {
    width: 350px;
    margin-top: 30px;
  }
}
.context5 {
  min-height: 500px;
  background-image: url("@/assets/res/home-bg5.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  align-items: center;
  padding: 50px 0;
  .title {
    position: relative;
    left: -350px;
  }
  .absolute-img {
    position: absolute;
    left: 80px;
    width: 250px;
    bottom: -100px;
  }
}
.context6 {
  min-height: 500px;
  background-image: url("@/assets/res/home-bg6.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  align-items: center;
  padding: 50px 0 0;
  text-align: right;
  justify-content: center;

  .-bgimg {
    background-image: url("@/assets/res/home-row6-top.png");
    background-size: 100% 100%;
    padding: 10px 16px;
    text-align: center;
    min-width: 300px;
  }
}
@media screen and (max-width: 400px) {
  .context {
    height: 100%;
    padding-top: 50px;
  }
  .media-img {
    width: 280px;
    margin-top: 30px;
  }
  .media-img-4 {
    width: 280px;
    margin-top: 30px;
  }
  .context4,
  .context2 {
    padding: 50px 0;
  }
  .context5 {
    .-centerimg {
      width: 98%;
      margin: 50px 0;
    }
    .title {
      position: relative;
      left: -50px;
    }
    .absolute-img {
      position: absolute;
      left: 30px;
      width: 150px;
      bottom: -50px;
    }
  }
  .context6 {
    text-align: center;
  }
  .pleant-img-small {
    width: 150px;
    height: 150px;
  }
  .pleant-img-big {
    width: 250px;
    height: 240px;
    margin-left: -50px;
  }
  .span-media {
    width: 90%;
    margin: 0 auto;
  }
}
</style>
