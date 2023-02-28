<template>
  <div class="center" id="modal">
    <QrcodeVue :value="url" :size="100" level="H" />
    <p>{{ url }}</p>
    <div class="copy" @click="copy">
      {{ $t("mine.copy") }}
    </div>
  </div>
</template>
<script setup>
import { useMessage } from "naive-ui";
import { useI18n } from "vue-i18n";
import { computed, onActivated, onMounted, watch, watchEffect } from "vue";
import QrcodeVue from "qrcode.vue";
import Clipboard from "clipboard";
import { useStore } from "vuex";

const store = useStore();
const { t, locale } = useI18n();
const message = useMessage();
// 邀请链接
const url = ref("");
// 复制连接
const copy = () => {
  var clipboard = new Clipboard(".copy", {
    container: document.getElementById("modal"),
  });
  clipboard.on("success", (e) => {
    message.success(t("mine.copySuccess"));
    // 释放内存
    clipboard.destroy();
  });
  clipboard.on("error", (e) => {
    console.log("e", e);
    // 不支持复制
    // 释放内存
    clipboard.destroy();
  });
};
const account = computed(() => {
  return store.state.web3.defaultAccount;
});
onMounted(() => {
  if (account.value) {
    let inviteUrl =
      window.location.origin + "/#/?ref=" + account.value;
    url.value = inviteUrl;
    document
      .querySelector(".copy")
      .setAttribute("data-clipboard-text", inviteUrl);
  }
});
</script>
<style lang="less" scoped>
.center {
  text-align: center;

  .copy {
    padding: 5px 15px;
    border-radius: 5px;
    border: 1px solid #fff;
    color: #fff;
    display: inline-block;
  }
}
</style>
