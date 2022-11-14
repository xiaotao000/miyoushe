<template>
  <div class="mhy-main-page">
    <div class="edition">
      <div class="mhy-layout__main">
        <!-- 搜索框 -->
        <div class="mhy-search-page__bar">
          <form class="mhy-search-page__form">
            <input
              type="text"
              class="mhy-search-page__input"
              @blur="inputChange"
              v-model="searchData"
            />
            <div class="mhy-button">
              <button type="submit" class="mhy-button__button" @click="a1">
                搜索
              </button>
            </div>
          </form>
        </div>
        <!-- 文章 -->
        <div class="mhy-container">
          <div class="mhy-search-section__body">
            <div class="nameGl" v-for="thin in articleList" :key="thin.id">
              <div class="kmDnm">
                <div class="mlAsd">
                  <a href="" class="nmgPls">
                    <div class="yspAsd">
                      <img
                        :src="`${'http://172.19.10.137:3000' + thin.avatar}`"
                        alt=""
                        class="nmgHop"
                      />
                    </div>
                  </a>
                  <div class="yhMna">
                    <a href="#" class="fbnQin">
                      <span class="naMer">{{ thin.author }}</span>
                      <img
                        src="https://img-static.mihoyo.com/level/level16.png"
                        alt=""
                        class="imgKun"
                      />
                    </a>
                  </div>
                  <div class="gzSdf">
                    <span>关注</span>
                  </div>
                  <p class="wdStd">
                    {{ thin.time.slice(0, 10) }}• {{ thin.category }}
                  </p>
                </div>
              </div>
              <router-link
                :to="{ name: 'details', query: { id: thin.id } }"
                href="#"
              >
                <div class="derTer">
                  <div class="ndx">
                    <span class="zlkJhp">{{ thin.category }}</span>
                  </div>
                  <h3 ref="title" class="zjKin-h3" v-html="thin.title"></h3>
                </div>

                <div
                  class="sdfAdd"
                  v-html="Array.from(thin.introduce).slice(3, 10).join('')"
                ></div>
                <div class="npiAdd">
                  <div
                    class="ploAsd"
                    v-for="img in thin.cover.slice(0, 3)"
                    :key="img.id"
                  >
                    <img
                      :src="
                        img.imgUrl.startsWith('http://')
                          ? img.imgUrl
                          : `http://172.19.10.137:3000${img.imgUrl}`
                      "
                      alt=""
                      width="100%"
                      height="100%"
                    />
                  </div>
                </div>
              </router-link>
              <div class="bhf">
                <div class="poiAdd1">
                  <div class="ainHmi">
                    <span>{{ thin.section }}</span>
                  </div>
                </div>
                <div class="poiAdd">
                  <div class="nmfAdd">
                    <i class="el-icon-view"></i>
                    <span>{{ thin.browse }}</span>
                  </div>
                  <div class="blq">
                    <i class="el-icon-chat-dot-round"></i>
                    <span>{{ thin.comment ? thin.comment : 0 }}</span>
                  </div>
                  <div class="second-data">
                    <i class="iconfont iconfont icon-dianzan"></i>
                    <span>{{ thin.count ? thin.count : 0 }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mhy-search-page__empty" v-if="!articleList.length">
            <div class="mhy-no-data-lg">
              <img
                src="https://bbs.mihoyo.com/_nuxt/img/noData.a3d7135.png"
                alt=""
              />
              <p>搜索不到您要的结果，换个关键词试试呗~</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mhy-layout__sub">
        <div class="mhy-side-section">
          <div class="mhy-sem-block">
            <div class="mhy-qrcode__code">
              <img
                src="https://img-static.mihoyo.com/new_qrcode/qrcode_ys.png"
                alt=""
              />
            </div>
            <div class="mhy-qrcode__text">
              <p class="mhy-qrcode__title">扫码下载米游社App</p>
              <p class="mhy-qrcode__subtitle">了解提瓦特最新资讯</p>
            </div>
          </div>
        </div>
        <div class="mhy-search-history-section">
          <div class="mhy-side-section__header">
            <h2 class="mhy-side-section__title">搜索历史</h2>
            <button class="side-mhy-button" @click="clear">清空</button>
          </div>
          <div class="mhy-side-section__body">
            <div class="mhy-search-history-list" v-if="oldList.length">
              <div class="mhy-search-history-list__card" v-for="item, i in oldList.slice(0,10)" :key="i" @click="card(item)">{{item}}</div>
            </div>
            <div class="mhy-search-page__empty" style="padding: 20px 10px;" v-if="!oldList.length">
            <div class="mhy-no-data-lg">
              <img
                src="https://bbs.mihoyo.com/_nuxt/img/noData.a3d7135.png"
                alt=""
              />
              <p>暂无搜索历史~</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    <Totop />
  </div>
</template>
<script>
import { getSearch } from '@/api/home'
export default {
  name: 'search',
  data () {
    return {
      articleList: {},
      searchData: '',
      oldList: []
    }
  },
  mounted () {
    this.searchData = this.$route.query.search
    this.getsearch()
  },
  methods: {
    clear () {
      this.oldList = []
    },
    card (item) {
      this.searchData = item
      this.getsearch()
    },
    async getsearch () {
      if (this.searchData.trim().length) {
        this.oldList.push(this.searchData)
      }
      // eslint-disable-next-line no-return-assign
      if (!this.searchData) return (this.articleList = {})
      const res = await getSearch({ search: this.searchData })
      this.articleList = res
      // eslint-disable-next-line camelcase
      const filter_kw = this.articleList.filter((item) => {
        return item.title.includes(this.searchData) // 当值与 数组的值 做匹配
      })
      const html = filter_kw.map((item) => {
        const reg = new RegExp(`(${this.searchData})`, 'g')
        return {
          id: item.id,
          title: `<h1>${item.title.replace(
            reg,
            '<i class="highlight">$1</i>'
          )}</h1>`,
          author: item.author,
          avatar: item.avatar,
          browse: item.browse,
          category: item.category,
          comment: item.comment,
          introduce: item.introduce,
          section: item.section,
          time: item.time,
          cover: item.cover
        }
      })
      this.articleList = html
    },
    a1 () {
      this.$router.push('/search')
      this.getsearch()
    },
    async inputChange () {
      if (this.searchData.trim().length) {
        this.oldList.push(this.searchData)
      }
      // eslint-disable-next-line no-return-assign
      if (!this.searchData) return (this.articleList = {})
      const res = await getSearch({ search: this.searchData })
      this.articleList = res
      // eslint-disable-next-line camelcase
      const filter_kw = this.articleList.filter((item) => {
        return item.title.includes(this.searchData) // 当值与 数组的值 做匹配
      })
      const html = filter_kw.map((item) => {
        const reg = new RegExp(`(${this.searchData})`, 'g')
        return {
          id: item.id,
          title: `<h1>${item.title.replace(
            reg,
            '<i class="highlight">$1</i>'
          )}</h1>`,
          author: item.author,
          avatar: item.avatar,
          browse: item.browse,
          category: item.category,
          comment: item.comment,
          introduce: item.introduce,
          section: item.section,
          time: item.time,
          cover: item.cover
        }
      })
      console.log(html)
      this.articleList = html
    }
  }
}
</script>

<style lang="scss">
.mhy-search-page__empty {
  border-radius: 4px;
  padding: 150px 0;
  background-color: #fff;
  .mhy-no-data-lg {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      width: 200px;
    }
    p {
      margin-top: 40px;
      color: #999;
      white-space: pre-wrap;
      text-align: center;
      line-height: 24px;
    }
  }
}
.mhy-layout__sub {
  float: right;
  width: 280px;
  .mhy-side-section {
    padding: 20px 14px;
    background-color: #fff;
    border-radius: 4px;
    .mhy-sem-block {
      display: flex;
      align-items: center;
      .mhy-qrcode__code {
        width: 100px;
        height: 100px;
        margin-right: 8px;
        position: relative;
        background-color: #f5f5f5;
        img {
          height: 100%;
        }
      }
      .mhy-qrcode__text {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        white-space: nowrap;
        .mhy-qrcode__title {
          font-size: 16px;
          color: #00c3ff;
        }
        .mhy-qrcode__subtitle {
          font-size: 16px;
          margin-top: 8px;
          color: #999;
        }
      }
    }
  }
  .mhy-search-history-section {
    margin-top: 20px;
    background-color: #fff;
    border-radius: 4px;
    .mhy-side-section__header {
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #ebebeb;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .mhy-side-section__title {
        -webkit-box-flex: 1;
        flex-grow: 1;
        font-size: 16px;
        font-weight: 600;
      }
      .side-mhy-button {
        width: 120px;
        flex-shrink: 0;
        color: #999;
        cursor: pointer;
        outline: none;
        font-size: inherit;
        background-color: transparent;
        border: none;
        border-radius: 0;
      }
    }
    .mhy-side-section__body {
      padding: 20px;
      padding-bottom: 0;
      padding-right: 0;
      position: relative;
      .mhy-search-history-list {
        height: 280px;
        padding-bottom: 18px;
        padding-right: 8px;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        overflow: hidden;
        .mhy-search-history-list__card {
          margin-bottom: 12px;
          margin-right: 12px;
          padding: 0 12px;
          height: 30px;
          line-height: 28px;
          border-radius: 15px;
          border: 1px solid #ebebeb;
          cursor: pointer;
          overflow: hidden;
          -o-text-overflow: ellipsis;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}
.edition {
  overflow: hidden;
}
.highlight {
  color: #00c3ff;
}
.mhy-main-page {
  box-sizing: border-box;
  margin-bottom: 20px;
}
.mhy-layout__main {
  float: left;
  width: 700px;
  box-sizing: border-box;
}
.mhy-search-page__bar {
  height: 50px;
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
}
.mhy-search-page__form {
  height: 100%;
  display: flex;
  .mhy-search-page__input {
    display: inline-block;
    height: 100%;
    border: none;
    padding: 0 30px;
    -webkit-box-flex: 1;
    outline: none;
    flex-grow: 1;
  }
  .mhy-button {
    display: inline-block;
    cursor: pointer;
    flex-shrink: 0;
    width: 120px;
    font-size: 16px;
    .mhy-button__button {
      background-color: #ffe14c;
      color: #663c00;
      font-weight: 600;
      height: 50px;
      transition: 0.2s background-color;
      display: inline-flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      cursor: pointer;
      outline: none;
      font-size: inherit;
      border: none;
      border-radius: 0;
      width: 100%;
      line-height: inherit;
    }
  }
}

.mhy-container {
  margin-top: 20px;
}
.mhy-article-card {
  padding: 24px 30px;
}

.mhy-article-card__header {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 15px;
  position: relative;
}
.mhy-article-card__userinfo {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-flex: 1;
  flex-grow: 1;
}
.mhy-user-card {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.mhy-user-card img {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid #ebebeb;
  vertical-align: top;
}
.nameGl {
  background-color: #fff;
  border-bottom: 1px solid #ebebeb;
}
.blq {
  margin-left: 10px;
  display: flex;
  align-items: center;
  line-height: 18px;
}
.el-icon-view {
  color: #b3b3b3;
  font-size: 16px;
}
.el-icon-chat-dot-round {
  color: #b3b3b3;
  font-size: 16px;
}
.poiAdd > div > span {
  margin-left: 8px;
  color: #ccc;
  display: inline-block;
  width: 50px;
}
.nmfAdd {
  display: flex;
  align-items: center;
  line-height: 18px;
}
.poiAdd {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  height: 24px;
  flex-grow: 1;
  justify-content: flex-end;
  margin-top: 5px;
}
.bnf {
  margin-top: 7px;
  display: flex;
}
.ploAsd > img {
  width: 100%;
  height: 100%;
  border-radius: 6px;
}
.ploAsd {
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
.npiAdd {
  width: 100%;
  margin-top: 10px;
  overflow: hidden;
  display: inline-flex;
  vertical-align: top;
  position: relative;
}
.sdfAdd {
  line-height: 18px;
  margin-top: 8px;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.zjKin-h3 {
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: #333;
}
.zlkJhp {
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
.ndx {
  display: flex;
}
.derTer {
  display: flex;
  align-items: center;
  position: relative;
  padding-right: 100px;
}
.imgKun {
  height: 12px;
  margin-left: 6px;
  font-size: 14px;
  display: inline-block;
  vertical-align: middle;
}
.naMer {
  font-size: 12px;
  color: #666;
  max-width: 180px;
  display: inline-block;
  vertical-align: middle;
}
.fbnQin {
  color: #666;
  display: inline-block;
  line-height: 14px;
  vertical-align: top;
  align-items: center;
}
.wdStd {
  color: #ccc;
  margin-left: 10px;
  font-size: 12px;
}
.gzSdf {
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
  transition: 0.2s background-color;
}
.yhMna {
  display: inline-block;
  margin-left: 10px;
  overflow: hidden;
}
.nmgPls {
  display: inline-flex;
  align-items: center;
}
.yspAsd {
  width: 24px;
  height: 24px;
  display: inline-block;
  position: relative;
}
.nmgHop {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid #ebebeb;
  vertical-align: top;
}
.mlAsd {
  position: relative;
  display: flex;
  align-items: center;
  flex-grow: 1;
}
.kmDnm {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  position: relative;
}
.nameGl {
  padding: 24px 30px;
}
.nmKjpVl {
  position: relative;
}
.nmKjp {
  background-color: #fff;
  border-radius: 4px;
}
.xnaMe {
  padding-left: 12px;
  position: relative;
  line-height: 20px;
  margin: 0;
  font-weight: normal;
  font-size: 14px;
}
.asdKcb {
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid #ebebeb;
  display: inline-block;
}
.xry {
  margin-top: 20px;
  display: flex;
  align-items: center;
}
.mlpKer {
  padding-bottom: 10px;
}
.anmKlp {
  position: relative;
  padding: 20px;
}
.ackKop {
  margin-left: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ackLop {
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
.ploLin {
  margin-top: 12px;
  display: flex;
  align-items: center;
  color: #333;
}
.wsdFgj {
  padding-bottom: 10px;
}
.nmfGer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0 10px;
  height: 32px;
  line-height: 32px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.cnmDer {
  background-image: url(https://upload-bbs.mihoyo.com/upload/2022/06/08/76387920/e9ff701c48363fc4e87d1ae1a5a390d3_6413922459704094311.png?x-oss-process=image/resize,s_300/quality,q_80/auto-orient,0/interlace,1/format,jpg);
  width: 100%;
  height: 100%;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
}
.adsEnt {
  width: 240px;
  height: 136px;
  position: relative;
  margin-bottom: 20px;
  border-radius: 4px;
  overflow: hidden;
}
.addCl1 {
  position: relative;
  padding: 20px;
}
.nkf {
  color: #999;
  flex-shrink: 0;
}
.admSt {
  flex-grow: 1;
  font-size: 16px;
  font-weight: 600;
}
.addCls {
  display: flex;
  height: 50px;
  border-bottom: 1px solid #ebebeb;
  padding: 0 20px;
  align-items: center;
}
::v-deep .block > div > div > .is-active {
  width: 100%;
  left: 0;
}
.mihAyoZj {
  overflow: hidden;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 4px;
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
.mihAyoXz {
  padding: 20px 14px;
  background-color: #fff;
  border-radius: 4px;
}
.el-icon-arrow-right {
  padding-left: 10px;
}
.el-icon-picture-outline {
  width: 35px;
  height: 20px;
  font-size: 20px;
  font-weight: 600;
}
.iconfont {
  width: 35px;
  height: 22px;
  font-size: 19px;
  font-weight: 600;
}
.nlm {
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
.top1 {
  font-size: 12px;
  color: #999;
  margin-top: 10px;
  word-break: break-all;
  word-wrap: break-word;
  line-height: 1;
}
.fbTp {
  width: 160px;
  height: 40px;
}
.ftz {
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.miy {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
}
.mihAyoAdd {
  height: 50px;
  border-bottom: 1px dashed #ebebeb;
  text-align: center;
  line-height: 50px;
  font-size: 16px;
  font-weight: 600;
}
.mihAyo {
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
.yb {
  float: right;
  width: 280px;
  box-sizing: border-box;
}
.zbl {
  float: left;
  width: 700px;
}
.yin {
  /* -webkit-box-shadow: 0 5px 10px 0 rgb(0 0 0 / 20%); */
  border-radius: 8px;
  height: 234px;
}
::v-deep .el-carousel__mask {
  opacity: -100.76;
}
::v-deep .el-carousel__arrow {
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.5);
}
.baNxn {
  overflow: hidden;
  margin-bottom: 63px;
  background: url(https://bbs.mihoyo.com/_nuxt/img/background.cd0a312.png)
    no-repeat 0 62px;
}
::v-deep .el-carousel__item--card {
  width: 50%;
}
::v-deep .el-carousel__container .is-active {
  transform: translateX(243.75px) scale(0.83);
  width: 71%;
}
::v-deep .is-active {
  left: -77px;
}
.admIn {
  width: 496px;
  height: 234px;
}
.medium {
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.5);
}
.adTdm {
  width: 700px;
}
.second-data i {
  color: #b3b3b3;
  font-size: 17px;
}
.poiAdd1 {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  height: 29px;
  overflow: hidden;
}
.ainHmi {
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
</style>
