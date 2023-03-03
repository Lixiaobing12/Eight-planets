<template>
  <div class="context">
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
          {{$t('home.venustip1')}}
        </div>
      </div>
    </div>

    <div class="div-relative">
      <img src="@/assets/web/venus-img1.png" alt="" style="width: 100%" />
      <div class="absolute-span">
        {{$t('home.venustip2')}}
      </div>
    </div>
    <Stake name="SNAIL" arp='256%' url="../../assets/web/sanil.png"/>
    <Stake name="SNAIL/WETH" arp='150%' url="../../assets/web/sanil-weth.png"/>
    <Stake name="SNAIL/USDC" arp='300%' url="../../assets/web/sanil-usdc.png"/>
    <Stake name="USDT/USDC" arp='256%' url="../../assets/web/usdt-usdc.png"/>
    <Stake name="WETH/USDC" arp='256%' url="../../assets/web/weth-usdc.png"/>
  </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
import Stake from './childrens/stake.vue'
const {locale} = useI18n();
</script>
<style lang="less" scoped>
.context {
  height: 100%;
  padding: 20px;
  text-align: center;
  position: relative;
  overflow: auto;
  background-image: url("@/assets/web/venus-bg.png");
  background-size: cover;

  .title {
    width: 90%;
    margin: 30px auto 10px;
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
      font-size: 0.7em;
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
    font-size: .9em;
  }
}
</style>
