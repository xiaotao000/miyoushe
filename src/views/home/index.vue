<template>
<div class="baNxn edition">
    <div class="zbl">
      <!-- 轮播图 -->
      <div class="adTdm">
        <template>
          <el-carousel trigger="click" :interval="4000" type="card" height="258px" arrow="always">
            <el-carousel-item v-for="item in adTml" :key="item.id" >
              <div class="yin">
                 <img :src="item.imgUrl" alt="" width="100%" height="234px" class="medium">
              </div>
            </el-carousel-item>
          </el-carousel>
        </template>
      </div>
      <!-- 内容 -->
      <div class="nmKjp">
        <div class="nmKjpVl">
          <div class="nameGl" v-for="thin in articleList" :key="thin.id">
            <div class="kmDnm">
              <div class="mlAsd">
                <a href="" class="nmgPls">
                  <div class="yspAsd">
                   <img :src="`${'http://172.19.10.137:3000' + thin.avatar}`" alt="" class="nmgHop">
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
            <router-link :to="{ name: 'details', query: { id: thin.id } }" href="#">
              <div class="derTer">
                <div class="ndx">
                  <span class="zlkJhp">{{thin.category}}</span>
                </div>
                <h3 class="zjKin-h3">{{thin.title}}</h3>
              </div>

              <div class="sdfAdd" v-html="Array.from(thin.introduce.replace(/<p><img .*?><\/p>/g, '')).slice(0, 90).join('')">
              </div>
              <div class="npiAdd">
                <div class="ploAsd" v-for="img in thin.cover.slice(0,3)" :key="img.id">
                  <img :src="img.imgUrl.startsWith('http://') ? img.imgUrl : `http://172.19.10.137:3000${img.imgUrl}`" alt="" width="100%" height="100%">
                </div>
              </div>
            </router-link>
            <div class="bhf">
              <div class="poiAdd1">
                 <div v-if="thin.section" class="ainHmi">
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
                  <span>{{thin.comment ? thin.comment: 0 }}</span>
                </div>
                 <div class="second-data">
            <i class="iconfont iconfont icon-dianzan"></i>
            <span>{{ thin.count ? thin.count: 0 }}</span>
          </div>
              </div>
            </div>
          </div>
        </div>
        <dir class="npr" @click="loading" v-loading="is_loading">点击加载更多</dir>
      </div>
    </div>
    <div class="yb">
        <!-- 发布帖子 -->
      <div class="mihAyo">
        <div class="mihAyoAdd">发布</div>
        <div class="miy">
          <div class="ftz">
            <div class="fbTp">
              <router-link tag="button" to="/article" class="nlm">
                <i class="iconfont icon-fabutiezi"></i>
                <span>发布帖子</span>
                <i class="el-icon-arrow-right"></i>
              </router-link>
            </div>
            <p class="top1">讨论 分析、攻略、同人</p>
          </div>
          <div class="ftz">
            <div class="fbTp">
              <router-link tag="button" to="/picture" class="nlm">
                <i class="el-icon-picture-outline"></i>
                <span>发布图片</span>
                <i class="el-icon-arrow-right"></i>
              </router-link>
            </div>
            <p class="top1"> 绘画、COS、手工、表情包</p>
          </div>
        </div>
      </div>
        <!-- 扫码下载 -->
      <div class="mihAyoXz">
        <div class="mla">
          <div class="mihAYOtP">
            <div class="nmj">
              <img src="https://img-static.mihoyo.com/new_qrcode/qrcode_ys.png" alt="" height="100%">
            </div>
            <div>
              <p class="cvb">扫码下载米游社App</p>
              <p class="icu">了解提瓦特最新资讯</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 个人战绩 -->
      <div class="mihAyoZj">
        <div class="block">
          <el-carousel trigger="click" height="150px" indicator-position="none" arrow="never">
            <el-carousel-item v-for="item in recordList" :key="item.id">
                <img :src="item.imgUrl" alt="" width="100%" height="100%">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <!-- 官方资讯 -->
      <div class="mihAyoZj">
        <div class="addCls">
          <h2 class="admSt">官方资讯</h2>
          <a href="#" class="nkf">更多</a>
        </div>
        <div class="addCl1">
          <div class="adsEnt">
            <div class="cnmDer"></div>
            <p class="nmfGer">【转发抽奖】丽莎生日活动开启！</p>
          </div>
          <div class="wsdFgj">
            <div class="ploLin" v-for="thin in adTml" :key="thin.id">
              <span class="ackLop">{{thin.addKlm}}</span>
              <p class="ackKop">{{thin.addPlo}}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 话题推荐 -->
      <div class="mihAyoZj">
        <div class="addCls">
          <h2 class="admSt">推荐话题</h2>
          <a href="#" class="nkf">更多</a>
        </div>
        <div class="anmKlp">
          <div class="mlpKer">
            <div class="xry" v-for="thin in ponAddSt" :key="thin.id">
              <div class="asdKcb">
                <img :src="`${'http://172.19.10.137:3000' + thin.avatar}`" alt="" width="100%" height="100%">
              </div>
              <p class="xnaMe">{{thin.section}}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 推荐用户 -->
      <div class="mihAyoZj">
        <div class="addCls">
          <h2 class="admSt">推荐用户</h2>
          <a href="#" class="nkf">更多</a>
        </div>
        <div class="swLso">
          <div v-for="thin in appList" :key="thin.id">
            <div class="igDas">
              <div>
                <div class="tgZer">
                  <img :src="`${'http://172.19.10.137:3000' + thin.avatar}`" alt="" class="nmDfg">
                </div>
              </div>
              <div class="sdFgh">
                <div class="poiUin">
                  <span>{{thin.nickname}}</span>
                  <img src="https://img-static.mihoyo.com/level/level8.png" alt="" class="nmHkl">
                </div>
                <p>{{thin.autograph}}</p>
              </div>
              <div class="gzSdf1">
                  <span>关注</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Perfect>
    </Perfect>
    <!-- 返回顶部 -->
    <Totop />
