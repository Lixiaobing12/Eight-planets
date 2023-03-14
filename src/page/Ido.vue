<template>
  <div class="context">
    <div style="text-align: center; flex: 1; padding: 20px 0 50px">
      <n-space justify="center" align="center">
        <n-grid cols="1 m:4" responsive="screen" :y-gap="48">
          <n-grid-item span="0 m:1"> </n-grid-item>
          <n-grid-item>
            <div class="bg">
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
                    <div class="but1" @click="buy">
                      <n-spin :size="16" v-if="locading" stroke="#fff" />
                      <span v-else>{{ $t("home.pay") }}</span>
                    </div>
                  </n-gi>
                  <n-gi>
                    <div class="but1 withdraw">{{ $t("home.withward") }}</div>
                  </n-gi>
                </n-grid>
              </div>

              <div style="width: 100%">
                <div class="data-img ethimg">
                  <span>{{ $t("home.amount") }}：</span>
                  <span>0.05 - 5 ETH</span>
                </div>
                <div class="data-img">
                  <span>{{ $t("home.Quantity") }}：</span>
                  <span>10,000,000</span>
                </div>
              </div>
            </div>
          </n-grid-item>
          <n-grid-item>
            <div style="max-width: 600px; padding: 0 20px">
              <div class="title">
                <img src="@/assets/web/home-transparent-lobo.png" alt="" width="40" />
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
                          >VEN</span
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
          </n-grid-item>
          <n-grid-item span="0 m:1"> </n-grid-item>
        </n-grid>
      </n-space>
    </div>
    <Nfooter />
  </div>
</template>
<script setup>
import useState from "@/plugins/useState";
import { useI18n } from "vue-i18n";
import { useRouter, useRoute } from "vue-router";
import { useFetch } from "@/utils/request.js";
import { useStore } from "vuex";
import { computed, onActivated, ref, watch, nextTick } from "vue";
import { FORMATTER_ADDRS } from "@/utils/methods.js";
import { useMessage } from "naive-ui";
import BigNumber from "bignumber.js";
import loading from "naive-ui/es/_internal/loading";
import Nfooter from "@/layout/footer.vue";
import Clipboard from "clipboard";

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
const parent = ref("");
const inviteSize = ref(0);
const bindLoading = ref(false);
const inviteUrl = computed(() => {
  return account ? window.origin + "/#/Ido?ref=" + store.state.web3.defaultAccount : "";
});

const parentUrl = computed(() => {
  let ref = route.query.ref;
  if (ref === account.value) {
    ref = "";
  }
  return ref || "";
});

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
  console.log("buy");
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
    console.log(err);
    locading.value = false;
  }
};
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
let interval = null;
const fetch = () => {
  nextTick(() => {
    document.querySelector(".copy").setAttribute("data-clipboard-text", inviteUrl.value);
  });

  store.dispatch("web3/getInviter").then((res) => {
    if (res !== "0x0000000000000000000000000000000000000000") {
      parent.value = res;
    } else {
      if (parentUrl.value) {
        bind();
      }
    }
  });
  store.dispatch("web3/getInviterSunSize").then((res) => {
    inviteSize.value = res;
  });
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
  min-height: 100%;
  text-align: left;
  position: relative;
  background-image: url("@/assets/res/NFTBJ.png");
  background-size: cover;
  padding-top: 100px;
  display: flex;
  flex-direction: column;

  .bg {
    background: rgba(0, 0, 0, 0.5);
    padding: 40px 0;
    border-radius: 20px;
    width: 90vw;
    max-width: 380px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }
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

  .but1 {
    background-image: url("@/assets/web/home-n.png");
    background-size: 100% 100%;
    color: #fff;
    font-weight: 700;
    padding: 7px 16px;
    text-align: center;
  }
  .withdraw {
    filter: opacity(0.5);
  }

  .data-img {
    background: rgba(0, 0, 0, 0.6);
    border-radius: 25px;
    color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 80%;
    margin: 20px auto;
    padding: 0 16px;
    height: 50px;
    font-size: 1.2em;

    & span:nth-of-type(2) {
      font-size: 0.8em;
      margin-left: 2em;
    }
  }
  .ethimg {
  }

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
</style>
