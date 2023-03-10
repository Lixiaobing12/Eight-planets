<template>
  <div style="display: flex; flex-direction: column; height: 100%">
    <div class="context">
      <div>
        <Illustrated />
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
.context {
  text-align: center;
  position: relative;
  background-image: url("@/assets/res/NFTBJ.png");
  background-size: cover;
  padding-top: 100px;

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
</style>
