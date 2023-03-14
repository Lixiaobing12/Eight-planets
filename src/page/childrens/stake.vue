<template>
  <div class="stake">
    <div class="title">
      <img :src="getURL()" alt="" width="50" />
      <div>{{ name }}</div>
    </div>
    <div class="title">
      <div>ARP</div>
      <div>{{ arp }}</div>
    </div>
    <div class="title">
      <div>{{ $t("home.earn") }}</div>
      <div>VEN</div>
    </div>
    <div class="title">
      <div>
        <div>VEN {{ $t("home.earned") }}</div>
        <div>0</div>
      </div>
      <div>
        <n-button
          style="width: 100px; border-radius: 15px; margin: 10px 0"
          color="#bfbfbf"
          >{{ $t("home.harvest") }}</n-button
        >
      </div>
    </div>
    <div>
      <n-button
        style="width: 200px; border-radius: 15px; margin: 10px 0"
        color="#68e1eb"
        >{{ $t("home.stake") }}</n-button
      >
    </div>
    <div>
      <n-button
        style="width: 200px; border-radius: 15px; margin: 10px 0"
        color="#68e1eb"
        >{{ $t("home.unstake") }}</n-button
      >
    </div>
    <div class="title">
      <div>{{ $t("home.totalLiquidity") }}:</div>
      <div>$0</div>
    </div>
  </div>
</template>
<script setup>
import { toRefs } from "vue";

const props = defineProps({
  name: String,
  arp: String,
  url: String,
});
const { name, arp } = toRefs(props);
const getURL = () => {
  let url = "";
  switch (name.value) {
    case "SNAIL":
      url = "/snail.png";
      break;
    case "SNAIL/WETH":
      url = "/snail-weth.png";
      break;
    case "SNAIL/USDC":
      url = "/snail-usdc.png";
      break;
    case "USDT/USDC":
      url = "/usdt-usdc.png";
      break;
    case "WETH/USDC":
      url = "/weth-usdc.png";
      break;
  }
  return url;
};
</script>
<style lang="less" scoped>
.stake {
  background-image: url("@/assets/web/stake-bg.png");
  background-size: 100% 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  max-width: 350px;
  width: 90vw;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 10px 0;
  }
}
</style>
