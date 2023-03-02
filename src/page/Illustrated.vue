<template>
  <div>
    <img src="@/assets/web/ill-bg.png" alt="" style="width: 100%" />

    <div class="cover">
      <div class="font">NFT凭证—Snail蜗牛</div>
      <p>
        Snail蜗牛是SnailSwap生态中以ERC
        721形式发布的权益证明，持有不同等级的Snail蜗牛可享受SnailSwap生态和8个星球矿池在发展过程中的部分权益。
      </p>
    </div>

    <div style="margin: 20px 0; font-size: 0.9em; text-align: center">
      <div style="position: relative;margin:20px 0;">
        <img src="@/assets/web/snail1.png" alt="" style="width: 90%" />
        <span
          style="
            position: absolute;
            bottom: 30px;
            left: 34px;
            font-size: 1.2em;
            font-weight: 700;
          "
          >小蜗牛 <span style="margin-left:2em;font-size:1.5em">N</span></span
        >
        <div>【体型较小，能力差。狭小区域工作 特性：小巧、唯一】</div>
      </div>
      <div style="position: relative;margin:20px 0;">
        <img src="@/assets/web/snail2.png" alt="" style="width: 90%" />
        <span
          style="
            position: absolute;
            bottom: 30px;
            left: 34px;
            font-size: 1.2em;
            font-weight: 700;
          "
          >残疾蜗牛 <span style="margin-left:1.5em;font-size:1.5em">N</span></span
        >
        <div>【身体天生残疾，不能工作。特性：富有、聪明】</div>
      </div>
      <div style="position: relative;margin:20px 0;">
        <img src="@/assets/web/snail3.png" alt="" style="width: 90%" />
        <span
          style="
            position: absolute;
            bottom: 30px;
            left: 34px;
            font-size: 1.2em;
            font-weight: 700;
          "
          >大蜗牛 <span style="margin-left:2em;font-size:1.5em">N</span></span
        >
        <div>【天生神力，是一流的战士。但智商较低。特性：血量高】</div>
      </div>
      <div style="position: relative;margin:20px 0;">
        <img src="@/assets/web/snail4.png" alt="" style="width: 90%" />
        <span
          style="
            position: absolute;
            bottom: 55px;
            left: 34px;
            font-size: 1.2em;
            font-weight: 700;
          "
          >爆炸蜗牛 <span style="margin-left:1.4em;font-size:1.5em">R</span></span
        >
        <div>【身体总是处于不稳定状态。特性：每次爆炸后需要休息一段时间】</div>
      </div>

      <div style="position: relative;margin:20px 0;">
        <img src="@/assets/web/snail5.png" alt="" style="width: 90%" />
        <span
          style="
            position: absolute;
            bottom: 30px;
            left: 34px;
            font-size: 1.2em;
            font-weight: 700;
          "
          >极速蜗牛 <span style="margin-left:2em;font-size:1.5em">R</span></span
        >
        <div>【速度非常快，能够在短时间内连续攻击对手。特性：敏捷】</div>
      </div>
      <div style="position: relative;margin:20px 0;">
        <img src="@/assets/web/snail6.png" alt="" style="width: 90%" />
        <span
          style="
            position: absolute;
            bottom: 50px;
            left: 34px;
            font-size: 1.2em;
            font-weight: 700;
          "
          >天体蜗牛 <span style="margin-left:1.5em;font-size:1.5em">SR</span></span
        >
        <div>【科技合成蜗牛，吞噬低等级蜗牛，可以进化。特性：魔法免疫】</div>
      </div>

      <div style="position: relative;margin:20px 0;">
        <img src="@/assets/web/snail7.png" alt="" style="width: 90%" />
        <span
          style="
            position: absolute;
            bottom: 30px;
            left: 34px;
            font-size: 1.2em;
            font-weight: 700;
          "
          >变异蜗牛 <span style="margin-left:1.5em;font-size:1.5em">SR</span></span
        >
        <div>【变异蜗牛：极其稀有，个别属性满格】</div>
      </div>

      <div style="position: relative;margin:20px 0;">
        <img src="@/assets/web/snail8.png" alt="" style="width: 90%" />
        <span
          style="
            position: absolute;
            bottom: 30px;
            left: 34px;
            font-size: 1.2em;
            font-weight: 700;
          "
          >全能蜗牛 <span style="margin-left:1em;font-size:1.5em">SSR</span></span
        >
        <div>【各项属性均衡而且能力强，是合适的苦工。特性：限量】</div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="less" scoped>
.cover {
  background-image: url("@/assets/web/ill-cover.png");
  background-size: 100% 100%;
  width: 100%;
  color: #fff;
  padding: 16px;
  text-align: left;
  font-size: 0.9em;
  .font {
    background-image: url("@/assets/web/ill-font.png");
    background-size: 100% 100%;
    font-weight: 600;
    font-size: 1.2em;
    padding-left: 16px;
  }
}
</style>
