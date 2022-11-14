<template>
  <div class="edition sanGn">
    <div class="admInj">
      <!-- 详情，内容 -->
      <div class="wnStd" v-for="item in getDetailsList" :key="item.id">
        <!-- 标题 -->
        <div>
          <div class="inj">
            <h1>{{ item.title }}</h1>
          </div>
          <div class="mhy-article-page-info">
            <div class="mh-xmj">
              <span>来自版块：</span>
              <a href="#" class="mhy-gf">{{ item.category }}</a>
            </div>
            <div class="mhy-addNme">
              <div>
                <i class="i iconfont icon-liulanshu"></i>
                <span>{{ item.browse }}</span>
              </div>
              <div>
                <i class="i iconfont iconfont icon-liuyanshu"></i>
                <span>0</span>
              </div>
              <div>
                <i class="i iconfont iconfont icon-dianzan"></i>
                <span>0</span>
              </div>
              <div>
                <i class="i iconfont iconfont icon-shoucang"></i>
                <span>0</span>
              </div>
            </div>
          </div>
          <!-- 发布时间 -->
          <div class="mys-fps">
            <span>文章发表：{{ item.time }}</span>
          </div>
        </div>
        <!-- 内容 -->
        <div class="nkh">
          <div class="miHyo-nri">
            <div>
              <div class="miHou-add" v-html="item.introduce"></div>
              <template v-if="item.category ==='同人图' || item.category === 'COS' ">
              <img
                v-for="(img, i) in item.cover"
                :key="i"
                :src="`http://172.19.10.137:3000${img.imgUrl}`"
                alt=""
              />
              </template>
            </div>
          </div>
        </div>
        <!-- 点赞，收藏 -->
        <div class="miHuy">
          <!-- 类型，举报 -->
          <div class="nihAox">
            <div class="njlHrs">
              <!-- 类型 -->
              <div class="ainHts">
                <div v-if="item.section" class="ainHmi">
                  <span>{{ item.section }}</span>
                </div>
              </div>
            </div>
            <div class="njHop">举报</div>
          </div>
          <!-- 点赞收藏 -->
          <div class="zcDfk">
            <div class="mhy-article-page-user-data__item">
              <div class="wdFgh">
                <i class="mhy-icon iconfont icon-dianzan"></i>
                <span>0</span>
              </div>
            </div>
            <div class="mhy-article-page-user-data__item mhy-k">
              <div class="wdFgh">
                <i class="mhy-icon iconfont icon-shoucang"></i>
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 评论区 -->
      <div>
        <!-- 请发表你的评论 -->
        <div class="woTao">
          <div class="nmSdl">看帖是喜欢，评论才是真爱：</div>
          <div class="ban">
            <div class="mkPok">
              <el-input
                type="textarea"
                placeholder="请开始你的表演..."
                v-model="textarea"
                maxlength="1000"
                show-word-limit
              >
              </el-input>
            </div>
            <div></div>
          </div>
          <div class="mih-yoHuo">
            <div class="mih-yoHouIng">
              <i class="mhy-reply-box__toolbar iconfont icon-biaoqing"></i>
              <i
                class="mhy-reply-box__toolbar iconfont icon-tupian1 mhy-reply-box__disabled"
              ></i>
              <i class="mhy-reply-box__toolbar iconfont icon-a-xibian"></i>
            </div>
            <div class="mihYo-spn">
              <el-button type="primary">评论</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 发布用户 -->
    <div class="wsTao" v-for="item in getDetailsList" :key="item.id">
      <div class="hin-mas">
        <a href="#">
          <div class="nmh-sdf">
            <img :src="`http://172.19.10.137:3000${item.avatar}`" alt="" />
          </div>
        </a>
        <div class="hgfAdd">
          <div class="nbfHes">
            <span>{{ item.author }}</span>
            <img src="https://img-static.mihoyo.com/level/level16.png" alt="" />
          </div>
          <p>{{ item.autograph }}</p>
          <div class="njm-miHaoYo">
            <span>关注</span>
          </div>
        </div>
      </div>
      <!-- 扫码下载 -->
      <div class="mihAyoXz">
        <div class="mla">
          <div class="mihAYOtP">
            <div class="nmj">
              <img
                src="https://img-static.mihoyo.com/new_qrcode/qrcode_ys.png"
                alt=""
                height="100%"
              />
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
          <el-carousel
            trigger="click"
            height="150px"
            indicator-position="none"
            arrow="never"
          >
            <el-carousel-item v-for="item in mihAyoTop" :key="item.id">
              <img :src="item.img" alt="" width="100%" height="100%" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <!-- 热门内容 -->
      <div class="miHuYo-rme">
        <div class="nmHyo-bn">
          <h2>热门内容</h2>
        </div>
        <div class="chMiy">
          <div>
            <div>
              <a href="#" class="miHoYO-img">
                <div class="nmiHyo-po">
                  <img
                    src="https://upload-bbs.mihoyo.com/upload/2022/06/10/75379477/049953b5981c16655e22bb99c9da38a8_5301417018324559384.jpg?x-oss-process=image/resize,s_200/quality,q_80/auto-orient,0/interlace,1/format,jpg"
                    width="100%"
                    height="100%"
                    alt=""
                  />
                </div>
                <p>【有奖活动】「荒泷极上盛世豪鼓大祭典」视频征集活动开启！</p>
              </a>
            </div>
            <div class="taoTo">
              <a href="#" class="miHoYO-img">
                <div class="nmiHyo-po">
                  <img
                    src="https://upload-bbs.mihoyo.com/upload/2022/06/10/75276545/3e40a4e2dfe163ec0de0bf0afec0c2cc_7520568502830621939.jpg?x-oss-process=image/resize,s_200/quality,q_80/auto-orient,0/interlace,1/format,jpg"
                    width="100%"
                    height="100%"
                    alt=""
                  />
                </div>
                <p>「荒泷极上盛世豪鼓大祭典」玩法说明</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- 所属话题 -->
      <div class="miHuYo-rme">
        <div class="nmHyo-bn">
          <h2>所属话题</h2>
        </div>
        <dir class="miHoy-vRbIng">
          <div>
            <div class="miHuy-yoEs">
              <a href="#">
                <div class="mhy-topic-card__cover">
                  <img
                    src="https://upload-bbs.mihoyo.com/upload/2022/05/31/f28123cf5bb9fb4eaab89e5aa8d17b4e_2522701218894571451.jpg?x-oss-process=image/resize,s_150/quality,q_80/auto-orient,0/interlace,1/format,jpg"
                    alt=""
                  />
                </div>
              </a>
              <div class="mhy-topic-card__info">
                <p>盛世豪鼓大祭典</p>
              </div>
            </div>
          </div>
        </dir>
      </div>
      <!-- 所属版块 -->
      <div class="miHuYo-rme">
        <div class="nmHyo-bn">
          <h2>所属话题</h2>
        </div>
        <dir class="miHoy-vRbIng">
          <div>
            <div class="miHuy-yoEs">
              <a href="#">
                <div class="mhy-topic-card__cover">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAFpOLgnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkNBQjVCODEyNTA1NjExRTk5OUYyQjYxMUUwRDY1Njc5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkNBQjVCODEzNTA1NjExRTk5OUYyQjYxMUUwRDY1Njc5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0FCNUI4MTA1MDU2MTFFOTk5RjJCNjExRTBENjU2NzkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0FCNUI4MTE1MDU2MTFFOTk5RjJCNjExRTBENjU2NzkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5nLLCfAAAC70lEQVR42mKsf/ifAQjABBpgZMIhAdbAhE20QQ5CwyV/ff0Mp+vu/QGzWWCSbNy8YLpNE0I3PELSCTMKBBY+/g5xER7XygAEEEjyOJBhgSbxhQmLIAjwMGFzOtyFMKdXXWcEWwlyLQuys2E6QM5mQRb4/Oc/Ay8LI8IokApomMLtAAggXM7FC5jwaUD2ATKbiYEMwILT5EeoYp//4tL0CLfpvMyomn6BghWrn3AYAhBAoNADafhJpHfymUhQDAITSQ41JkLxgFMDyTYQC0Ch9B+Slr/Asw0LOycDEwsLPH0jJ2l4BLZp8sAlQTHc+xSRTZHjBWuMU9XTcBtAuapBjhGpQODE72lSgvUCKRoAAojUxEcOuMhEYwtAQJ+FUDmCDGDpgFg1WEsFQpkb3WBi1JBdyFFUKGJLl8gAOY0So4bs9Es1n4DCFVd4E5O30fXSJU7oYgnWOEEuVFHCFlrAEqsGOU7yQVUPsiAbNw9B1xGjBgYAAgjWhMoD4lZQI4iKoXQCiO1Bngb55DwQG9AgKiyg5SIHE40sQAYH6JG6LAam7CqWRm2HYcvJxKjBawlIM6EinBg1w7NYGT6WsGCr2RrkMFton/78h3eDiFGDtxT+9+cPw5+f37EVc/BCkRg1eH0CKqbZWHjxhzERaoZOZhzNJyM0M8bLjsDM+IUecVINskSGlv1FIJ4EEGCwxh2woGDYQofmEbUBqBfuA8RPQaGVC8RPhqAnGKBuBrk9F+SRHoahD7pBHmEbBh5hZyFGlSqwHPQTIr42BA17bHrHwHD7O23MIboLjw6iRXG3D3ANAYD0oKunljkDVicOm8p91CMj0SNEZXbYvBO+MTpsetCbd9Qyh2yPtN/+yoB76hEXwGxCUsscsj1CysgcPcwh2yOjFSKOCpFYAPLwaIU46pFRjwzhCpEUMFohDtUKEZRHTgyDLHIC5BEHBsjY0FAFl0B+gK2FAA2rsANxARCfAeKvg9jhX6FuLIC6WR/kBwBJ3kHUjxrV2gAAAABJRU5ErkJggg=="
                    alt=""
                  />
                </div>
              </a>
              <div class="mhy-topic-card__info">
                <p>官方</p>
              </div>
            </div>
          </div>
        </dir>
      </div>
    </div>
    <!-- 点赞 -->
    <div class="fuDan">
      <div class="df">
        <div class="anWs">
          <i class="mhy-icon iconfont icon-liuyanshu"></i>
          <span>0</span>
        </div>
        <div class="anWs as">
          <i class="mhy-icon iconfont icon-shoucang"></i>
          <span>0</span>
        </div>
        <div class="anWs as">
          <i class="mhy-icon iconfont icon-dianzan"></i>
          <span>0</span>
        </div>
        <div class="anWs as" v-if="iShow" @click="dialogVisible = true">
          <i class="mhy-icon iconfont icon-shezhi1"></i>
        </div>
      </div>
    </div>
    <el-dialog
      top="35vh"
      title="管理"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <div class="box">
        <ul>
          <li>
            <el-radio v-model="radio" label="1">编辑</el-radio>
          </li>
          <li>
            <el-radio
              v-model="radio"
              label="2"
              style="color: #ff667f !important"
              >删除</el-radio
            >
          </li>
        </ul>
      </div>
      <span slot="footer" :center="true" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog top="35vh" title="提示" :visible.sync="determine" width="40%">
      <span style="text-align: center">确认要删除该贴吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="determine = false">取 消</el-button>
        <el-button type="primary" @click="determineSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getDetailsList, removeArticle } from '@/api/home'
