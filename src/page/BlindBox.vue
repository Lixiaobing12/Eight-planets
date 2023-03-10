<template>
  <n-space justify="center" align="center" style="height:100%;">
    <n-grid cols="1 m:3" responsive="screen">
      <n-grid-item>
        <img
          src="@/assets/web/blind.png"
          alt=""
          style="width: 100%; max-width: 400px;margin-top:-50px;"
        />
      </n-grid-item>
      <n-grid-item span="0 m:1"></n-grid-item>
      <n-grid-item>
        <div class="nft-card">
          <div>
            <div style="margin: 15px 0 20px; font-size: 1.2em">
              {{ $t("home.price") }}: ??? /ETH
            </div>
            <div
              style="
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              "
            >
              <n-input
                v-model:value="inputAmount"
                type="text"
                style="width: 60%"
                placeholder=""
              >
                <template #suffix>
                  <span>MAX</span>
                </template>
              </n-input>

              <n-button
                size="large"
                style="
                  width: 60%;
                  margin: 20px 0;
                  border-radius: 15px;
                  background: #59c2cb;
                  color: #fff;
                "
                >{{ $t("buyMachine.buy") }}</n-button
              >
            </div>
            <p>
              <img src="@/assets/web/color1.png" alt="" />
              {{ $t("home.Ncard") }}
            </p>
            <p>
              <img src="@/assets/web/color2.png" alt="" />
              {{ $t("home.Rcard") }}
            </p>
            <p>
              <img src="@/assets/web/color3.png" alt="" />
              {{ $t("home.SRcard") }}
            </p>
            <p>
              <img src="@/assets/web/color4.png" alt="" />
              {{ $t("home.SSRcard") }}
            </p>
          </div>
        </div>
      </n-grid-item>
    </n-grid>
  </n-space>
</template>
<script setup></script>
<style lang="less" scoped>
.n-input {
  background: transparent;

  ::v-deep(.n-input__border) {
    border: 2px solid #fff !important;
    border-radius: 15px;
  }

  ::v-deep(.n-input__suffix) {
    color: #fff;
    font-weight: 700;
    // background: #59c2cb;
    border-radius: 10px;
  }
}
.nft-card {
  background-image: url("@/assets/res/nftsmallbj.png");
  background-size: 100% 100%;
  width: 100%;
  text-align: center;
  padding: 16px;
  max-width: 370px;
  p {
    text-align: left;
    font-size: 0.9em;
  }
}
</style>
