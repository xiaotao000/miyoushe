<template>
  <div class="">
    <div class="error-page">
      <div class="error-page__container">
        <img src="https://bbs.mihoyo.com/_nuxt/img/404.fd75472.png" alt="" />
        <p>您的页面好像已经偏离了地球...</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '404'
}
</script>

<style lang="scss" scoped>
.layout-view {
  padding-top: 0px;
}
.error-page {
  background-color: #fff;
  margin-bottom: -62px;
  .error-page__container {
    padding: 150px 0;
    img {
      display: block;
      margin: 0 auto;
    }
    p {
      margin-top: 60px;
      text-align: center;
      font-size: 16px;
      color: #999;
    }
  }
}
</style>
