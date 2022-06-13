<template>
  <div class="wdt">
    <div class="edition qinHng">
      <div class="wgFus">
        <!-- 头像 -->
        <div class="hpxWdy">
          <img src="/img/HeadPortrait.df95e9fa.png" alt="" class="adFgh">
        </div>
        <!-- 用户信息 -->
        <div class="nmDcv">
          <!-- 用户名 -->
          <div class="swMtr">
            <div class="bhvFbn">
              <span> 用户名 </span>
              <img src="https://img-static.mihoyo.com/level/level3.png" alt="">
            </div>
            <div  class="nmKlo">
              <div class="nmDfg">
                <button class="sddFht">编辑</button>
              </div>
            </div>
          </div>
          <!-- 通行证 -->
          <div class="ainDr">
            <span>通行证ID:264041617</span>
          </div>
          <!-- 留言板 -->
          <div class="lyAdd">
            <span>
              <i class="el-icon-s-order"></i>
            </span>
            <p>我要摆烂！</p>
          </div>
          <!-- 粉丝，关注，点赞 -->
          <div class="wyDai">
            <div class="inyDla">
              <a href=""> 0</a>
              <div>粉丝</div>
            </div>
            <div class="inyDla">
              <a href=""> 0</a>
              <div>关注焦点</div>
            </div>
            <div class="inyDla">
              <a href=""> 0</a>
              <div>获赞</div>
            </div>
          </div>
        </div>
      </div>
      <div class="lftZp ggd">
        <div class="ntmJq">
          <div class="grZx">个人中心</div>
          <ul>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div class="rktYp ggd"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'personal'
}
</script>

<style  scoped>
.ntmJq>ul{
  padding: 0 30px 10px;
}
.grZx{
  margin-left: 30px;
}
.ntmJq{
  width: 100%;
    line-height: 50px;
    border-bottom: 1px solid #ebebeb;
    font-size: 16px;
}
.rktYp{
  width: 700px;
  float: right;
}
.ggd{
  background-color: #fff;
    border-radius: 4px;
}
.lftZp{
  width: 280px;
  float: left;
}
.qinHng{
  overflow: hidden;
}
.inyDla>a{
  color: #333;
    font-size: 20px;
}
.inyDla>div{
  margin-left: 10px;
  font-size: 14px;
    color: #ccc;
}
.inyDla{
  display: flex;
  align-items: center;
  padding-right: 40px;
}
.wyDai{
  display: flex;
    padding-top: 19px;
    align-items: center;
    align-self: center;
    flex-shrink: 0;
    margin-top: 20px;
    border-top: 1px solid #f0f0f0;
}
.el-icon-s-order{
  color: rgb(235, 143, 143);
}
.lyAdd>span{
  font-size: 14px;
    margin-right: 8px;
}
.lyAdd{
  display: flex;
    margin-top: 12px;
    color: #999;
    line-height: 18px;
}
.ainDr>span{
  font-size: 12px;
    color: #ccc;
}

.ainDr{
  display: flex;
  align-items: center;
}
.sddFht{
  background-color: #fff;
    color: #00b2ff;
    border: 1px solid #00c3ff;
    border-radius: 4px;
    transition-duration: .2s;
    transition-property: border-color,color;
    width: 100%;
    height: 100%;
}
.nmDfg{
  width: 86px;
    height: 34px;
    line-height: 34px;
    display: inline-block;
    cursor: pointer;
    flex-shrink: 0;
}
.nmKlo{
  display: flex;
}
.bhvFbn>img{
    margin-left: 10px;
    height: 16px;
    flex-shrink: 0;
}
.bhvFbn>span{
  font-size: 16px;
    line-height: 21px;
    font-weight: 600;
}
.bhvFbn{
  display: flex;
  align-items: center;
}
.swMtr{
  display: flex;
  justify-content: space-between;
}
.nmDcv{
  flex-grow: 1;
}
.adFgh{
  width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid #ebebeb;
    vertical-align: top;
}
.hpxWdy{
  width: 120px;
    height: 120px;
    display: inline-block;
    position: relative;
    margin-right: 24px;
    flex-shrink: 0;
}
.wgFus{
  padding: 20px 50px 24px;
  display: flex;
  margin-bottom: 20px;
  background-color: #fff;
    border-radius: 4px;
}
.wdt{
  margin-top: -30px;
  margin-bottom: 63px;
}
</style>
