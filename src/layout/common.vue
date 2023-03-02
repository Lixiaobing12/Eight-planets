<template>
  <div class="layout">
    <div class="layout-context">
      <div @click="toHome">
        <img src="/logo.png" width="50" alt="" />
        <div class="title">SNAIL SWAP</div>
      </div>

      <div>
        <n-button color="#59c2cb" @click="connect">
          {{ account ? FORMATTER_ADDRS(account) : "Unlock Wallet" }}
        </n-button>
        <img
          src="@/assets/web/lang.png"
          width="40"
          alt=""
          style="margin: 0 10px"
          @click="changeLang"
        />
        <img
          src="@/assets/web/to-left.png"
          width="25"
          alt=""
          @click="active = true"
        />
      </div>
    </div>
    <div class="layout-body">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <keep-alive exclude="StarTeam,Wallet,EarningsDetail">
            <component :is="Component" :key="route.name" />
          </keep-alive>
        </transition>
      </router-view>
    </div>
  </div>
  <n-drawer
    v-model:show="active"
    width="50%"
    placement="right"
    style="top: 50px; background: #0b2438; color: #fff"
  >
    <n-drawer-content>
      <div v-for="i in 10" :key="i" class="imgs" @click="toLink(i)">
        <img :src="getURL(i)" alt="" />
        <div class="absolute">{{ $t(getName(i)) }}</div>
      </div>
      <div
        style="display: flex; justify-content: space-around; margin-top: -30px"
      >
        <img src="@/assets/web/discord.png" alt="" width="30" />
        <img src="@/assets/web/twitter.png" alt="" width="30" />
        <img src="@/assets/web/telegram.png" alt="" width="30" />
      </div>
    </n-drawer-content>
  </n-drawer>
</template>
<script setup>
import { useRouter, useRoute } from "vue-router";
import { ArrowNarrowRight } from "@vicons/tabler";
import { computed } from "vue";
import { useMessage } from "naive-ui";
import { useStore } from "vuex";
import { FORMATTER_ADDRS } from "@/utils/methods.js";
import { useI18n } from "vue-i18n";
import {routes} from "@/router.js";

console.log(routes)
const message = useMessage();
const { t, locale } = useI18n();
const route = useRoute();
const router = useRouter();
const store = useStore();
// 抽屉
const active = ref(false);
const account = computed(() => store.state.web3.defaultAccount);
const metaName = computed(() => route.meta.name || "router.home");
// 连接钱包
const connect = async () => {
  if (!account.value) {
    await store.dispatch("web3/connect");
    message.info(t("home.connectSuccess"));
  }
};
// 切换语言
const changeLang = () => {
  locale.value = locale.value === "zh" ? "en" : "zh";
};
// 动态图片
const getURL = (i) => {
  return new URL(`../assets/web/link-${i}.png`, import.meta.url).href;
};
// 跳转
const toLink = (i) => {
  if ([3, 5, 6, 7, 8].includes(i)) {
    message.info(t("home.Coming soon"));
    return;
  }
  console.log("i", i);
  let path = "/Swap";
  switch (i) {
    case 2:
      path = "/Pool";
      break;
    case 3:
      path = "/blackhole";
      break;
    case 4:
      path = "/NFT";
      break;
    case 5:
      path = "/Market";
      break;
    case 6:
      path = "/UCity";
      break;
    case 7:
      path = "/Ifo";
      break;
    case 8:
      path = "/StarLeague";
      break;
    case 9:
      path = "/whilePaper";
      break;
    case 10:
      path = "/Invite";
      break;
  }
  router.push({ path });
};
// 获取名称
const getName = (i) => {
  let name = "";
  switch (i) {
    case 1:
      name = "home.SnailSwap";
      break;
    case 2:
      name = "home.PlanetPool";
      break;
    case 3:
      name = "home.blackhole";
      break;
    case 4:
      name = "home.nft";
      break;
    case 5:
      name = "home.Market";
      break;
    case 6:
      name = "home.UndergroundCity";
      break;
    case 7:
      name = "home.ifo";
      break;
    case 8:
      name = "home.StarLeague";
      break;
    case 9:
      name = "home.whilePaper";
      break;
    case 10:
      name = "home.Invite";
      break;
  }
  return name;
};
// 返回首页
const toHome = () => {
  router.push({ path: "/" });
};
window.$message = useMessage();
</script>
<style lang="less" scoped>
.layout {
  height: 100vh;
  width: 100vw;
  background-image: url("@/assets/web/body-bg.png");
  background-size: cover;

  position: relative;

  display: flex;
  flex-direction: column;

  .layout-body {
    height: 100%;
    padding-top: 40px;
  }

  .layout-context {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px 10px 10px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background: transparent;

    & > div {
      display: flex;
      align-items: center;
    }
    .title {
      font-weight: 500;
      font-size: 15px;
      margin-left: 10px;
    }
  }

  .layout-footer {
    color: #000;
    display: flex;
    align-items: center;
    padding: 5px 0 15px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background: #fff;
    a:-webkit-any-link {
      text-decoration: none;
    }
    // .link-filter {
    //   filter: grayscale(1);
    // }
    .n-grid div {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
    .title {
      flex: 1;
      color: #7e77ff;
    }
  }
}
::v-deep(.n-drawer-body-content-wrapper) {
  padding: 16px 16px 40px !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.imgs {
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
  .absolute {
    position: absolute;
  }
}
</style>
