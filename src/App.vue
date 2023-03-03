<template>
  <div>
    <n-message-provider placement="bottom" :duration="1000">
      <common />
    </n-message-provider>
  </div>
</template>
<script>
import {
  computed,
  defineComponent,
  onBeforeMount,
  onMounted,
} from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { ref } from "vue";
import { Web3Provider } from "./utils/web3";
import common from "./layout/common.vue";
import { useI18n } from "vue-i18n";
import i18n from "@/utils/i18n/setUpI18n.js";

export default defineComponent({
  components: {
    common,
  },
  setup() {
    const route = useRoute();
    const path = computed(() => route.path);
    const { t, locale } = useI18n();

    // onBeforeMount(() => {
    //   const lang = localStorage.getItem("lang");
    //   i18n.global.locale.value = lang;
    //   locale.value = lang;
    // });
    return {
      path,
    };
  },
});
</script>

<style lang="less">
body {
  color: #fff;
  * {
    box-sizing: border-box;
  }
  box-sizing: border-box;

  .n-message-container.n-message-container--bottom {
    bottom: 250px;

    .n-message {
      background-image: linear-gradient(90deg, #b235da 50%, #5621ff);
      color: #00f1ff;
      border-radius: 20px;
    }
  }
}
</style>
