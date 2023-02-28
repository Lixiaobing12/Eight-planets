<template>
  <div class="context">
    <div>
      <div class="black row">
        <div class="list" @click="change('zh')">
          <div class="icon">
            <img src="@/assets/img/lang-ch.png" alt="" />
            <div>中文</div>
          </div>
          <div class="comment">
            <img
              src="@/assets/img/lang-check.png"
              alt=""
              width="20"
              v-show="locale === 'zh'"
            />
          </div>
        </div>
      </div>

      <div class="black row">
        <div class="list" @click="change('en')">
          <div class="icon">
            <img src="@/assets/img/lang-en.png" alt="" />
            <div>English</div>
          </div>
          <div class="comment">
            <img
              src="@/assets/img/lang-check.png"
              alt=""
              width="20"
              v-show="locale === 'en'"
            />
          </div>
        </div>
      </div>

      <div class="black row">
        <div class="list" @click="change('ko')">
          <div class="icon">
            <img src="@/assets/img/lang-ko.png" alt="" />
            <div>한글</div>
          </div>
          <div class="comment">
            <img
              src="@/assets/img/lang-check.png"
              alt=""
              width="20"
              v-show="locale === 'ko'"
            />
          </div>
        </div>
      </div>

      <div class="black row">
        <div class="list" @click="change('jap')">
          <div class="icon">
            <img src="@/assets/img/lang-jap.png" alt="" />
            <div>日本語</div>
          </div>
          <div class="comment">
            <img
              src="@/assets/img/lang-check.png"
              alt=""
              width="20"
              v-show="locale === 'jap'"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
import i18n from '@/utils/i18n/setUpI18n.js';

const store = useStore();
const { t, locale } = useI18n();
const lang = locale.value;
const change = (lang) => {
  locale.value = lang;
  i18n.global.locale.value = lang;
  localStorage.setItem("lang",lang);
};
</script>
<style lang="less" scoped>
.context {
  background: #160a3e;
  height: 100%;
  padding: 20px;
  text-align: center;
  overflow: auto;
  .black {
    background: rgba(37, 40, 84, 0.6);
    color: #fff;
    padding: 10px 20px;
    border-radius: 10px;
    margin-bottom: 15px;

    .list {
      display: flex;
      justify-content: space-between;
      margin: 10px 0;
      width: 100%;
      align-items: center;
    }

    .icon {
      display: flex;
      align-items: center;

      img {
        width: 35px;
        height: 25px;
        margin-right: 20px;
      }
    }
  }
  .row {
    .comment {
      font-size: 0.9em;
      margin-top: 10px;
      position: absolute;
      right: 40px;
    }
  }
}
</style>
