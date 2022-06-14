<template>
  <div>
    <div class="nmh">
      <div class="nm">
        <ul>
          <li class="zxc">
            <span>用户</span>
          </li>
          <li class="yhn">
            <span>话题</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="wgFy">
      <img class="npmIng" src="https://bbs.mihoyo.com/_nuxt/img/noData.a3d7135.png" alt="" width="200px">
      <p>你还没有关注别人哟~</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.yhn>span{
  color: #333;
}
.zxc>span{
  color: #00c3ff;
}
.yhn{
  margin-left: 40px;
  vertical-align: top;
    text-align: center;
    cursor: pointer;
    font-size: 16px;
    height: 50px;
    line-height: 50px;
    position: relative;
}
.zxc{
  border-bottom: 3px solid #00c3ff;
  font-weight: 600;
  vertical-align: top;
    text-align: center;
    cursor: pointer;
    font-size: 16px;
    height: 50px;
    line-height: 50px;
    position: relative;
}
.nm>ul{
  display: flex;
}
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
