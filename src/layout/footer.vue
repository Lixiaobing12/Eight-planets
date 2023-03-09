<template>
  <div style="background: #000; padding: 50px 10px">
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
                src="@/assets/web/telegram.png"
                alt=""
                width="35"
              /> </n-grid-item
            ><n-grid-item>
              <img
                src="@/assets/web/twitter.png"
                alt=""
                width="35"
              /> </n-grid-item
            ><n-grid-item>
              <img src="@/assets/web/discord.png" alt="" width="35" />
            </n-grid-item>
          </n-grid>
        </n-space>
      </n-grid-item>
    </n-grid>
  </div>
</template>
<script setup></script>
<style lang="less" scoped></style>
