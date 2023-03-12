<template>
  <div style="background: rgba(0, 0, 0, 0.6); padding: 50px 10px">
    <n-grid cols="1 m:4" responsive="screen" item-responsive>
      <n-grid-item span="0 :m 1"> </n-grid-item>
      <n-grid-item>
        <img src="@/assets/web/home-footer.png" alt="" style="width: 100%" />
      </n-grid-item>
      <n-grid-item>
        <n-space justify="center" align="center" style="margin-top: 20px">
          <n-grid cols="3" :x-gap="36">
            <n-grid-item>
              <img
                style="cursor: pointer;pointer-events: all;"
                @click="toURL('https://t.me/Snail_SuperFarm')"
                src="@/assets/web/telegram.png"
                alt=""
                width="35"
              /> </n-grid-item
            ><n-grid-item>
              <img
                style="cursor: pointer;pointer-events: all;"
                @click="toURL('https://twitter.com/Snail_SuperFarm')"
                src="@/assets/web/twitter.png"
                alt=""
                width="35"
              /> </n-grid-item
            ><n-grid-item>
              <img
                style="cursor: pointer;pointer-events: all;"
                src="@/assets/web/discord.png"
                alt=""
                width="35"
                @click="toURL('https://discord.gg/zfNTE5mBYw')"
              />
            </n-grid-item>
          </n-grid>
        </n-space>
      </n-grid-item>
    </n-grid>
  </div>
</template>
<script setup>
const toURL = (url) => {
  window.open(url);
};
</script>
<style lang="less" scoped></style>
