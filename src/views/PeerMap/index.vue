<template>
  <div class="edition a1">
    <div class="forum">
      <div class="layout">
        <div class="forum-heard">
          <div class="artice">
            <div class="type-st">
              <ul>
                <li>最新发帖</li>
                <li class="type-tab">
                  <span class="type-item">最新回复</span>
                </li>
                <li class="type-tab">热门</li>
                <li class="type-tab">攻略分类</li>
              </ul>
            </div>
          </div>
          <div class="defalut">
            <el-button class="defal-botn">
              <i class="el-icon-edit"></i>
              <span>发布帖子</span>
            </el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="toal">

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
export default {
  name: "PeerMap",
};
</script>

<style lang="sass" scoped>
</style>
