<template>
  <div class="context">
    <div class="img-top">
      <img src="@/assets/web/swap-title.png" alt="" style="width: 80%" />
    </div>
    <div class="img-top">
      <img src="@/assets/web/swap.png" alt="" style="width: 100%" />
      <div class="but" @click="confirm">
        <img src="@/assets/web/swap-but.png" alt="" style="width: 80%" />
        <span>{{account ? 'SWAP' :'Unlock Wallet'}}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useMessage } from "naive-ui";
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";

const message = useMessage();
const {t} = useI18n();
const store = useStore();
const account = computed(() => store.state.web3.defaultAccount);
// 连接钱包
const connect = async () => {
  if (!account.value) {
    await store.dispatch("web3/connect");
    message.info(t("home.connectSuccess"));
  }
};
const confirm = () =>{
    if(!account.value){
        connect()
    }
}
</script>
<style lang="less" scoped>
.context {
  height: 100%;
  padding: 20px;
  text-align: center;
  position: relative;
  overflow: auto;

  .img-top {
    margin-top: 40px;
    position: relative;

    .but{
        position: absolute;
        bottom: 40px;
        display: flex;
        align-items: center;
        justify-content: center;

        span{
            position: absolute;
        }
    }
  }
}
</style>
