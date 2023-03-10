<template>
  <div style="display: flex; flex-direction: column; height: 100%">
    <div class="context">
      <n-space justify="center" align="center">
        <n-grid cols="2 m:4 " responsive="screen" :x-gap="48" :y-gap="48">
          <n-grid-item>
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
          </n-grid-item>
          <n-grid-item>
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
          </n-grid-item>
          <n-grid-item>
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
          </n-grid-item>
          <n-grid-item>
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
          </n-grid-item>
          <n-grid-item>
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
          </n-grid-item>
          <n-grid-item>
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
          </n-grid-item>
          <n-grid-item>
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
          </n-grid-item>
          <n-grid-item>
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
          </n-grid-item>
        </n-grid>
      </n-space>
    </div>
    <Nfooter />
  </div>
</template>
<script setup>
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import Nfooter from "@/layout/footer.vue";

const router = useRouter();
const { locale } = useI18n();
const toLink = (path) => {
  router.push({ path });
};
</script>
<style lang="less" scoped>
.context {
  padding: 80px 0;
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-image: url("@/assets/res/home-bg3.png");
  background-size: cover;

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
