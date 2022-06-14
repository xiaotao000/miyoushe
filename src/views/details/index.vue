<template>
  <div class="edition sanGn">
    <div class=" admInj">
      <div class="wnStd">
        <!-- 标题 -->
        <div>
          <div class="inj">
            <h1>网页交流平台「豪鼓祭演」限时开启，参与活动可获得游戏内奖励！</h1>
          </div>
          <div class="mhy-article-page-info"></div>
          <div></div>
        </div>
        <!-- 内容 -->
        <div></div>
        <!-- 点赞，收藏 -->
        <div></div>
      </div>
    </div>
    <div class="wsTao"></div>
    <!-- 点赞 -->
    <div class="fuDan">
      <div class="df">
        <div class="anWs">
        <i class="mhy-icon "></i>
        <span>1453</span>
      </div>
      <div class="anWs as">
        <i class="mhy-icon "></i>
        <span>2342</span>
      </div>
      <div class="anWs as">
        <i class="mhy-icon "></i>
        <span>3244</span>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.mhy-article-page-info {
    height: 40px;
    padding: 0 15px;
    background-color: #f7f8fc;
    display: flex;
    align-items: center;
    margin-top: 15px;
}
.inj>h1{
  font-size: 22px;
    line-height: 26px;
    margin: 0;
    word-break: break-word;
    word-wrap: break-word;
}
.inj{
  display: flex;
}
.wnStd{
  padding: 40px 50px;
  background-color: #fff;
  border-radius: 4px;
}
.df{
  padding: 0 10px;
}
.as{
  border-top: 1px solid #f0f0f0;
}
.anWs>span{
  color: #999;
    margin-top: 10px;
    line-height: 1;
    white-space: nowrap;
}
.mhy-icon {
    font-size: 30px;
    color: #b3b3b3;
}
.anWs{
  cursor: pointer;
    padding: 15px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.sanGn{
  overflow: hidden;
}
.fuDan{
  position: fixed;
    top: 123px;
    left: 50%;
    width: 90px;
    background-color: #fff;
    border-radius: 4px;
    margin-left: -596px;
}
.wsTao{
  float: right;
  width: 280px;
}
.admInj{
  float: left;
  width: 700px;
}
</style>
