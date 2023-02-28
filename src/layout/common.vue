<template>
  <div class="layout">
    <!-- <div class="layout-context">
      <n-icon size="30" v-show="!route.meta.homepage" @click="router.go(-1)">
        <ChevronLeft />
      </n-icon>
      <div
        class="title"
        :style="{ 'margin-left': route.meta.homepage ? '20px' : '-20px' }"
      >
        {{ $t(metaName) }}
      </div>
    </div> -->
    <div class="layout-body" :style="getHeight()">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <keep-alive exclude="StarTeam,Wallet,EarningsDetail">
            <component :is="Component" :key="route.name" />
          </keep-alive>
        </transition>
      </router-view>
    </div>
    <div
      class="layout-footer"
      :style="{ background: route.path === '/' ? '#0c062e' : '#fff' }"
      v-show="route.meta.homepage"
    >
      <n-grid x-gap="12" :cols="4">
        <n-gi>
          <div>
            <router-link to="/">
              <div class="link-filter" :style="getStyle('/')">
                <img width="36" src="@/assets/img/home-i.png" />
                <div class="title">{{ $t("router.page") }}</div>
              </div>
            </router-link>
          </div>
        </n-gi>
        <n-gi>
          <div>
            <router-link to="/Guess">
              <div class="link-filter" :style="getStyle('/Guess')">
                <img width="36" src="@/assets/img/guess-i.png" />
                <div class="title">{{ $t("router.guess") }}</div>
              </div>
            </router-link>
          </div>
        </n-gi>
        <n-gi>
          <div>
            <router-link to="/Mining">
              <div class="link-filter" :style="getStyle('/Mining')">
                <img width="36" src="@/assets/img/mining-i.png" />
                <div class="title">{{ $t("router.mining") }}</div>
              </div>
            </router-link>
          </div>
        </n-gi>
        <n-gi>
          <div>
            <router-link to="/Mine">
              <div class="link-filter" :style="getStyle('/Mine')">
                <img width="36" src="@/assets/img/mine-i.png" />
                <div class="title">{{ $t("router.mine") }}</div>
              </div>
            </router-link>
          </div>
        </n-gi>
      </n-grid>
    </div>
  </div>
</template>
<script setup>
import { useRouter, useRoute } from "vue-router";
import { ChevronLeft } from "@vicons/carbon";
import { computed } from "vue";
import { useMessage } from "naive-ui";
const route = useRoute();
const router = useRouter();

const metaName = computed(() => route.meta.name || "router.home");
const getStyle = (vpath) => {
  const path = route.path;
  return {
    filter: vpath === path ? "none" : "grayscale(1)",
  };
};
const getHeight = () => {
  const homepage = route.meta.homepage;
  return {
    height: homepage ? "calc(100% - 50px)" : "100%",
  };
};

window.$message = useMessage();
</script>
<style lang="less" scoped>
.layout {
  height: 100vh;
  width: 100vw;
  background: #000;

  position: relative;

  display: flex;
  flex-direction: column;

  .layout-body {
    // height: calc(100%);
    // margin-top: 52px;
  }

  .layout-context {
    color: #000;
    display: flex;
    align-items: center;
    padding: 10px 20px 10px 10px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background: #fff;
    .title {
      font-weight: 500;
      font-size: 20px;
      flex: 1;
      display: flex;
      justify-content: center;
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
</style>
