<template>
  <div class="bg">
    <div class="context">
      <div>
        <BlindBox />
      </div>
    </div>
    <Nfooter />
  </div>
</template>
<script setup>
import BlindBox from "./BlindBox.vue";
import Illustrated from "./Illustrated.vue";
import Nfooter from "@/layout/footer.vue";
</script>

<style lang="less" scoped>
.bg {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background-image: url("@/assets/res/NFTBJ.png");
  background-size: 100% 100%;
  padding-top: 80px;
}
.context {
  text-align: center;
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  .but-group {
    width: 80%;
    height: 50px;
    background: #2f3e6e;
    border-radius: 25px;
    margin: 20px auto;
    display: flex;
    align-items: center;

    div {
      width: 50%;
      height: 100%;
      line-height: 50px;
      transition: width 200ms ease-in-out;
    }

    .isActive {
      border-radius: 25px;
      width: 60%;
      background-image: linear-gradient(90deg, #330d69, #30c9cd);
    }
  }
}

@media screen and (max-width:400px) {
  .bg {
    padding: 50px 0 0;
    background-image: url("@/assets/web/venus-bg.png");
  }
}
</style>