</div>
</template>

<script>
import Perfect from './components/perfect.vue'
import { reqAdtdm, miHuYoApp, getRecord, articleList } from '@/api/home.js'
import { mapState } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      // 弹出层的状态
      centerDialogVisible: true,
      adTml: [], // 官方资讯
      appList: [], // 推荐用户
      recordList: [], // 战绩
      IsDialog: true,
      // 文章列表数据
      category: '',
      articleList: [],
      nowPage: 1,
      is_loading: false
    }
  },
  components: {
    Perfect
  },
  computed: {
    ...mapState('home', ['ponAddSt']),
    ...mapState('user', ['userInfo'])
  },
  mounted () {
    this.category = this.$route.query.category
    this.getRotation()
    this.miHuYoAppList()
    this.getRecord()
    this.$store.dispatch('home/getMiHuYoList')
    this.getArticleList()
  },
  methods: {
    a1 () {
      this.IsDialog = false
    },
    async getRotation () {
      const res = await reqAdtdm()
      this.adTml = res
    },
    async miHuYoAppList () {
      const res = await miHuYoApp()
      this.appList = res
    },
    async getRecord () {
      const res = await getRecord()
      this.recordList = res.data.data
    },
    async getArticleList () {
      const res = await articleList()
      if (res.length <= 10) { // 10条数据一页
        this.articleList = res
      } else {
        this.articleList = res.slice(0, 10)
      }
    },
    async loading () {
      this.is_loading = true
      const res = await articleList()
      this.articleList = this.articleList.concat(res.slice(this.nowPage * 10, (this.nowPage + 1) * 10))
      this.nowPage++
      this.is_loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.swLso>div{
  margin-bottom: 16px;
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
a:hover{
  text-decoration: none;
}
.npr{
  cursor: pointer;
  color: #ccc;
  font-size: 16px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nmHkl{
  margin-left: 6px;
    height: 16px;
    font-size: 14px;
    display: inline-block;
    vertical-align: middle;
}
.poiUin> span{
  max-width: 70px;
  font-size: 14px;
    display: inline-block;
    vertical-align: middle;
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.sdFgh>p{
  color: #999;
    font-size: 12px;
    line-height: 14px;
    margin-top: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.poiUin{
  display: inline-block;
    font-size: 0;
    line-height: 14px;
    vertical-align: top;
}
.sdFgh{
  display: inline-block;
    margin-left: 10px;
    flex-grow: 1;
    overflow: hidden;
}
.nmDfg{
  width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid #ebebeb;
    vertical-align: top;
}
.tgZer{
  width: 44px;
    height: 44px;
}
.gzSdf1{
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
.igDas{
  display: flex;
  align-items: center;
}
.swLso{
  position: relative;
  padding: 20px;
}
.el-icon-video-play{
  font-size: 32px;
  color: rgb(158, 157, 157);
}
.ploAsd1{
  background-image: url(https://upload-bbs.mihoyo.com/upload/2022/06/02/75276539/8233353…_75849691879277551.jpg?x-oss-process=image/resize,s_400/quality,q_80/auto-orient,0/interlace,1/format,jpg);
}
.ploAsd1{
  position: relative;
    width: 400px;
    height: 225px;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f6f6f6;
    flex-direction: column;
    overflow: hidden;
}
.nameGl{
  border-bottom: 1px solid #ebebeb;
}
.blq{
  margin-left: 10px;
  display: flex;
  align-items: center;
    line-height: 18px;
}
.el-icon-view{
  color: #b3b3b3;
    font-size: 16px;
}
.el-icon-chat-dot-round{
  color: #b3b3b3;
    font-size: 16px;
}
.poiAdd>div >span{
  margin-left: 8px;
    color: #ccc;
    display: inline-block;
    width: 50px;
}
.nmfAdd{
  display: flex;
  align-items: center;
  line-height: 18px;
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
.bnf{
  margin-top: 7px;
  display: flex;
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
.npiAdd{
    width: 100%;
    margin-top: 10px;
    overflow: hidden;
    display: inline-flex;
    vertical-align: top;
    position: relative;
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
.derTer{
  display: flex;
  align-items: center;
    position: relative;
    padding-right: 100px;
}
.imgKun{
  height: 12px;
  margin-left: 6px;
  font-size: 14px;
    display: inline-block;
    vertical-align: middle;
}
.naMer{
  font-size: 12px;
  color: #666;
    max-width: 180px;
    display: inline-block;
    vertical-align: middle;
}
.fbnQin{
  color: #666;
  display: inline-block;
    line-height: 14px;
    vertical-align: top;
    align-items: center;
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
.yhMna{
  display: inline-block;
    margin-left: 10px;
    overflow: hidden;
}
.nmgPls{
display: inline-flex;
align-items: center;
}
.yspAsd{
  width: 24px;
  height: 24px;
  display: inline-block;
  position: relative;
}
.nmgHop{
  width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid #ebebeb;
    vertical-align: top;
}
.mlAsd{
  position: relative;
  display: flex;
  align-items: center;
  flex-grow: 1;
}
.kmDnm{
  display: flex;
  align-items: center;
    margin-bottom: 15px;
    position: relative;
}
.nameGl{
  padding: 24px 30px;
}
.nmKjpVl{
  position: relative;
}
.nmKjp{
  background-color: #fff;
  border-radius: 4px;
}
.xnaMe{
  padding-left: 12px;
  position: relative;
    line-height: 20px;
    margin: 0;
    font-weight: normal;
    font-size: 14px;
}
.asdKcb{
  width: 50px;
  height: 50px;
  flex-shrink: 0;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    border: 1px solid #ebebeb;
    display: inline-block;
}
.xry{
  margin-top: 20px;
  display: flex;
  align-items: center;
}
.mlpKer{
  padding-bottom: 10px;
}
.anmKlp{
  position: relative;
  padding: 20px;
}
.ackKop{
  margin-left: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.ackLop{
  display: inline-block;
    width: 32px;
    height: 16px;
    background-color: #c3ccd9;
    color: #fff;
    font-size: 12px;
    border-radius: 3px;
    text-align: center;
    line-height: 16px;
    flex-shrink: 0;
}
.ploLin{
  margin-top: 12px;
  display: flex;
  align-items: center;
  color: #333;
}
.wsdFgj{
  padding-bottom: 10px;
}
.nmfGer{
  position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0 10px;
    height: 32px;
    line-height: 32px;
    color: #fff;
    background-color: rgba(0,0,0,.5);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.cnmDer{
  background-image: url(https://upload-bbs.mihoyo.com/upload/2022/06/08/76387920/e9ff701c48363fc4e87d1ae1a5a390d3_6413922459704094311.png?x-oss-process=image/resize,s_300/quality,q_80/auto-orient,0/interlace,1/format,jpg);
  width: 100%;
    height: 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
}
.adsEnt{
  width: 240px;
    height: 136px;
    position: relative;
    margin-bottom: 20px;
    border-radius: 4px;
    overflow: hidden;
}
.addCl1{
  position: relative;
    padding: 20px;
}
.nkf{
  color: #999;
  flex-shrink: 0;
}
.admSt{
    flex-grow: 1;
    font-size: 16px;
    font-weight: 600;
}
.addCls{
    display: flex;
    height: 50px;
    border-bottom: 1px solid #ebebeb;
    padding: 0 20px;
    align-items: center;
}
::v-deep .block>div>div>.is-active{
  width: 100%;
  left: 0;
}
.mihAyoZj{
  overflow: hidden;
  margin-top: 20px;
  background-color: #fff;
    border-radius: 4px;
}
.icu{
  font-size: 16px;
    /* margin-top: -12px; */
    color: #999;
}
.cvb{
  font-size: 16px;
    color: #00c3ff;
}
.nmj{
  width: 100px;
    height: 100px;
    margin-right: 8px;
    position: relative;
    background-color: #f5f5f5;
    flex-shrink: 0;
}
.mihAYOtP{
  display: flex;
  align-items: center;
}
.mla{
  padding: 0;
}
.mihAyoXz{
  padding: 20px 14px;
  background-color: #fff;
    border-radius: 4px;
}
.el-icon-arrow-right{
  padding-left: 10px;
}
.el-icon-picture-outline{
  width: 35px;
    height: 20px;
    font-size: 20px;
    font-weight: 600;
}
.iconfont{
  width: 35px;
    height: 22px;
    font-size: 19px;
    font-weight: 600;
}
.nlm{
  color: #663c00;
    background-color: #ffe14c;
    border-radius: 4px;
    font-weight: 600;
}
button {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    cursor: pointer;
    outline: none;
    font-size: inherit;
    color: inherit;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    border-radius: 0;
    font-weight: inherit;
    line-height: inherit;
}
.top1{
  font-size: 12px;
    color: #999;
    margin-top: 10px;
    word-break: break-all;
    word-wrap: break-word;
    line-height: 1;
}
.fbTp{
  width: 160px;
    height: 40px;
}
.ftz{
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.miy{
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
}
.mihAyoAdd{
  height: 50px;
    border-bottom: 1px dashed #ebebeb;
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    font-weight: 600;
}
.mihAyo{
  display: flex;
  margin-bottom: 50px;
    padding: 0 10px;
    background-color: #fff;
    border-radius: 4px;
    width: 260px;
    height: 234px;
    flex-direction: column;
}
::v-deep .el-carousel__indicator.is-active button {
    opacity: 1;
    background-color: #00c3ff;
}
.yb{
  float: right;
    width: 280px;
    box-sizing: border-box;
}
.zbl{
  float: left;
  width: 700px;
}
.yin{
  /* -webkit-box-shadow: 0 5px 10px 0 rgb(0 0 0 / 20%); */
   border-radius: 8px;
   height: 234px;
}
::v-deep .el-carousel__mask{
  opacity: -100.76;
}
::v-deep .el-carousel__arrow{
  width: 50px;
    height: 50px;
    background-color: rgba(0,0,0,.5);
}
.baNxn{
  overflow: hidden;
  margin-bottom: 63px;
  background: url(https://bbs.mihoyo.com/_nuxt/img/background.cd0a312.png) no-repeat 0 62px;
}
::v-deep .el-carousel__item--card{
  width: 50%;
}
::v-deep .el-carousel__container .is-active {
    transform: translateX(243.75px) scale(0.83);
    width: 71%;
}
::v-deep .is-active{
  left: -77px;
}
.admIn{
  width: 496px;
  height: 234px;
}
.medium{
  border-radius: 8px;
  background-color: rgba(0,0,0,.5);
}
.adTdm{
  width: 700px;
}
.second-data i{
  color: #b3b3b3;
  font-size: 17px;
}
</style>
