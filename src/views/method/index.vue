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
                <li class="type-tab">攻略分类</li>
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
    <div class="toal">
      <div class="filter-first">
        <!-- 置顶内容 -->
        <div class="first">
          <span>置顶</span>
          <a>【攻略区版规】将会移除求助、讨论、反馈贴等非攻略贴</a>
        </div>
        <div class="first">
          <span>置顶</span>
          <a>【攻略索引】角色攻略、世界任务、材料采集、BOSS 持更</a>
        </div>
        <div class="first">
          <span>置顶</span>
          <a>2.7版本｜夜兰、魈、若水弓评测等 攻略合集「持续更新」</a>
        </div>
      </div>
      <!-- 发布的消息 -->
        <div class="nameGl" v-for="thin in articleList" :key="thin.id">
            <div class="kmDnm">
              <div class="mlAsd">
                <a href="" class="nmgPls">
                  <div class="yspAsd">
                   <img :src="`${'http://mui65p.natappfree.cc' + thin.avatar}`" alt="" class="nmgHop">
                  </div>
                </a>
                <div class="yhMna">
                  <a href="#" class="fbnQin">
                    <span class="naMer">{{thin.author}}</span>
                    <img src="https://img-static.mihoyo.com/level/level16.png" alt="" class="imgKun">
                  </a>
                </div>
                <div class="gzSdf">
                  <span>关注</span>
                </div>
                <p class="wdStd">{{thin.time.slice(0,10)}}• {{thin.category}}</p>
              </div>
            </div>
            <router-link to="details" href="#">
              <div class="derTer">
                <div class="ndx">
                  <span class="zlkJhp">{{thin.category}}</span>
                </div>
                <h3 class="zjKin-h3">{{thin.title}}</h3>
              </div>
              <div class="sdfAdd" v-html="thin.introduce">
              </div>
              <div class="npiAdd">
                <div class="ploAsd" v-for="app in thin.cover.slice(0,3)" :key="app">
                  <img :src="`${'http://mys.flycran.xyz' + app}`" alt="" width="100%" height="100%">
                </div>
              </div>
            </router-link>
            <div class="bhf">
              <div class="poiAdd1">
                 <div class="ainHmi">
                  <span>{{thin.section}}</span>
                </div>
              </div>
              <div class="poiAdd">
                <div class="nmfAdd">
                  <i class="el-icon-view"></i>
                  <span>{{thin.browse}}</span>
                </div>
                <div class="blq">
                  <i class="el-icon-chat-dot-round"></i>
                  <span>100</span>
                </div>
                 <div class="second-data">
            <i class="iconfont iconfont icon-dianzan"></i>
            <span>126</span>
          </div>
              </div>
            </div>
        </div>
       <dir class="npr">点击加载更多</dir>
    </div>
    <div class="code">
      <!-- 搜素框 -->
      <div class="guide">
        <div class="guide-searh">
          <el-input />
        </div>
          <div class="guide-submit">
          <button type="submit" class="defult">搜素</button>
        </div>
      </div>
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
      <!-- 官方资讯 -->
      <div class="side">
        <div class="side-uster">
          <h2>官方资讯</h2>
          <a>更多</a>
        </div>
        <div class="side-body">
          <div class="body-op">
            <p class="body-list">米游币抽抽乐-原神专场现已开启！</p>
          </div>
        </div>
        <div class="list-banner">
          <div class="banner-info">
            <span>活动</span>
            <p>【转发抽奖】丽莎生日活动开启！</p>
          </div>
        </div>

        <div class="list-banner">
          <div class="banner-info">
            <span>资讯</span>
            <p>【已开奖】「流风眷堇庭」2.6版本攻略征集活动获奖名单</p>
          </div>
        </div>

        <div class="list-banner">
          <div class="banner-info">
            <span>资讯</span>
            <p>【已开奖】「流风眷堇庭」2.6版本攻略征集活动获奖名单</p>
          </div>
        </div>

        <div class="list-banner">
          <div class="banner-info">
            <span>公告</span>
            <p>2.7版本游戏问题集中反馈-6月9日更新</p>
          </div>
        </div>

        <div class="list-banner">
          <div class="banner-info">
            <span>公告</span>
            <p>「荒梦藏虞渊」2.7版本更新说明</p>
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
              <img src="@/image/method/探索解谜.jpg" />
            </div>
            <div class="card-info">
              <p>探索解谜</p>
            </div>
          </div>
          <div class="body-topic">
            <div class="topic-card">
              <img src="@/image/method/角色攻略.jpg" />
            </div>
            <div class="card-info">
              <p>角色攻略</p>
            </div>
          </div>
          <div class="body-topic">
            <div class="topic-card">
              <img src="@/image/method/其他攻略.jpg" />
            </div>
            <div class="card-info">
              <p>其他攻略</p>
            </div>
          </div>
          <div class="body-topic">
            <div class="topic-card">
              <img src="@/image/method/萌新指南.jpg" />
            </div>
            <div class="card-info">
              <p>萌新指南</p>
            </div>
          </div>
          <div class="body-topic">
            <div class="topic-card">
              <img src="@/image/method/讨伐手册.jpg" />
            </div>
            <div class="card-info">
              <p>讨伐手册</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Totop></Totop>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'method',
  computed: {
    ...mapState('home', ['articleList'])
  }
}
</script>

