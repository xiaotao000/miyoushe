<template>
  <div>
    <div class="nmh">
      <div class="nm">我的发帖</div>
    </div>
    <div class="wgFy">
      <img class="npmIng" src="https://bbs.mihoyo.com/_nuxt/img/noData.a3d7135.png" alt="" width="200px">
      <p>暂时没有帖子哟</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wgFy>p{
  margin-top: 20px;
    color: #999;
    white-space: pre-wrap;
    text-align: center;
    line-height: 24px;
}
.npmIng{
  margin-bottom: -5px;
}
.wgFy{
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.nm{
margin-left: 30px;
}
.nmh{
  width: 100%;
    line-height: 50px;
    border-bottom: 1px solid #ebebeb;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
}
</style>