export default {
  data () {
    return {
      textarea: '',
      id: null,
      iShow: false,
      dialogVisible: false,
      determine: false,
      getDetailsList: [],
      radio: '1',
      category: '',
      mihAyoTop: [
        {
          id: 1,
          img: 'https://upload-bbs.mihoyo.com/pc_ad/pc_ad_ys_game_record2.jpg'
        },
        { id: 2, img: 'https://upload-bbs.mihoyo.com/pc_ad/ys_signin.jpg' },
        {
          id: 3,
          img: 'https://upload-bbs.mihoyo.com/upload/2022/05/30/ede03f2363d3e11a43f96cf9fb9573a5_2340278032758854255.jpg'
        }
      ]
    }
  },
  methods: {
    async getDetails () {
      const res = await getDetailsList({ id: this.id })
      this.getDetailsList = res
    },
    submitForm () {
      if (this.radio === '1') {
        if (this.category === '酒馆' || this.category === '硬核' || this.category === '攻略') {
          this.$router.push({ path: '/article', query: { id: this.id } })
        } else {
          this.$router.push({ path: '/picture', query: { id: this.id } })
        }
      } else {
        this.determine = true
        this.dialogVisible = false
      }
    },
    async determineSubmit () {
      await removeArticle(this.id)
      Object.assign(this.$data, this.$options.data())
      this.$message.success('删除成功！！！')
      this.$router.push('/home')
    }
  },
  mounted () {
    this.id = this.$route.query.id
    this.iShow = this.$route.query.show
    this.category = this.$route.query.category
    this.getDetails()
  }
}
</script>

