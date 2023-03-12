<template>
  <div class="context">
    <div style="max-width: 600px; margin: 20px auto; padding: 20px">
      <div class="title">
        <img src="@/assets/web/home-transparent-lobo.png" alt="" />
        <img src="@/assets/web/invite-r.png" alt="" class="img2" />
      </div>
      <div class="bg1">
        <div style="margin-bottom: 30px">
          <div style="display: flex">
            <span>{{ $t("home.inviteLink") }}：</span>
            <n-scrollbar x-scrollable>
              <div
                style="
                  flex: 1;
                  background: #9ba2a9;
                  min-width: 200px;
                  white-space: nowrap;
                  padding: 5px 10px;
                  height: 30px;
                "
              >
                {{ parent || parentUrl }}
              </div>
            </n-scrollbar>
          </div>
          <div class="but" v-show="!parent">
            <n-button
              :loading="bindLoading"
              color="#59c2cb"
              style="padding: 7px 30px; height: auto"
              @click="bind"
              >{{ $t("home.Bind") }}</n-button
            >
          </div>
        </div>

        <div style="margin-bottom: 30px">
          <div style="display: flex">
            <span>{{ $t("home.MyLink") }}：</span>
            <n-scrollbar x-scrollable>
              <div
                style="
                  flex: 1;
                  background: #9ba2a9;
                  min-width: 200px;
                  white-space: nowrap;
                  padding: 5px 10px;
                  height: 30px;
                "
              >
                {{ inviteUrl }}
              </div>
            </n-scrollbar>
          </div>
          <div class="but">
            <n-button
              color="#59c2cb"
              style="padding: 7px 30px; height: auto"
              class="copy"
              @click="copy"
              >{{ $t("home.copy") }}</n-button
            >
          </div>
        </div>
      </div>
      <div class="bg2">
        <div>
          <n-grid x-gap="12" :cols="2">
            <n-gi>
              <div>{{ $t("home.invitees") }}</div>
              <div
                style="
                  color: #00c5cd;
                  font-size: 2em;
                  font-style: italic;
                  font-weight: 700;
                "
              >
                {{ inviteSize }}
              </div>
            </n-gi>
            <n-gi>
              <div>{{ $t("home.Reward") }}</div>
              <div
                style="
                  color: #00c5cd;
                  font-size: 2em;
                  font-style: italic;
                  font-weight: 700;
                "
              >
                0
                <span
                  style="
                    color: #00c5cd;
                    font-size: 12px;
                    font-style: italic;
                    font-weight: 700;
                  "
                  >SNAIL</span
                >
              </div>
            </n-gi>
          </n-grid>
          <div style="margin: 20px 0">
            <n-button color="#59c2cb" style="padding: 7px 30px; height: auto">{{
              $t("home.withward")
            }}</n-button>
          </div>
        </div>
      </div>
    </div>
    <Nfooter />
  </div>
</template>
<script setup>
import Nfooter from "@/layout/footer.vue";
import { useMessage } from "naive-ui";
import { computed, watch, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import Clipboard from "clipboard";

const message = useMessage();
const { t } = useI18n();
const store = useStore();
const route = useRoute();
const account = computed(() => store.state.web3.defaultAccount);
const parent = ref("");
const bindLoading = ref(false);
const inviteSize = ref(0);
const inviteUrl = computed(() => {
  return account
    ? window.origin + "?ref=" + store.state.web3.defaultAccount
    : "";
});
watch(account, () => {
  document
    .querySelector(".copy")
    .setAttribute("data-clipboard-text", inviteUrl.value);

  store.dispatch("web3/getInviter").then((res) => {
    if (res !== "0x0000000000000000000000000000000000000000") {
      parent.value = res;
    }
  });
  store.dispatch("web3/getInviterSunSize").then((res) => {
    inviteSize.value = res;
  });
});
const parentUrl = computed(() => {
  let ref = route.query.ref;
  if (ref === account.value) {
    ref = "";
  }
  return ref || "";
});

const bind = () => {
  if (parent.value) {
    return;
  } else if (parentUrl.value) {
    bindLoading.value = true;
    store
      .dispatch("web3/invite", parentUrl.value)
      .then((res) => {
        message.success(t("home.bind"));
      })
      .finally((res) => {
        bindLoading.value = false;
      });
  }
};

// 复制连接
const copy = () => {
  var clipboard = new Clipboard(".copy");
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
</script>
<style lang="less" scoped>
.context {
  min-height: 100%;
  text-align: center;
  position: relative;
  background-image: url("@/assets/res/NFTBJ.png");
  background-size: cover;
  padding-top: 80px;

  .title {
    display: flex;
    margin: 20px auto;
    justify-content: center;
    align-items: center;

    .img2 {
      width: 180px;
      margin-left: 20px;
    }
  }

  .bg1 {
    background-image: url("@/assets/web/invite-bg1.png");
    background-size: 100% 100%;
    padding: 40px 40px 20px;
    text-align: left;
    font-size: 0.9em;
  }

  .but {
    display: flex;
    justify-content: flex-end;
    margin: 10px 0 30px;
  }

  .bg2 {
    margin-top: 30px;
    background-image: url("@/assets/web/invite-bg2.png");
    background-size: 100% 100%;
    padding: 40px 40px 20px;
    font-size: 0.9em;
  }
}
@media screen and (max-width: 600px) {
  .context {
    padding-top: 30px;
  }
}
</style>
