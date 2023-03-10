<template>
  <div class="context">
    <div class="but-group">
      <div :class="{ isActive: active === 0 }" @click="active = 0">Swap</div>
      <div :class="{ isActive: active === 1 }">
        <!-- <div :class="{ isActive: active === 1 }" @click="active = 1"> -->
        Liquidity
      </div>
    </div>
    <component :is="view" />
    <Nfooter />
  </div>
</template>
<script setup>
import { useMessage } from "naive-ui";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
import Swap from "./childrens/SwapCard.vue";
import Liquidity from "./childrens/SwapLiquidity.vue";
import Nfooter from "@/layout/footer.vue";

const message = useMessage();
const { t } = useI18n();
const store = useStore();
const account = computed(() => store.state.web3.defaultAccount);
const active = ref(0);
const view = computed(() => {
  return active.value === 0 ? Swap : Liquidity;
});
// 连接钱包
const connect = async () => {
  if (!account.value) {
    await store.dispatch("web3/connect");
    message.info(t("home.connectSuccess"));
  }
};
const confirm = () => {
  if (!account.value) {
    connect();
  }
};
</script>
<style lang="less" scoped>
.context {
  background-image: url("@/assets/res/home-bg3.png");
  background-size: cover;
  // height: 80%;
  padding: 20px 0 0;
  text-align: center;
  position: relative;
  padding-top: 100px;

  .img-top {
    margin-top: 40px;
    position: relative;

    .but {
      position: absolute;
      bottom: 40px;
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        position: absolute;
      }
    }
  }
  .but-group {
    width: 80%;
    height: 50px;
    max-width: 350px;
    background: #2f3e6e;
    border-radius: 25px;
    margin: 20px auto;
    display: flex;
    align-items: center;

    div {
      width: 50%;
      height: 100%;
      line-height: 50px;
      background-image: none;
      transition: width 500ms ease-out;
    }

    .isActive {
      border-radius: 25px;
      width: 60%;
      background-image: linear-gradient(90deg, #330d69, #30c9cd);
    }
  }
}
</style>
