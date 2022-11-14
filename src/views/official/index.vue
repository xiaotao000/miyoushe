<template>
  <div class="nm ">
    <div class="forum">
      <div class="layout">
        <div class="forum-heard">
          <div class="artice">
            <div class="type-st">
              <ul>
                <li class="active">活动</li>
                <li class="type-tab">
                  <span>公告</span>
                </li>
                <li class="type-tab">资讯</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nmAsd edition">
      <div class="z">
        <div class="lfi">
          <div class="bnfGnm">
            <router-link :to="{ name: 'details', query: { id: thin.id } }" href="#" class="nmAsd" v-for="thin in articleList" :key="thin.id">
              <div class="maSdf">
                <div class="zsFgh">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAYAAAEp2mxLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI2NjdBNjFDM0Y0NzExRTlCNEYyRkVCMTdFQkIyMEQ0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjI2NjdBNjFEM0Y0NzExRTlCNEYyRkVCMTdFQkIyMEQ0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjY2N0E2MUEzRjQ3MTFFOUI0RjJGRUIxN0VCQjIwRDQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjY2N0E2MUIzRjQ3MTFFOUI0RjJGRUIxN0VCQjIwRDQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4fkS2VAAABfklEQVR42mJ89vW/JwMDwzYGJMAIFPzPxcqAApgYsAAWkOpvvxECQF3/AQIIrB1DJbp5uM0EmscI5zAx/BflYGAECCCsTsIGmBiIBEQrxPAjFuAkycWwDyCAsPobC3jO+OEXUQpp4BkaBA9ydKEBWWCMPQIFHTB4GPGZ+BjZEIAAIjquqe6XUQPxGvicWob9/Q+JZUrMuARMIbqwtAUSAAggkIHPgLQklRzpRXQ2JQaAXDqaDkcNHJ4G/v1PVfNesPz8g7NSwQf2cbIwODJCdfKzQswA0mR72en7Hwb9X3+pG4aX/vwDtygeIwsCBBi4+GJnZpBkpnr0UFhY/2Ng+PmX4TnIWYPOcSAAdZPkIHQajfPdqANHHTjqwFEHDjEHgnrU3sD6by6QlqClRaCWAAswOFhxBAmoYgfWxcjgKRCnUdo3ISfGCoG4lY2ZgZ2FCbXXAOvfDGQUg8KoF4g5gCHGAXRUHxD/+/tvcKbBn0BcDAw1ZmCrRRDIXo5NEQBIW3cDEFn4OQAAAABJRU5ErkJggg==" alt="" class="nmdHjk">
                  <span>{{thin.comment}}</span>
                </div>
              </div>
              <div class="bnGhj">
                <div class="nmPlk">
                  <h3 class="conSod">{{thin.title}}</h3>
                  <div class="conSon" v-html="Array.from(thin.introduce.replace(/<p><img .*?><\/p>/g, '')).slice(0, 90).join('')"></div>
                  <div class="plojn">{{thin.time.slice(0,10)}}</div>
                </div>
                <div class="nmPkl1" v-for="img in thin.cover.slice(0, 1)" :key="img.id">
                  <img :src="img.imgUrl.startsWith('http://') ? img.imgUrl : `http://172.19.10.137:3000${img.imgUrl}`" alt="" width="100%" height="100%">
                </div>
              </div>
            </router-link>
          </div>
          <dir class="npr">点击加载更多</dir>
        </div>
      </div>
      <div class="y">
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
        <div class="mihAyoZj">
        <div class="addCls">
          <h2 class="admSt">推荐话题</h2>
          <a href="#" class="nkf">更多</a>
        </div>
        <div class="anmKlp">
          <div class="mlpKer">
            <div class="xry" v-for="thin in npmRup" :key="thin.id">
              <div class="asdKcb">
                <img :src="thin.img" alt="" width="100%" height="100%">
              </div>
              <p class="xnaMe">{{thin.name}}</p>
            </div>
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
  name: 'official',
  data () {
    return {
      npmRup: [
        {
          id: 1,
          img: 'https://upload-bbs.mihoyo.com/upload/2022/05/20/548cb9dfbcdbc3aee675682effab335f_7195431897910087890.jpg?x-oss-process=image/resize,s_150/quality,q_80/auto-orient,0/interlace,1/format,jpg',
          name: '夜兰'
        },
        {
          id: 2,
          img: 'https://upload-bbs.mihoyo.com/upload/2021/01/27/3ff281b8ea27a0f041096877be58c36b.png?x-oss-process=image/resize,s_150/quality,q_80/auto-orient,0/interlace,1/format,jpg',
          name: '魈'
        },
        {
          id: 3,
          img: 'https://upload-bbs.mihoyo.com/upload/2022/05/20/9396dba467b2a4c333fea5fbd307f667_8102889689757292331.jpg?x-oss-process=image/resize,s_150/quality,q_80/auto-orient,0/interlace,1/format,jpg',
          name: '荒梦藏虞渊'
        },
        {
          id: 4,
          img: 'https://upload-bbs.mihoyo.com/upload/2022/05/20/74d3b22d5d4b0468066b8315e05eba3f_7138224143758159037.jpg?x-oss-process=image/resize,s_150/quality,q_80/auto-orient,0/interlace,1/format,jpg',
          name: '久岐忍'
        },
        {
          id: 5,
          img: 'https://upload-bbs.mihoyo.com/upload/2022/05/31/de1f7fa30c2add3808d73ce86e347395_3933077904901367927.jpg?x-oss-process=image/resize,s_150/quality,q_80/auto-orient,0/interlace,1/format,jpg',
          name: '危途疑踪'
        }
      ]
    }
  },
  computed: {
    ...mapState('home', ['articleList', 'ponAddSt'])
  },
  mounted () {
    this.$store.dispatch('home/getMiHuYoList')
  }
}
</script>

