<template>
  <div class="layout">
    <div class="layout-context">
      <div @click="toHome">
        <img src="/logo.png" width="50" alt="" />
        <div class="title">SNAIL SWAP</div>
      </div>
      <div class="pc-view">
        <n-menu
          style="
            --n-item-text-color-active-hover-horizontal: #fff;
            --n-item-text-color-active-horizontal: #fff;
            --n-item-text-color-hover-horizontal: #fff;
            --n-item-text-color: #c0c0c0;
            --n-item-text-color-child-active-horizontal:#fff;
            --n-item-text-color-child-active-hover-horizontal:#fff;
            --n-option-text-color-active:#fff;
            --n-option-text-color-child-active:#fff;
          "
          mode="horizontal"
          :options="menuOptions"
          :root-indent="36"
          :indent="2"
          :on-update:value="onMenuClick"
        />
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
          class="h5-view"
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
    style="top: 50px; background: #0b2438; color: #fff; max-width: 240px"
  >
    <n-drawer-content class="h5-view-drawer">
      <n-menu
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
        :root-indent="36"
        :indent="2"
        :on-update:value="onMenuClick"
      />
      <div
        style="display: flex; justify-content: space-around; margin-top: -30px"
      >
        <img
          src="@/assets/web/telegram.png"
          alt=""
          width="30"
          @click="toURL('https://t.me/Snail_SuperFarm')"
        />
        <img
          src="@/assets/web/twitter.png"
          alt=""
          width="30"
          @click="toURL('https://twitter.com/Snail_SuperFarm')"
        />
        <img
          src="@/assets/web/discord.png"
          alt=""
          width="30"
          @click="toURL('https://discord.gg/zfNTE5mBYw')"
        />
      </div>
    </n-drawer-content>
  </n-drawer>
</template>
<script setup>
import { useRouter, useRoute } from "vue-router";
import { ArrowNarrowRight } from "@vicons/tabler";
import { computed, h, render } from "vue";
import { useMessage, NIcon } from "naive-ui";
import { useStore } from "vuex";
import { FORMATTER_ADDRS } from "@/utils/methods.js";
import { useI18n } from "vue-i18n";
import { routes } from "@/router.js";

function renderIcon(icon) {
  return () =>
    h(NIcon, null, {
      default: () => h("img", { src: icon, style: "width:100%" }),
    });
}
const message = useMessage();
const { t, locale } = useI18n();
const route = useRoute();
const router = useRouter();
const store = useStore();
// 抽屉
const active = ref(false);
const account = computed(() => store.state.web3.defaultAccount);
const metaName = computed(() => route.meta.name || "router.home");
const isH5 = ref(false);
window.onresize = (e) => {
  isH5.value = e.target.innerWidth < 400;
  console.log("isH5", isH5.value);
};
// 连接钱包
const connect = async () => {
  if (!account.value) {
    await store.dispatch("web3/connect");
    message.info(t("home.connectSuccess"));
  }
};
const menuOptions = computed({
  get: () => {
    return routes
      .filter((i) => i.meta.isVisiable)
      .map((item) => {
        return {
          label: t(item.meta.name),
          key: item.name,
          path: item.path,
          chickEvent: item.meta.chickEvent || "nomal",
          icon: isH5.value ? renderIcon(item.meta.icon) : null,
          meta: item.meta,
          children: item.children
            ? item.children
                .filter((i) => i.meta.isVisiable)
                .map((i) => ({
                  label: t(i.meta.name),
                  key: i.name,
                  meta: i.meta,
                  path: i.path,
                  chickEvent: item.meta.chickEvent || "nomal",
                }))
            : "",
        };
      });
  },
});
// 切换语言
const changeLang = () => {
  locale.value = locale.value === "zh" ? "en" : "zh";
};
// 动态图片
const getURL = (i) => {
  return new URL(`../assets/web/link-${i}.png`, import.meta.url).href;
};
// 跳转
const onMenuClick = (key, item) => {
  console.log(key, item);
  if (item.meta && item.chickEvent === "notice") {
    return message.info(t("home.Coming soon"));
  } else if (item.meta && item.chickEvent === "open") {
    window.open(item.meta.url);
    return;
  }
  router.push({ path: item.path });

  // if ([3, 5, 6, 7, 8].includes(i)) {
  //   message.info(t("home.Coming soon"));
  //   return;
  // }
  // console.log("i", i);
  // let path = "/Swap";
  // switch (i) {
  //   case 2:
  //     path = "/Pool";
  //     break;
  //   case 3:
  //     path = "/blackhole";
  //     break;
  //   case 4:
  //     path = "/NFT";
  //     break;
  //   case 5:
  //     path = "/Market";
  //     break;
  //   case 6:
  //     path = "/UCity";
  //     break;
  //   case 7:
  //     path = "/Ifo";
  //     break;
  //   case 8:
  //     path = "/StarLeague";
  //     break;
  //   case 9:
  //     path = "/whilePaper";
  //     break;
  //   case 10:
  //     path = "/Invite";
  //     break;
  // }
  // router.push({ path });
};
// 跳转外链
const toURL = (i) => {
  window.open(i);
};
// 返回首页
const toHome = () => {
  router.push({ path: "/" });
};
window.$message = useMessage();
</script>
<style lang="less" scoped>
::v-deep(.n-menu) {
  .n-menu--horizontal
    .n-menu-item-content:not(.n-menu-item-content--disabled):hover {
    font-size: 1.2em;
  }
}
.layout {
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  position: relative;

  display: flex;
  flex-direction: column;

  .layout-body {
    height: 100%;
    // padding-top: 45px;
  }

  .layout-context {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 80px;
    padding: 0 20px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background: rgba(0, 0, 0, 0.4);

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
  @media screen and (max-width: 400px) {
    .layout-context {
      height: auto;
      justify-content: space-between;
      padding: 10px 20px 10px 10px;
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
.h5-view-drawer {
  ::v-deep(.n-menu) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 90%;
    .n-menu-item-content {
      padding-left: 20px !important;
    }
    .n-menu-item {
      background-image: url("@/assets/web/menu-bg.png");
      background-size: 100% 100%;
      height: 35px;
      .n-menu-item-content-header {
        color: #fff;
      }
    }
    .n-submenu-children {
      .n-menu-item {
        background-image: none;
      }
    }
    .n-menu-item-content:not(.n-menu-item-content--disabled):hover::before {
      background-color: inherit;
    }
    .n-menu-item-content:not(.n-menu-item-content--disabled):hover
      .n-menu-item-content-header {
      color: #fff;
    }
    .n-menu-item-content:not(.n-menu-item-content--disabled):hover
      .n-menu-item-content__arrow {
      color: #fff;
    }
    .n-menu-item-content.n-menu-item-content--collapsed
      .n-menu-item-content__arrow {
      color: #fff;
    }
    .n-menu-item-content.n-menu-item-content--selected::before {
      background-color: inherit;
    }
  }
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
