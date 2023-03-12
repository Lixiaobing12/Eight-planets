<template>
  <div class="content">
    <div class="title">
      <div>
        <n-icon :size="60">
          <img src="/logo.png" style="width: 100%" alt="" />
        </n-icon>
        <div class="title-span">
          <div>{{ $t("home.Exchange") }}</div>
          <div style="font-size: 12px">{{ $t("home.tokenTransaction") }}</div>
        </div>
      </div>
      <n-popover
        :overlap="overlap"
        placement="bottom"
        trigger="click"
        :show-arrow="false"
        content-style="padding: 0;"
        style="padding: 0"
      >
        <template #trigger>
          <n-icon :size="28">
            <Settings />
          </n-icon>
        </template>
        <n-card>
          <div>{{ $t("home.setting") }}</div>
          <div>{{ $t("home.tolerance") }}</div>
          <n-space style="margin: 10px">
            <n-button-group>
              <n-button round @click="tolerance = 0.1"> 0.1% </n-button>
              <n-button ghost @click="tolerance = 0.5"> 0.5% </n-button>
              <n-button @click="tolerance = 1"> 1% </n-button>
            </n-button-group>
            <n-input-number
              v-model:value="tolerance"
              :show-button="false"
              style="width: 70px"
              placeholder="2"
            >
              <template #suffix> % </template>
            </n-input-number>
          </n-space>
          <div>{{ $t("home.deadline") }}</div>
          <n-space align="end">
            <n-input-number :show-button="false" style="width: 70px" placeholder="2">
            </n-input-number>
            {{ $t("home.minutes") }}
          </n-space>
        </n-card>
      </n-popover>
    </div>

    <div class="context">
      <!-- from -->
      <n-card
        :style="{ order: transform ? '0' : '2' }"
        style="
          background: transparent;
          color: #fff;
          --n-border-color: #35696e;
          border-width: 2px;
          border-radius: 15px;
        "
      >
        <div slot="header" style="display: flex; justify-content: space-between">
          <div style="font-size: 1.2em; font-weight: 700">From</div>
          <n-button round @click="onopen('from')">
            <n-icon slot="icon" color="#fff" :size="18">
              <ChevronDown12Filled />
            </n-icon>
            <img
              :src="fromCoin.img"
              alt=""
              srcset=""
              style="margin: 0 10px; width: 25px; height: 25px"
            />
            <span style="color: #fff; font-weight: 700">{{ fromCoin.name }}</span>
          </n-button>
        </div>

        <n-input-number
          placeholder=""
          v-model:value="frominput"
          :show-button="false"
          style="text-align: left; background: transparent; --n-text-color: #fff"
          :bordered="false"
        />
      </n-card>
      <n-icon :size="25" style="margin: 20px 0; order: 1" @click="transform = !transform">
        <ArrowCircleDown48Filled />
      </n-icon>
      <!-- to -->
      <n-card
        :style="{ order: transform ? '2' : '0' }"
        style="
          background: transparent;
          color: #fff;
          --n-border-color: #35696e;
          border-width: 2px;
          border-radius: 15px;
        "
      >
        <div slot="header" style="display: flex; justify-content: space-between">
          <div style="font-size: 1.2em; font-weight: 700">To</div>
          <n-button round @click="onopen('to')">
            <n-icon slot="icon" color="#fff" :size="18">
              <ChevronDown12Filled />
            </n-icon>
            <img
              :src="toCoin.img"
              alt=""
              srcset=""
              style="margin: 0 10px; width: 25px; height: 25px"
            />
            <span style="color: #fff; font-weight: 700">{{ toCoin.name }}</span>
          </n-button>
        </div>

        <n-input-number
          placeholder=""
          v-model:value="toinput"
          :show-button="false"
          style="text-align: left; background: transparent; --n-text-color: #fff"
          :bordered="false"
        />
      </n-card>
    </div>
    <n-tag
      size="large"
      round
      :bordered="false"
      @click="swap"
      style="
        width: 70%;
        color: #fff;
        background-image: linear-gradient(90deg, #330d69, #30c9cd);
        text-align: center;
        justify-content: center;
        --n-height: 50px;
      "
    >
      {{ $t("home.swapa") }}
    </n-tag>
  </div>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 90%; max-width: 400px; border-radius: 30px"
      title="Select a token"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <n-list clickable hoverable>
        <n-scrollbar style="max-height: 400px">
          <n-list-item v-for="(v, i) in coins" :key="i" @click="onselectItem(v)">
            <n-thing>
              <div
                slot="header"
                style="display: flex; align-items: center; justify-content: space-between"
              >
                <div style="display: flex">
                  <img :src="v.img" alt="" srcset="" width="30" />
                  <div style="margin-left: 10px; font-size: 1.2em; font-weight: 700">
                    {{ v.name }}
                  </div>
                </div>
                <div>
                  <n-spin>
                    <template #icon>
                      <n-icon :size="20" color="#333">
                        <Reload />
                      </n-icon>
                    </template>
                  </n-spin>
                </div>
              </div>
            </n-thing>
          </n-list-item>
        </n-scrollbar>
      </n-list>
    </n-card>
  </n-modal>
</template>
<script setup>
import { Settings } from "@vicons/carbon";
import { ArrowCircleDown48Filled, ChevronDown12Filled } from "@vicons/fluent";
import coins from "@/assets/coins/coin.json";
import { Reload } from "@vicons/ionicons5";
import { useStore } from "vuex";
import { useMessage } from "naive-ui";
import { useI18n } from "vue-i18n";
import { computed } from "vue";
// 币种选择框
const showModal = ref(false);
const fromCoin = ref(coins.find((i) => i.isFromDefault));
const toCoin = ref(coins.find((i) => i.isToDefault));
const frominput = ref(0.0);
const toinput = ref(0.0);
const transform = ref(false);
const tolerance = ref(null);
const store = useStore();
const message = useMessage();
const { t } = useI18n();
const account = computed(() => store.state.web3.defaultAccount);


let openType = "from";
//打开币种弹窗
const onopen = (type) => {
  openType = type;
  showModal.value = true;
};
// 选择币种
const onselectItem = (item) => {
  if (openType === "from") {
    fromCoin.value = item;
  } else {
    toCoin.value = item;
  }
  showModal.value = false;
};
const swap = () => {
  console.log(account);
  if (account.value) {
    message.success(t("home.swapSuccess"));
  } else {
    message.warning(t("home.placeConnect"));
  }
};
</script>
<style lang="less" scoped>
.content {
  background: rgba(20, 26, 35, 0.5);
  width: 95%;
  max-width: 400px;
  border-radius: 20px;
  margin: 50px auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    .title-span {
      margin-left: 20px;
      text-align: left;
    }
  }

  .context {
    width: 100%;
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    ::v-deep(.n-input) {
      background: transparent;
      border-color: transparent;
      color: #fff;

      .n-input__input-el {
        color: #fff;
        font-size: 1.2em;
      }
    }
  }
}

::v-deep(.n-scrollbar-rail__scrollbar) {
  background: transparent !important;
}

::v-deep(.n-spin) {
  height: 20px !important;
  width: 20px !important;
}

// ::v-deep(.n-popover__content) {
//   .n-card__content {
//     padding: 0 !important;
//   }
// }
</style>
