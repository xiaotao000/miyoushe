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
          <router-link href="#" class="header__navitem header__navitemactive" to="/home">首页</router-link>
          <router-link class="header__navitem" to="/pub">酒馆</router-link>
          <router-link href="#" class="header__navitem" to="/method">攻略</router-link>
          <router-link class="header__navitem" to="/official">官方</router-link>
          <router-link to="/peermap" class="header__navitem">同人图</router-link>
          <router-link to="/cos" class="header__navitem">cos</router-link>
          <router-link to="/hardcore" class="header__navitem">硬核</router-link>
        </div>
      </div>
      <!-- 右边搜索框 -->
      <div class="header__right">
        <form class="header__search">
          <input type="text">
          <i>搜索</i>
        </form>
        <template v-if="userInfo.nickname">
          <div class="header__notifycontainer">
            <a>关注</a>
          </div>
          <div class="header__notifycontainer">
            <a>消息</a>
          </div>
        </template>
        <div class="header__avatarcontainer">
          <div class="header__avatarwrp" @mouseenter="IsAuser">
            <router-link href="#" class="header__avatar" :to="userInfo.nickname ? '/personal' : '/logon'">
              <img :src="imgUrl" alt="">
            </router-link>
          </div>
          <!-- 隐藏的个人展示 -->
          <ul class="header__navitem" v-if="Auser" @mouseleave="Auser = false">
            <li class="header__userInfo">
              <div class="user-image">
                <img :src="imgUrl" alt="">
              </div>
              <div class="header__userInfo--name">{{userInfo.nickname}}</div>
              <div class="header__userInfo--wrap">
                <div class="header__userInfo--detail">
                  <a href="#" class="mhy-router-link">
                    <div class="header__userInfo--num">0</div>
                    <div class="header__userInfo--text">粉丝</div>
                  </a>
                </div>
                <div class="header__userInfo--detail">
                  <a href="#" class="mhy-router-link">
                    <div class="header__userInfo--num">0</div>
                    <div class="header__userInfo--text">关注</div>
                  </a>
                </div>
              </div>
            </li>
            <li class="header__nav">
              <router-link to="/personal">
                <span>个人中心</span>
              </router-link>
            </li>
            <li class="header__nav">
              <router-link to="/personal">
                <span>个人中心</span>
              </router-link>
            </li>
            <li class="header__nav">
              <router-link to="">
                <span class="header__navmore" @click="logout">退出登录</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { component } from 'vue/types/umd'
import { mapState } from 'vuex'
export default {
  name: 'AppHeader',
  data () {
    return {
      imgSrc: 'https://img-static.mihoyo.com/communityweb/upload/c9d11674eac7631d2210a1ba20799958.png',
      Auser: false
    }
  },
  computed: {
    ...mapState('user', ['userInfo']),
    imgUrl () {
      return this.userInfo.avatar ? 'http://172.17.24.16:3000' + this.userInfo.avatar : this.imgSrc
    }
  },
  methods: {
    // 退出登录
    logout () {
      this.$store.dispatch('user/logout')
      this.$router.push('/home')
    },
    IsAuser () {
      if (this.userInfo.nickname) {
        this.Auser = true
      }
    }
  },
  mounted () {
    console.log(this.$store.state.userInfo)
  }
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

.header__right .header__notifycontainer{
  position: relative;
}
.header__notifycontainer a{
  padding: 0 20px;
  cursor: pointer;
  display: inline-block;
  vertical-align: top;
  font-size: 14px;
  color: #fff;
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

// 隐藏的个人
.header__avatarcontainer .header__navitem{
  z-index: 999;
  display: block;
  width: 260px;
  padding-bottom: 0;
  position: absolute;
  top: 62px;
  right: 0;
  background-color: #fff;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  overflow: hidden;
  padding: 20px 0 6px;
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 15%);
  text-align: left;
  list-style-type:none
}
.header__userInfo{
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 20px;
  list-style-type:none
}
.user-image{
  border-radius: 50%;
  display: block;
  margin: 0 auto;
  width: 74px;
  height: 74px;
  position: relative;
}
.user-image img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid #ebebeb;
  vertical-align: top;
}

.header__userInfo--name{
  margin-top: 8px;
    font-size: 16px;
    color: #333;
    font-weight: 400;
    text-align: center;
    line-height: 17px;
}
.header__userInfo--wrap{
  margin-top: 19px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0 50px;
}
.header__userInfo--detail{
  display: flex;
  line-height: 20px;
  text-align: center;
}
.header__userInfo--num{
  font-size: 20px;
  font-weight: 400;
  color: #666;
}
.header__userInfo--text{
  font-weight: 400;
  font-size: 14px;
  color: #ccc;
  text-align: center;
}
.header__nav{
  padding-top: 10px;
}
.header__nav span{
  display: block;
  line-height: 44px;
  padding: 0 20px;
  color: #333;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
}

a {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
</style>
