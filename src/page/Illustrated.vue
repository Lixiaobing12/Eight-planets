<template>
  <div>
    <img src="@/assets/web/ill-bg.png" alt="" style="width: 100%" />

    <div class="cover">
      <div class="font">{{ $t("home.NFT_Snail") }}</div>
      <p>
        {{ $t("home.snail_tip1") }}
      </p>
    </div>

    <div style="margin: 20px 0; font-size: 0.9em; text-align: center">
      <div style="position: relative; margin: 20px 0">
        <img src="@/assets/web/snail1.png" alt="" style="width: 90%" />
        <span
          style="
            position: absolute;
            left: 34px;
            font-size: 1.2em;
            font-weight: 700;
          "
          :style="{ bottom: locale === 'en' ? '55px' : '35px' }"
          >{{ $t("home.Little_Snail") }}</span
        >
        <div>【{{ $t("home.Snail_tip2") }}】</div>
      </div>
      <div style="position: relative; margin: 20px 0">
        <img src="@/assets/web/snail2.png" alt="" style="width: 90%" />
        <span
          style="
            position: absolute;
            left: 34px;
            font-weight: 700;
          "
          :style="{ bottom: locale === 'en' ? '35px' : '35px','font-size':locale === 'en'?'1.1em':'1.2em'}"
          >{{ $t("home.Disabled_Snail") }}
        </span>
        <div>【{{ $t("home.Snail_tip3") }}】</div>
      </div>
      <div style="position: relative; margin: 20px 0">
        <img src="@/assets/web/snail3.png" alt="" style="width: 90%" />
        <span
          style="
            position: absolute;
            left: 34px;
            font-size: 1.2em;
            font-weight: 700;
          "
          :style="{ bottom: locale === 'en' ? '55px' : '35px' }"
          >{{ $t("home.Big_Snail") }}
        </span>
        <div>【{{ $t("home.Snail_tip4") }}】</div>
      </div>
      <div style="position: relative; margin: 20px 0">
        <img src="@/assets/web/snail4.png" alt="" style="width: 90%" />
        <span
          style="
            position: absolute;
            left: 34px;
            font-size: 1.2em;
            font-weight: 700;
          "
          :style="{ bottom: locale === 'en' ? '55px' : '57px','font-size':locale === 'en'?'1em':'1.2em'}"
          >{{ $t("home.Exploding_Snails") }}
        </span>
        <div>【{{ $t("home.Snail_tip5") }}】</div>
      </div>

      <div style="position: relative; margin: 20px 0">
        <img src="@/assets/web/snail5.png" alt="" style="width: 90%" />
        <span
          style="
            position: absolute;
            left: 34px;
            font-size: 1.2em;
            font-weight: 700;
          "
          :style="{ bottom: locale === 'en' ? '55px' : '35px' }"
          >{{ $t("home.Speed_snail") }}
        </span>
        <div>【{{ $t("home.Snail_tip6") }}】</div>
      </div>
      <div style="position: relative; margin: 20px 0">
        <img src="@/assets/web/snail6.png" alt="" style="width: 90%" />
        <span
          style="
            position: absolute;
            left: 34px;
            font-size: 1.2em;
            font-weight: 700;
          "
          :style="{ bottom: locale === 'en' ? '58px' : '57px','font-size':locale === 'en'?'1em':'1.2em'}"
          >{{ $t("home.Celestial_snail") }}
        </span>
        <div>【{{ $t("home.Snail_tip7") }}】</div>
      </div>

      <div style="position: relative; margin: 20px 0">
        <img src="@/assets/web/snail7.png" alt="" style="width: 90%" />
        <span
          style="
            position: absolute;
            left: 34px;
            font-size: 1.2em;
            font-weight: 700;
          "
          :style="{ bottom: locale === 'en' ? '30px' : '35px','font-size':locale === 'en'?'1em':'1.2em'}"
          v-html="$t('home.Mutant_snail')"
          >
        </span>
        <div>【{{ $t("home.Snail_tip8") }}】</div>
      </div>

      <div style="position: relative; margin: 20px 0">
        <img src="@/assets/web/snail8.png" alt="" style="width: 90%" />
        <span
          style="
            position: absolute;
            left: 34px;
            font-size: 1.2em;
            font-weight: 700;
          "
          :style="{ bottom: locale === 'en' ? '58px' : '35px','font-size':locale === 'en'?'1em':'1.2em'}"
          >{{ $t("home.Almighty_Snail") }}
        </span>
        <div>【{{ $t("home.Snail_tip9") }}】</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
</script>
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
