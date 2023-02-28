<template>
  <div class="context">
    <div class="tag">{{ $t("home.computingPower") }}： {{ myPower }} P</div>
    <div class="card">
      <img src="@/assets/img/mypower1.png" alt="" style="width: 100%" />
      <p style="padding:20px">
        {{$t('home.tips')}}
      </p>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";

const store = useStore();
const myPower = computed(() => {
  let num = Number(store.state.res.userGet.self_hash).toFixed(1);
  return isNaN(num) ? "0.0" : num;
});
</script>
<style lang="less" scoped>
.context {
  background: #24193d;
  height: 100%;
  padding: 30px 20px;
  text-align: center;
  overflow: auto;

  .tag {
    width: 100%;
    height: 60px;
    background-image: linear-gradient(90deg, #b436d9, #5521ff);
    border-radius: 10px;
    margin-top: 20px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2em;
  }
  .card {
    margin-top: 40px;
    width: 100%;
    min-height: 500px;
    border-top: 15px solid #5821ff;
    border-left: 15px solid #5821ff;
    background: #190c3b;
  }
}
</style>
