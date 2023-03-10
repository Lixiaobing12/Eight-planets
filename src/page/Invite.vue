<template>
  <div class="context">
    <div style="max-width:400px;margin:20px auto;padding:20px">
      <div class="title">
        <img src="@/assets/web/home-transparent-lobo.png" alt="" />
        <img src="@/assets/web/invite-r.png" alt="" class="img2" />
      </div>
      <div class="bg1">
        <div style="margin-bottom: 30px">
          <div style="display: flex">
            <span>{{ $t("home.inviteLink") }}：</span>
            <span style="flex: 1; background: #9ba2a9">{{ inviteUrl }}</span>
          </div>
          <div class="but">
            <n-button color="#59c2cb" style="padding: 7px 30px; height: auto">{{
              $t("home.Bind")
            }}</n-button>
          </div>
        </div>

        <div style="margin-bottom: 30px">
          <div style="display: flex">
            <span>{{ $t("home.MyLink") }}：</span>
            <span style="flex: 1; background: #9ba2a9">{{ inviteUrl }}</span>
          </div>
          <div class="but">
            <n-button color="#59c2cb" style="padding: 7px 30px; height: auto">{{
              $t("home.copy")
            }}</n-button>
          </div>
        </div>
      </div>
      <div class="bg2">
        <div>
          <n-grid x-gap="12" :cols="2">
            <n-gi>
              <div>{{ $t("home.invitees") }}</div>
              <div
                style="
                  color: #00c5cd;
                  font-size: 2em;
                  font-style: italic;
                  font-weight: 700;
                "
              >
                0
              </div>
            </n-gi>
            <n-gi>
              <div>{{ $t("home.Reward") }}</div>
              <div
                style="
                  color: #00c5cd;
                  font-size: 2em;
                  font-style: italic;
                  font-weight: 700;
                "
              >
                0
                <span
                  style="
                    color: #00c5cd;
                    font-size: 12px;
                    font-style: italic;
                    font-weight: 700;
                  "
                  >SNAIL</span
                >
              </div>
            </n-gi>
          </n-grid>
          <div style="margin: 20px 0">
            <n-button color="#59c2cb" style="padding: 7px 30px; height: auto">{{
              $t("home.withward")
            }}</n-button>
          </div>
        </div>
      </div>
    </div>
    <Nfooter />
  </div>
</template>
<script setup>
import Nfooter from "@/layout/footer.vue";
const inviteUrl = ref("");
</script>
<style lang="less" scoped>
.context {
  min-height: 100%;
  text-align: center;
  position: relative;
  background-image: url("@/assets/res/NFTBJ.png");
  background-size: cover;
  padding-top: 80px;

  .title {
    display: flex;
    margin: 20px auto;
    justify-content: center;
    align-items: center;

    .img2 {
      width: 180px;
      margin-left: 20px;
    }
  }

  .bg1 {
    background-image: url("@/assets/web/invite-bg1.png");
    background-size: 100% 100%;
    padding: 40px 40px 20px;
    text-align: left;
    font-size: 0.9em;
  }

  .but {
    display: flex;
    justify-content: flex-end;
    margin: 10px 0 30px;
  }

  .bg2 {
    margin-top: 30px;
    background-image: url("@/assets/web/invite-bg2.png");
    background-size: 100% 100%;
    padding: 40px 40px 20px;
    font-size: 0.9em;
  }
}
@media screen and (max-width:400px) {
  .context{
    padding-top: 30px;
  }
}
</style>