<style  scoped>
.nm{
  margin-top: 30px;
}
.npr{
  color: #ccc;
    font-size: 16px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.plojn{
  font-size: 12px;
    color: #ccc;
    line-height: 1;
    margin-top: 8px;
}
.conSon{
  display: -webkit-box;
    margin-top: 6px;
    color: #999;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
.conSod{
  font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    color: #333;
}
.nmf{
  width: 100%;
    height: 100%;
    border-radius: 8px;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #f6f6f6;
}
.nmPkl1{
  width: 242px;
    height: 106px;
    flex-shrink: 0;
    margin-left: 20px;
}
.nmPkl1>img{
  border-radius: 8px;
}
.nmPlk{
  display: block;
    margin-left: 20px;
    padding: 8px 0 6px;
    overflow: hidden;
    -webkit-box-flex: 1;
    flex-grow: 1;
}
.bnGhj{
  display: flex;
  flex-grow: 1;
  overflow: hidden;
}
.zsFgh> span{
  position: relative;
    display: inline-block;
    color: #45a5e5;
    font-size: 12px;
    line-height: 20px;
    z-index: 5;
}
.nmdHjk{
  position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
}
.zsFgh{
  margin-top: 5px;
    width: 40px;
    height: 30px;
    padding-top: 3px;
    position: relative;
    text-align: center;
}
.maSdf{
  width: 40px;
  flex-shrink: 0;
}
.nmAsd{
  border-bottom: 1px solid #ebebeb;
  display: flex;
  padding: 30px 30px 24px 20px;
}
.bnfGnm{
  position: relative;
}
.lfi{
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
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}
.anmKlp{
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
.y{
  float: right;
  width: 280px;
  margin-left: 20px;
}
.z{
  width: 700px;
  margin-bottom: 63px;
}
.nmAsd{
  overflow: hidden;
}
.forum {
    position: fixed;
    top: 62px;
    left: 0;
    height: 56px;
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #ebebeb;
    z-index: 999;
  }
  .forum-heard {
    display: flex;
    height: 56px;
    -webkit-box-align: center;
    align-items: center;
    padding: 0 30px;
  }
  .layout {
    width: 1000px;
    margin: 0 auto;
    padding-left: 100px;
    padding-right: 100px;
    box-sizing: content-box;
  }
  .artice {
    height: 100%;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    align-items: center;
    display: flex;
    -webkit-box-align: center;
  }
  .defalut {
    padding: 0 1px;
    height: 36px;
    color: #663c00;
    background-color: #ffe14c;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 600;
  }
  .defal-botn {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
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
  .defal-botn i{
    font-size: 21px;
      margin-top: 1px;
  }
  .type-st {
    margin-right: 20px;
    z-index: 5;
    height: 100%;
  }
  .type-st ul {
    display: flex;
    height: 100%;
    width: 240px;
  }
  .type-st li {
     /* vertical-align: top; */
    height: 56px;
    line-height: 56px;
    text-align: center;
    cursor: pointer;
    font-size: 16px;
    color: #333;
    display: block;
  }
  .type-tab {
    margin-left: 40px;
  }
  .active {
    font-weight: 600;
    color: #00c3ff !important;
  }
  .active::before {
  bottom: 0;
  content: " ";
  position: absolute;
  width: 32px;
  border-bottom: 3px solid #00c3ff;
}

</style>
