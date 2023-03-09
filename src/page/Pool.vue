<template>
  <div class="context">
    <div class="ring" @click="toLink('/Venus')">
      <img
        src="@/assets/web/planet/planet1.png"
        alt=""
        width="120"
        class="round"
      />
      <div>
        <span>Venus</span>
        <span v-show="locale === 'zh'">金星</span>
      </div>
    </div>
    <div class="ring">
      <img
        src="@/assets/web/planet/planet2.png"
        alt=""
        width="120"
        class="round"
      />
      <div>
        <span>Jupiter</span>
        <span v-show="locale === 'zh'">木星</span>
      </div>
    </div>

    <div class="ring">
      <img
        src="@/assets/web/planet/planet3.png"
        alt=""
        width="120"
        class="round"
      />
      <div>
        <span>Mercury </span>
        <span v-show="locale === 'zh'">水星</span>
      </div>
    </div>

    <div class="ring">
      <img
        src="@/assets/web/planet/planet4.png"
        alt=""
        width="120"
        class="round"
      />
      <div>
        <span>Mars </span>
        <span v-show="locale === 'zh'">火星</span>
      </div>
    </div>

    <div class="ring">
      <img
        src="@/assets/web/planet/planet5.png"
        alt=""
        width="120"
        class="round"
      />
      <div>
        <span>Saturn </span>
        <span v-show="locale === 'zh'">土星</span>
      </div>
    </div>

    <div class="ring">
      <img
        src="@/assets/web/planet/planet6.png"
        alt=""
        width="120"
        class="round"
      />
      <div>
        <span>Uranus </span>
        <span v-show="locale === 'zh'">海王星</span>
      </div>
    </div>
    <div class="ring">
      <img
        src="@/assets/web/planet/planet7.png"
        alt=""
        width="120"
        class="round"
      />
      <div>
        <span>Neptune </span>
        <span v-show="locale === 'zh'">冥王星</span>
      </div>
    </div>
    <div class="ring">
      <img
        src="@/assets/web/planet/planet8.png"
        alt=""
        width="120"
        class="round"
      />
      <div>
        <span>Earth </span>
        <span v-show="locale === 'zh'">地球</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const router = useRouter();
const {locale} = useI18n();
const toLink = (path) => {
  router.push({ path });
};
</script>
<style lang="less" scoped>
.context {
  height: 100%;
  padding: 20px;
  text-align: center;
  position: relative;
  overflow: auto;
  background-image: url("@/assets/web/planet/bg.png");
  background-size: cover;
  display: grid;
  grid-template-columns: 1fr 1fr;
  //   grid-template-rows: 200px, 200px, 200px, 200px;
  padding-top: 50px;

  .ring {
    background-image: url("@/assets/web/planet/round.png");
    background-size: 100% 100%;
    display: inline-flex;
    padding: 26px;
    position: relative;
    justify-content: center;
    align-items: center;

    div {
      position: absolute;
      display: flex;
      flex-direction: column;
    }
  }
  .round {
    animation: myround 5s infinite linear;
  }

  @keyframes myround {
    0% {
      transform: rotateZ(0deg);
    }
    50% {
      transform: rotateZ(180deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
}
</style>
