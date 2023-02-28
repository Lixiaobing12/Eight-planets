<template>
  <div class="context">
    <n-grid x-gap="12" :cols="4">
      <n-gi>
        <div class="span-position" @click="toLink('/BuyMachine')">
          <img
            src="@/assets/img/buymachine-maxreward.png"
            alt=""
            style="width: 40px; height: 40px"
          />
          <div>{{ $t("buyMachine.multipleEarnings") }}</div>
        </div>
      </n-gi>
      <n-gi>
        <div class="span-position">
          <img
            src="@/assets/img/buymachine-zero.png"
            alt=""
            style="width: 35px; height: 40px"
          />
          <div>{{ $t("buyMachine.miningEfficiency") }}</div>
        </div>
      </n-gi>
      <n-gi>
        <div class="span-position">
          <img
            src="@/assets/img/buymachine-day.png"
            alt=""
            style="width: 45px; height: 40px"
          />
          <div>{{ $t("buyMachine.dailyEarnings") }}</div>
        </div>
      </n-gi>
      <n-gi>
        <div class="span-position">
          <img
            src="@/assets/img/buymachine-100p.png"
            alt=""
            style="width: 50px; height: 40px"
          />
          <div>{{ $t("buyMachine.mechanism") }}</div>
        </div>
      </n-gi>
    </n-grid>

    <div class="items">
      <div class="item-detail" v-for="(item, index) in machines" :key="index">
        <img :src="item.img" alt="" width="60" />
        <div>
          <div style="color: #eecb54; font-size: 1.2em">
            {{ $t(item.name) }}
          </div>
          <div>{{ $t("buyMachine.price") }}：{{ item.price }} SDT</div>
          <div>{{ $t("buyMachine.power") }}：{{ item.power }}P</div>
          <div>{{ $t("buyMachine.tiem") }}：12 months</div>
        </div>
        <div>
          <div class="buy" @click="buy(item.price, index)">
            <n-spin
              :size="18"
              stroke="#fff"
              v-if="state.loading.includes(index)"
            />
            <span v-else>{{ $t("buyMachine.buy") }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useMessage } from "naive-ui";
import { reactive, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";

const { t } = useI18n();
const store = useStore();
const message = useMessage();
const state = reactive({
  loading: [],
});
const machines = ref([
  {
    img: new URL("../../assets/img/machine-low.png", import.meta.url).href,
    price: "10",
    power: "0.1",
    name: "buyMachine.Silver",
  },
  {
    img: new URL("../../assets/img/machine-low.png", import.meta.url).href,
    price: "100",
    power: "1",
    name: "buyMachine.gold",
  },
  {
    img: new URL("../../assets/img/machine-low.png", import.meta.url).href,
    price: "1000",
    power: "10",
    name: "buyMachine.Platinum",
  },
  {
    img: new URL("../../assets/img/machine-low.png", import.meta.url).href,
    price: "10000",
    power: "100",
    name: "buyMachine.Diamond",
  },
  {
    img: new URL("../../assets/img/machine-height.png", import.meta.url).href,
    price: "30000",
    power: "300",
    name: "buyMachine.Meteorite",
  },
  {
    img: new URL("../../assets/img/machine-height.png", import.meta.url).href,
    price: "100000",
    power: "1000",
    name: "buyMachine.Interstellar",
  },
]);
const buy = (price, index) => {
  if (state.loading.includes(index)) return;
  state.loading.push(index);
  store
    .dispatch("web3/buy", price)
    .then((res) => {
      message.success(t("buyMachine.buySuccess"));
    })
    .finally(() => {
      state.loading = state.loading.filter((i) => i !== index);
    });
};
</script>
<style lang="less" scoped>
.context {
  background: #24193d;
  height: 100%;
  width: 100vw;
  padding: 20px;
  overflow: auto;
  .span-position {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
      margin-top: 10px;
      font-size: 0.8em;
      color: #b5acd3;
      text-align: center;
    }
  }

  .items {
    margin: 20px 0;
    padding-bottom: 0px;
    .item-detail {
      background: #32254e;
      display: flex;
      align-items: center;
      padding: 15px;
      color: #b5acd3;
      font-size: 0.9em;
      justify-content: space-around;
      margin-bottom: 15px;

      .buy {
        background-image: url("@/assets/img/buy-machine.png");
        background-size: 100% 100%;
        padding: 5px 15px;
      }
    }
  }
}
</style>
