<template>
  <div class="context">
    <div class="avatar">
      <n-avatar round :size="60" src="/logo.png" />
      <div>
        <div style="font-size: 1.2em">STC</div>
        <div class="balanceof">{{ balanceOf }}</div>
      </div>
    </div>
    <n-button
      color="#6D4AE0"
      size="large"
      style="width: 100%; margin: 20px 0; height: 50px"
      @click="withdraw"
      :disabled="!Number(balanceOf)"
    >
      {{ $t("mine.withdraw") }}
    </n-button>

    <div class="detail">
      <div class="inline">
        <div class="red">
          <img src="@/assets/img/wallet-out.png" alt="" width="20" />
          <span>{{ $t("mine.out") }}</span>
        </div>
        <div class="blue">
          <img src="@/assets/img/wallet-in.png" alt="" width="20" />
          <span>{{ $t("mine.Income") }}</span>
        </div>
      </div>

      <!-- 星际战队& 收益明细 -->
      <div class="black row">
        <div class="list" v-for="(item, index) in list" :key="index">
          <div class="icon">
            <img src="@/assets/img/wallet-out.png" alt="" />
            <div style="text-align: left">
              <div>{{ item.name }}</div>
              <div style="color: #aaaaaa">{{ item.time }}</div>
            </div>
          </div>
          <div class="comment">
            {{ item.num }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onActivated, onMounted, onUnmounted } from "vue";
import { useFetch } from "@/utils/request.js";
import { useMessage } from "naive-ui";
import { useI18n } from "vue-i18n";

const balanceOf = ref("0.000");
const message = useMessage();
const { t } = useI18n();
// 收支详情
const list = ref([
  { type: 0, time: "2023.06.04 14:50", name: "参与竞猜", num: "-100.0000STC" },
  { type: 0, time: "2023.06.04 14:50", name: "参与竞猜", num: "-100.0000STC" },
  { type: 0, time: "2023.06.04 14:50", name: "参与竞猜", num: "-100.0000STC" },
]);
let debounce = "";
const init = () => {
  useFetch("/user/reward").then(({ data }) => {
    balanceOf.value = Number(data.total_reward).toFixed(4);
  });
};
// 提现
const withdraw = () => {
  useFetch("/withdraw/apply").then(() => {
    message.success(t("mine.withdrawSuccess"));
    init;
  });
};
onMounted(() => {
  init();
  debounce = setInterval(init, 3000);
});
onUnmounted(() => {
  clearInterval(debounce);
});
</script>
<style lang="less" scoped>
.context {
  background: #fff;
  height: 100%;
  padding: 20px;
  text-align: center;
  color: #000;

  .avatar {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    & > div {
      margin-top: 10px;
    }
    .balanceof {
      font-size: 1.5em;
      font-weight: 600;
    }
  }
  .detail {
    margin-top: 30px;

    .inline {
      display: flex;
      align-items: center;
    }
    .red {
      color: #dc3846;
      display: flex;
      align-items: center;
      line-height: 20px;
      font-size: 16px;
      span {
        margin-left: 5px;
        margin-top: 4px;
      }
    }
    .blue {
      margin-left: 20px;
      color: #7285f6;
      display: flex;
      align-items: center;
      line-height: 20px;
      font-size: 16px;
      span {
        margin-left: 5px;
        margin-top: 4px;
      }
    }

    .black {
      color: #000;
      padding: 6px 10px;
      border-radius: 10px;
      margin-bottom: 15px;
      .list {
        display: flex;
        justify-content: space-between;
        margin: 20px 0;
        width: 100%;
      }

      .icon {
        display: flex;
        align-items: center;

        img {
          width: 23px;
          height: 23px;
          margin-right: 20px;
        }
      }
    }
    .row {
      .comment {
        font-size: 1.1em;
        margin-top: 10px;
        font-weight: 700;
      }
    }
  }
}
</style>
