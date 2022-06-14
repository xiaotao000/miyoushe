<template>
  <div>
    <div class="nmh">
      <div class="nm">隐私设置</div>
    </div>
    <div class="hkAdd">
      <div>
        <span>在个人中心展示我发布的帖子</span>
        <div class="bhGns">
          <div>
            <i class="mhy-radio__icon mhy-radio--active"></i>是
          </div>
          <div>
            <i class="mhy-radio__icon"></i>否
          </div>
        </div>
      </div>
      <div>
        <span>在个人中心展示我的评论</span>
        <div class="bhGns">
          <div>
            <i class="mhy-radio__icon mhy-radio--active"></i>是
          </div>
          <div>
            <i class="mhy-radio__icon"></i>否
          </div>
        </div>
      </div>
      <div>
        <span>在个人中心展示我的收藏</span>
        <div class="bhGns">
          <div>
            <i class="mhy-radio__icon mhy-radio--active"></i>是
          </div>
          <div>
            <i class="mhy-radio__icon"></i>否
          </div>
        </div>
      </div>
      <div>
        <span>上传图片时添加水印</span>
        <div class="bhGns">
          <div>
            <i class="mhy-radio__icon mhy-radio--active"></i>是
          </div>
          <div>
            <i class="mhy-radio__icon"></i>否
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style  scoped>
.mhy-radio__icon {
    display: inline-block;
    height: 14px;
    width: 14px;
    border: 1px solid #b2b2b2;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 100%;
    margin-right: 8px;
    vertical-align: -0.15em;
}
.mhy-radio--active {
    border: 4px solid #00c3ff;
}
.bhGns>div{
  margin-right: 30px;
  display: inline-block;
  cursor: pointer;
}
.bhGns{
  float: right;
  color: #999;
}
.hkAdd>div{
  line-height: 14px;
  margin-bottom: 40px;
}
.hkAdd{
  padding: 40px 40px 40px 30px;
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