<style >
.derTer{
  display: flex;
  align-items: center;
    position: relative;
    padding-right: 100px;
}
.npiAdd{
  margin-top: 10px;
    overflow: hidden;
    display: inline-flex;
    vertical-align: top;
    position: relative;
}
.bhf{
  display: flex;
  margin-top: 7px;
}
.poiAdd1{
  display: flex;
  flex-wrap: wrap;
    height: 29px;
    overflow: hidden;
}
.nmfAdd{
  display: flex;
  align-items: center;
  line-height: 18px;
}
.poiAdd>div >span{
  margin-left: 8px;
    color: #ccc;
    display: inline-block;
    width: 50px;
}
.poiAdd{
  display: flex;
  align-items: center;
  flex-shrink: 0;
    height: 24px;
    flex-grow: 1;
    justify-content: flex-end;
    margin-top: 5px;
}
.ainHmi{
  height: 24px;
    line-height: 24px;
    align-items: center;
    color: #666;
    border-radius: 12px;
    margin-right: 10px;
    background-color: #f5f5f5;
  display: inline-flex;
    color: inherit;
    align-items: center;
    padding: 0 12px;
    user-select: none;
}
.ploAsd>img{
  width: 100%;
  height: 100%;
  border-radius: 6px;
}
.ploAsd{
  margin-right: 5px;
  display: inline-block;
    width: 120px;
    height: 120px;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 6px;
    position: relative;
    cursor: pointer;
}
.sdfAdd{
  line-height: 18px;
  margin-top: 8px;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.zjKin-h3{
  font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    color: #333;
}
.zlkJhp{
  background-color: #00c3ff;
    color: #fff;
    height: 18px;
    border-radius: 2px;
    text-align: center;
    line-height: 18px;
    font-weight: 600;
    padding: 0 4px;
    margin-right: 6px;
}
.ndx{
  display: flex;
}
.wdStd{
  color: #ccc;
    margin-left: 10px;
    font-size: 12px;
}
.gzSdf{
  position: absolute;
    right: 0;
    top: 0;
    background-color: #00c3ff;
    border-radius: 13px;
    height: 26px;
    line-height: 26px;
    font-size: 14px;
    width: 70px;
    display: inline-block;
    color: #fff;
    text-align: center;
    cursor: pointer;
    flex-shrink: 0;
    transition: .2s background-color;
}
.imgKun{
  height: 12px;
  margin-left: 6px;
  font-size: 14px;
    display: inline-block;
    vertical-align: middle;
}
.nmgHop{
  width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid #ebebeb;
    vertical-align: top;
}
.yspAsd{
  width: 24px;
  height: 24px;
  display: inline-block;
  position: relative;
}
.nmgPls{
display: inline-flex;
align-items: center;
}
.mlAsd{
  position: relative;
  display: flex;
  align-items: center;
  flex-grow: 1;
}
.nameGl{
  border-bottom: 1px solid #ebebeb;
  padding: 24px 30px;
}
.kmDnm{
  display: flex;
  align-items: center;
    margin-bottom: 15px;
    position: relative;
}
</style>
