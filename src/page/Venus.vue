<template>
  <div class="bg">
    <div class="context">
      <n-space justify="space-evenly" align="center">
        <div
          class="pc-view"
          @click="toLink('/Pool')"
          style="cursor: pointer; text-align: center; display: flex; align-items: center"
        >
          <n-icon>
            <ArrowLeft />
          </n-icon>
          {{ $t("home.return") }}
        </div>
        <div class="title">
          <img src="@/assets/web/planet/planet1.png" alt="" />
          <div>
            <div
              style="
                font-size: 1.3em;
                margin-bottom: 10px;
                color: #ffc291;
                font-weight: 700;
              "
            >
              Venus
              <span v-show="locale === 'zh'">金星</span>
            </div>
            <div class="detail">
              {{ $t("home.venustip1") }}
            </div>
          </div>
        </div>
      </n-space>

      <div class="div-relative h5-view">
        <img src="@/assets/web/venus-img1.png" alt="" style="width: 100%" />
        <div class="absolute-span">
          {{ $t("home.venustip2") }}
        </div>
      </div>
      <n-space justify="center" align="center">
        <n-grid cols="1 m:3 " responsive="screen" :x-gap="48" :y-gap="48">
          <n-grid-item>
            <Stake name="VEN" arp="1580000%" url="../../assets/web/sanil.png" />
          </n-grid-item>
          <n-grid-item>
            <Stake name="VEN/WETH" arp="3650000%" url="../../assets/web/sanil-weth.png" />
          </n-grid-item>
          <n-grid-item>
            <Stake name="ARB/USDC" arp="200000%" url="../../assets/web/sanil-usdc.png" />
          </n-grid-item>
          <n-grid-item>
            <Stake name="USDT/USDC" arp="256%" url="../../assets/web/usdt-usdc.png" />
          </n-grid-item>
          <n-grid-item>
            <Stake name="WETH/USDC" arp="256%" url="../../assets/web/weth-usdc.png" />
          </n-grid-item>
        </n-grid>
      </n-space>
    </div>
    <Nfooter />
  </div>
</template>
<script setup>
import { useI18n } from "vue-i18n";
import Stake from "./childrens/stake.vue";
import Nfooter from "@/layout/footer.vue";
import { ArrowLeft } from "@vicons/tabler";
import { useRouter } from "vue-router";

const { locale } = useI18n();
const router = useRouter();
const toLink = (path) => {
  router.push({ path });
};
</script>
<style lang="less" scoped>
.h5-view {
  display: none !important;
}
.bg {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background-image: url("@/assets/res/NFTBJ.png");
  background-size: 100% 100%;
  padding-top: 80px;
}
.context {
  text-align: center;
  position: relative;

  .title {
    width: 90%;
    margin: 30px 10px 30px -100px;
    display: flex;
    justify-content: center;

    & > div {
      text-align: left;
      margin-left: 10px;
    }
    img {
      width: 120px;
      height: 120px;
    }
    .detail {
      font-size: 1em;
      word-break: break-all;
    }
  }

  @media screen and (max-width: 600px) {
    .title {
      margin: 30px auto;
    }
  }
  .div-relative {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
  }
  .absolute-span {
    position: absolute;
    width: 80%;
    right: 0;
    font-size: 0.9em;
  }
}
@media screen and (max-width: 600px) {
  .bg {
    padding: 50px 0 0;
    background-image: url("@/assets/web/venus-bg.png");
  }
  .h5-view {
    display: flex !important;
  }
}
</style>