<style lang="scss">
::v-deep {
  .el-dialog {
    width: 480px !important;
  }
  .el-dialog__header {
    border-bottom: 1px solid #ebebeb;
  }
  .el-dialog__body {
    padding: 12px 30px;
    max-height: 460px;
    overflow: auto;
  }
  .el-dialog__footer {
    text-align: center;
  }
}

.box ul li {
  align-items: center;
  padding: 16px 0;
  line-height: 18px;
  border-bottom: 1px solid #ebebeb;
}
.miHou-add {
  p {
    margin-bottom: 15px;
    font-size: 16px;
    word-wrap: break-word;
    word-break: break-word;
    padding: 0;
    height: auto;
    overflow-x: hidden;
    span {
      color: rgb(0, 0, 0);
    }
    img {
      height: auto;
      min-width: 100%;
    }
  }
}
.mhy-topic-card__info {
  margin-left: 10px;
}
.mhy-topic-card__cover > img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
.mhy-topic-card__cover {
  width: 50px;
  height: 50px;
}
.miHuy-yoEs > a {
  color: #333;
  display: flex;
  align-items: center;
}
.miHuy-yoEs {
  display: flex;
  align-items: center;
}
.miHoy-vRbIng > div {
  padding-bottom: 10px;
}
.miHoy-vRbIng {
  position: relative;
  padding: 20px;
}
.miHoYO-img > p {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 21px;
  margin: 4px 0;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
}
.miHoYO-img {
  display: flex;
  align-items: center;
  color: #333;
}
.nmiHyo-po {
  width: 75px;
  height: 50px;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 10px;
  flex-shrink: 0;
}
.nmiHyo-po > img {
  border-radius: 8px;
}
.taoTo {
  margin-top: 20px;
}
.chMiy {
  position: relative;
  padding: 20px;
}
.nmHyo-bn > h2 {
  flex-grow: 1;
  font-size: 16px;
  font-weight: 600;
}
.nmHyo-bn {
  display: flex;
  height: 50px;
  border-bottom: 1px solid #ebebeb;
  padding: 0 20px;
  align-items: center;
}
.miHuYo-rme {
  margin-top: 20px;
  background-color: #fff;
  border-radius: 4px;
}
::v-deep .block > div > div > .is-active {
  width: 100%;
  left: 0;
}
.mihAyoXz {
  padding: 20px 14px;
  background-color: #fff;
  border-radius: 4px;
}
.mihAYOtP {
  display: flex;
  align-items: center;
}
.icu {
  font-size: 16px;
  /* margin-top: -12px; */
  color: #999;
}
.cvb {
  font-size: 16px;
  color: #00c3ff;
}
.nmj {
  width: 100px;
  height: 100px;
  margin-right: 8px;
  position: relative;
  background-color: #f5f5f5;
  flex-shrink: 0;
}
.mihAYOtP {
  display: flex;
  align-items: center;
}
.mla {
  padding: 0;
}
.mihAyoZj {
  overflow: hidden;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 4px;
}
.njm-miHaoYo {
  margin-top: 12px;
  width: 86px;
  height: 34px;
  line-height: 32px;
  background-color: #fff;
  color: #00b2ff;
  border: 1px solid #00c3ff;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
}
.hgfAdd > p {
  line-height: 16px;
  margin: 2px 0;
  white-space: normal;
  color: #999;
  font-size: 12px;
}
.nbfHes > img {
  margin-left: 0px;
  height: 16px;
  font-size: 14px;
  display: inline-block;
  vertical-align: middle;
}
.nbfHes > span {
  line-height: 22px;
  font-weight: 600;
  font-size: 16px;
  margin-right: 6px;
  white-space: normal;
  display: inline;
}
.nbfHes {
  display: inline-block;
  font-size: 0;
  line-height: 14px;
  vertical-align: top;
  color: #666;
  align-items: center;
}
.hgfAdd {
  margin-left: 15px;
  display: flex;
  flex-direction: column;
}
.nmh-sdf > img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid #ebebeb;
  vertical-align: top;
}
.nmh-sdf {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  display: inline-block;
  position: relative;
}
.hin-mas {
  padding: 0 20px 0 30px;
  height: 160px;
  background-color: #fff;
  display: flex;
  margin-bottom: 20px;
  border-radius: 4px;
  align-items: center;
}
.miHou-add > div {
  display: inline-block;
  font-size: 0;
  position: relative;
  max-width: 100%;
}
.miHou-add {
  margin-bottom: 15px;
}
.miHyo-nri > div > p {
  margin-bottom: 15px;
}
.miHyo-nri > div {
  font-size: 16px;
  word-wrap: break-word;
  word-break: break-word;
  padding: 0;
  height: auto;
  overflow-x: hidden;
}
.miHyo-nri {
  margin-bottom: 30px;
}
.nkh {
  margin-top: 24px;
}
::v-deep .el-button--primary {
  background-color: #00c3ff;
  border-color: #00c3ff;
  width: 86px;
}
.mihYo-spn {
  width: 86px;
  height: 34px;
  line-height: 34px;
}
.mhy-reply-box__toolbar {
  margin-right: 20px;
  color: #b3b3b3;
  cursor: pointer;
  font-size: inherit;
}
.mih-yoHouIng {
  font-size: 20px;
  height: 20px;
  flex-grow: 1;
  display: flex;
}
.mih-yoHuo {
  display: flex;
  margin-top: 20px;
  height: 34px;
}
::v-deep .el-textarea__inner {
  height: 100px;
}
.mkPok {
  min-height: 100px;
  position: relative;
}
.ban {
  position: relative;
}
.nmSdl {
  color: #ccc;
  margin-bottom: 15px;
}
.woTao {
  margin-top: 20px;
  background-color: #fff;
  padding: 30px 50px;
  border-radius: 4px;
}
.mhy-k {
  margin-left: 108px;
}
.wdFgh > span {
  margin-left: 20px;
  color: #999;
}
.wdFgh {
  position: relative;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
}
.mhy-article-page-user-data__item {
  display: flex;
  align-items: center;
  height: 30px;
  cursor: pointer;
}
.zcDfk {
  display: flex;
  border-top: 1px solid #f0f0f0;
  margin-top: 30px;
  padding-top: 40px;
  justify-content: center;
}
.njHop {
  color: #ccc;
}
.ainHmi {
  display: inline-flex;
  color: inherit;
  align-items: center;
  padding: 0 12px;
  user-select: none;
}
.ainHts {
  height: 24px;
  line-height: 24px;
  align-items: center;
  color: #666;
  border-radius: 12px;
  margin-right: 10px;
  background-color: #f5f5f5;
  position: relative;
  cursor: pointer;
  display: inline-flex;
}
.njlHrs {
  flex-grow: 1;
  font-size: 12px;
  display: flex;
}
.nihAox {
  display: flex;
  align-items: center;
}
.miHuy {
  margin-top: 30px;
}
.mys-fps > span {
  padding: 0 6px;
  line-height: 18px;
}
.mys-fps {
  text-align: center;
  color: #ccc;
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.mhy-addNme > div {
  margin-left: 15px;
}
.mhy-addNme > div > span {
  color: #ccc;
}
.i {
  color: #b3b3b3;
  margin-right: 4px;
}
.mhy-addNme {
  flex-shrink: 0;
  display: inline-flex;
}
.mhy-gf {
  color: #fa0;
}
.mh-xmj {
  flex-grow: 1;
  color: #999;
}
.mhy-article-page-info {
  height: 40px;
  padding: 0 15px;
  background-color: #f7f8fc;
  display: flex;
  align-items: center;
  margin-top: 15px;
}
.inj > h1 {
  font-size: 22px;
  line-height: 26px;
  margin: 0;
  word-break: break-word;
  word-wrap: break-word;
}
.inj {
  display: flex;
}
.wnStd {
  padding: 40px 50px;
  background-color: #fff;
  border-radius: 4px;
}
.df {
  padding: 0 10px;
}
.as {
  border-top: 1px solid #f0f0f0;
}
.anWs > span {
  color: #999;
  margin-top: 10px;
  line-height: 1;
  white-space: nowrap;
}
.mhy-icon {
  font-size: 30px;
  color: #b3b3b3;
}
.anWs {
  cursor: pointer;
  padding: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.sanGn {
  overflow: hidden;
}
.fuDan {
  position: fixed;
  top: 91px;
  left: 50%;
  width: 90px;
  background-color: #fff;
  border-radius: 4px;
  margin-left: -596px;
}
.wsTao {
  float: right;
  width: 280px;
  margin-bottom: 63px;
}
.admInj {
  float: left;
  width: 700px;
}
</style>
