<template>
  <div>
    <n-grid cols="1 m:4 " responsive="screen">
      <n-grid-item span="0 m:1"> </n-grid-item>
      <n-grid-item>
        <img
          src="@/assets/web/ill-bg.png"
          alt=""
          style="width: 100%; max-width: 300px"
        />
      </n-grid-item>
      <n-grid-item>
        <n-space align="center" justify="center" style="height: 100%">
          <div class="cover">
            <div class="font">{{ $t("home.NFT_Snail") }}</div>
            <p>
              {{ $t("home.snail_tip1") }}
            </p>
          </div>
        </n-space>
      </n-grid-item>
      <n-grid-item span="0 m:1"> </n-grid-item>
    </n-grid>
    <div
      style="
        margin: 50px 0;
        font-size: 0.9em;
        text-align: center;
        background: rgba(0, 0, 0, 0.4);
      "
    >
      <div class="item-view">
        <n-grid cols="1 m:3" responsive="screen">
          <n-grid-item>
            <div style="position: relative; margin: 20px 0">
              <img :src="getImg('snail1')" alt="" style="width: 90%" />
              <div>【{{ $t("home.Snail_tip2") }}】</div>
            </div>
          </n-grid-item>
          <n-grid-item>
            <div style="position: relative; margin: 20px 0">
              <img :src="getImg('snail2')" alt="" style="width: 90%" />
              <div>【{{ $t("home.Snail_tip3") }}】</div>
            </div>
          </n-grid-item>
          <n-grid-item>
            <div style="position: relative; margin: 20px 0">
              <img :src="getImg('snail3')" alt="" style="width: 90%" />
              <div>【{{ $t("home.Snail_tip4") }}】</div>
            </div>
          </n-grid-item>
          <n-grid-item>
            <div style="position: relative; margin: 20px 0">
              <img :src="getImg('snail4')" alt="" style="width: 90%" />
              <div>【{{ $t("home.Snail_tip5") }}】</div>
            </div>
          </n-grid-item>
          <n-grid-item>
            <div style="position: relative; margin: 20px 0">
              <img :src="getImg('snail5')" alt="" style="width: 90%" />
              <div>【{{ $t("home.Snail_tip6") }}】</div>
            </div>
          </n-grid-item>
          <n-grid-item>
            <div style="position: relative; margin: 20px 0">
              <img :src="getImg('snail6')" alt="" style="width: 90%" />
              <div>【{{ $t("home.Snail_tip7") }}】</div>
            </div>
          </n-grid-item>
          <n-grid-item>
            <div style="position: relative; margin: 20px 0">
              <img :src="getImg('snail7')" alt="" style="width: 90%" />
              <div>【{{ $t("home.Snail_tip8") }}】</div>
            </div>
          </n-grid-item>
          <n-grid-item>
            <div style="position: relative; margin: 20px 0">
              <img :src="getImg('snail8')" alt="" style="width: 90%" />
              <div>【{{ $t("home.Snail_tip9") }}】</div>
            </div>
          </n-grid-item>
        </n-grid>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const getImg = (name) => {
  let lang = locale.value === "en" ? "en" : "zh";
  let path = `/dynamic/${name}-${lang}.png`;

  return path;
};
</script>
<style lang="less" scoped>
.item-view {
  width: 70%;
  text-align: center;
  margin: 0 auto;
}
@media screen and (max-width: 600px) {
  .item-view {
    width: 100%;
  }
}
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
