<template>
  <div class="header">
    <div class="header__inner">
      <!-- 左边LOGO -->
      <div class="header__logo__container">
        <!-- logo -->
        <div class="header__logo">
          <img src="@/image/logo.png" alt="">
        </div>
        <div class="header__title">
          <span>米游社 · 原神</span>
          <i class=""></i>
        </div>
      </div>
      <!-- 导航栏 -->
      <div class="header__navwrap">
        <div class="header__navbar">
          <a href="#" class="header__navitem header__navitemactive">首页</a>
          <a href="#" class="header__navitem">酒馆</a>
          <a href="#" class="header__navitem">攻略</a>
          <a href="#" class="header__navitem">官方</a>
          <a href="#" class="header__navitem">同人图</a>
          <a href="#" class="header__navitem">cos</a>
          <a href="#" class="header__navitem">硬核</a>
        </div>
      </div>
      <!-- 右边搜索框 -->
      <div class="header__right">
        <form class="header__search">
          <input type="text">
          <i>搜索</i>
        </form>
        <div class="header__avatarcontainer">
          <div class="header__avatarwrp">
            <a href="#" class="header__avatar">
              <img src="@/image/HeadPortrait.png" alt="">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style lang="scss" scoped>
.header{
    background-color: #1f2233;
    color: #fff;
    width: 100%;
    top: 0;
    position: fixed;
    z-index: 999;
    height: 62px;
  }
  .header .header__inner{
    line-height: 62px;
    width: 1200px;
    margin: 0 auto;
    position: relative;
    height: 100%;
  }
  .header__inner .header__logo__container{
    position: relative;
    display: inline-block;
    height: 100%;
  }
  .header__logo__container .header__logo{
    height: 62px;
    display: inline-block;
    cursor: pointer;
    vertical-align: top;
  }
  .header__logo__container img{
    width: 146px;
    vertical-align: middle;
  }
  .header__logo__container .header__title{
    display: inline-block;
    margin-left: 2px;
    position: relative;
    font-size: 14px;
    vertical-align: top;
    font-weight: 600;
    min-width: 180px;
  }
  .header__inner .header__navwrap{
    display: inline-block;
    height: 62px;
    vertical-align: top;
  }
  .header__navwrap .header__navbar{
    line-height: 20px;
  }
  .header__navbar .header__navitem{
    display: inline-block;
    // padding: 21px 0;
    width: 68px;
    line-height: 62px;
    height: 62px;
    text-align: center;
    vertical-align: top;
    color: #fff;
    cursor: pointer;
    position: relative;
    font-size: 14px;
    text-decoration: none;
  }
  .header__navitem:hover {
    background-color: rgba(255,255,255,.18);
  }
  // 点击样式
  .header__navitemactive {
    font-weight: bold;
    font-size: 16px;
    background-color: rgba(255,255,255,.18);
}

// 右边搜索样式
.header__inner .header__right{
  display: flex;
  float: right;
  font-size: 14px;
  height: 62px;
  line-height: 62px;
}
.header__right .header__search{
    font-size: 14px;
    height: 30px;
    margin-top: 16px;
    line-height: 30px;
    background-color: rgba(255,255,255,.22);
    padding: 0 35px 0 15px;
    border-radius: 15px;
    position: relative;
    margin-right: 15px;
}
.header__search input{
    color: #fff;
    width: 50px;
    height: 30px;
    border: none;
    outline: none;
    background-color: transparent;
}
.header__search i{
    position: absolute;
    right: 12px;
    top: 0;
    cursor: pointer;
}

// 头像
.header__right .header__avatarwrp{
  padding: 13px 20px;
  display: block;
}
.header__avatarwrp .header__avatar{
    height: 36px;
    width: 36px;
    padding: 2px;
    background-color: #fff;
    border-radius: 100%;
    display: block;
    position: relative;
}
.header__avatar img{
  width: 100%;
  height: 100%;
  vertical-align: top;
    border-radius: 100%;
}
</style>
