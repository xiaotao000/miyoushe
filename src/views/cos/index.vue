<template>
  <div class="edition a1">
    <!-- 导航栏 -->
    <div class="forum">
      <div class="layout">
        <div class="forum-heard">
          <div class="artice">
            <div class="type-st">
              <ul>
                <li class="active">最新发帖</li>
                <li class="type-tab">
                  <span>最新回复</span>
                </li>
                <li class="type-tab">热门</li>
              </ul>
            </div>
          </div>
          <router-link tag="button" to="/article" class="defalut">
            <button class="defal-botn">
              <i class="iconfont icon-fabutiezi"></i>
              <span>发布帖子</span>
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <!-- 中间部分 -->
    <div class="toale">
     <div class="filter-firs">
       <router-link class="article"  v-for="thin in articleList" :key="thin.id" :to="{ name: 'details', query: { id: thin.id } }">
        <div class="article-crad">
          <div class="sacle sacle-img1">
            <img :src="`${'http://192.168.43.104:3000' + thin.cover.slice(0,1)}`" alt="">
          </div>
        </div>
         <div class="article-heard">
            <div class="article-type">
              <span>{{thin.title}}</span>
            </div>
          </div>
          <div class="article-footer">
              <div class="article-acount">
                <div class="rankimg-xs">
                <img :src="`${'http://192.168.43.104:3000' + thin.avatar}`" class="img4">
                </div>
                <span class="user-a">{{thin.author}}</span>
              </div>
            </div>
      </router-link>
     </div>
    </div>
    <div class="code">
      <!-- 扫码下载 -->
      <div class="sem">
        <div class="myh">
          <img src="@/image/二维码.png" />
        </div>
        <div class="qrcode">
          <p class="qrcode-titil">扫码下载米游社App</p>
          <p class="qrcode-suder">了解提瓦特最新资讯</p>
        </div>
      </div>
      <!-- 同人榜 -->
      <div class="side">
        <div class="side-uster">
          <h2>同人榜</h2>
          <a>更多</a>
        </div>
        <div class="side-body">
          <div class="body-rankimg">
            <span class="rankimg-rank1">1</span>
            <div class="rankimg-card rankimg-card1"></div>
            <div class="card-info">
              <p>【荧四格】298</p>
              <div class="rankimg-user">
                <div class="rankimg-xs">
                  <img src="@/image/peerMap/老司机.png" class="img4">
                </div>
                <a class="user-a">雷肾老司机</a>
              </div>
            </div>
          </div>
          <div class="body-rankimg">
            <span class="rankimg-rank2">2</span>
            <div class="rankimg-card rankimg-card2"></div>
            <div class="card-info">
              <p>回家吧</p>
              <div class="rankimg-user">
                <div class="rankimg-xs">
                  <img src="@/image/peerMap/秩序.png" class="img4">
                  <!-- <img src="@/image/peerMap/头像框.png" class="use-img"> -->
                </div>
                <a>秩序菜机</a>
              </div>
            </div>
            </div>
          </div>
          <div class="body-rankimg">
            <span class="rankimg-rank3">3</span>
            <div class="rankimg-card rankimg-card3"></div>
            <div class="card-info">
              <p>《2022高考数学现状》</p>
              <div class="rankimg-user">
                <div class="rankimg-xs">
                  <img src="@/image/peerMap/凌乱卷子.png" class="img4">
                  <!-- <img src="@/image/peerMap/头像框.png" class="use-img"> -->
                </div>
                <a>凌乱卷子</a>
            </div>
            </div>
          </div>
        </div>
      <!-- 热门话题 -->
      <div class="side">
        <div class="side-uster">
          <h2>热门话题</h2>
          <a>更多</a>
        </div>
        <div class="side-body">
          <div class="body-topic">
            <div class="topic-card">
              <img src="@/image/peerMap/同人图.jpg" />
            </div>
            <div class="card-info">
              <p>同人图</p>
            </div>
          </div>
          <div class="body-topic">
            <div class="topic-card">
              <img src="@/image/peerMap/条漫.jpg" />
            </div>
            <div class="card-info">
              <p>条漫</p>
            </div>
          </div>
          <div class="body-topic">
            <div class="topic-card">
              <img src="@/image/peerMap/壁纸.jpg" />
            </div>
            <div class="card-info">
              <p>壁纸</p>
            </div>
          </div>
          <div class="body-topic">
            <div class="topic-card">
              <img src="@/image/peerMap/头像.jpg" />
            </div>
            <div class="card-info">
              <p>头像</p>
            </div>
          </div>
          <div class="body-topic">
            <div class="topic-card">
              <img src="@/image/peerMap/表情包.jpg" />
            </div>
            <div class="card-info">
              <p>表情包</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'cos',
  computed: {
    ...mapState('home', ['articleList'])
  }
}
</script>

<style scoped>
.article-type{
  overflow: hidden;
  white-space: nowrap;
}
.toale {
    width: 720px;
    border-radius: 4px;
    float: left;
}
</style>
