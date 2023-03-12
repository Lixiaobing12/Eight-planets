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
  nextTick,
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
    const router = useRouter();
    const path = computed(() => route.path);
    const { t, locale } = useI18n();

    onBeforeMount(() => {
      console.log(route);
      const ref = route.query.ref;
      if (ref) {
        nextTick(() => {
           router.push({ path: "/Ido", query: { ref } });
        });
      }
    });
    return {
      path,
    };
  },
});
</script>

<style lang="less">
body {
  .h5-view {
    display: none;
  }
  .pc-view {
    display: block;
  }

  @media screen and (max-width: 400px) {
    .h5-view {
      display: block;
    }
    .pc-view {
      display: none !important;
    }
  }
  color: #fff;
  * {
    box-sizing: border-box;
  }
  box-sizing: border-box;

  .n-message-container.n-message-container--bottom {
    bottom: 250px;

    .n-message {
      background-image: linear-gradient(90deg, #330d69, #30c9cd);
      color: #fff;
      border-radius: 20px;
    }
  }
}
</style>
