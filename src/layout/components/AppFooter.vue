<template>
  <div class="footer">
    <div class="mhy-layout footer__inner">
      <div class="footer__body">
        <div class="footer__item">
          <div class="footer__itemtitle">社区地图</div>
          <div class="footer__col2">
            <p class="footer__itemtext">酒馆</p>
            <p class="footer__itemtext">攻略</p>
            <p class="footer__itemtext">官方</p>
            <p class="footer__itemtext">同人图</p>
            <p class="footer__itemtext">cos</p>
            <p class="footer__itemtext">硬核</p>
          </div>
        </div>
        <div class="footer__item">
          <div class="footer__itemtitle">了解我们</div>
          <div class="footer__col2">
            <p class="footer__itemtext">关于我们</p>
            <p class="footer__itemtext">加入我们</p>
            <p class="footer__itemtext">原神官网</p>
            <p class="footer__itemtext">米哈游官网</p>
          </div>
        </div>
        <div class="footer__item">
          <div class="footer__itemtitle">相关信息</div>
          <div class="footer__col2">
            <p class="footer__itemtext">米游社隐私政策</p>
            <p class="footer__itemtext">米游社服务协议</p>
            <p class="footer__itemtext">米哈游用户协议</p>
            <p class="footer__itemtext">儿童隐私政策</p>
            <p class="footer__itemtext">自律公约</p>
          </div>
        </div>
        <div class="footer__item a3">
          <div class="footer__itemtitle">联系我们</div>
          <div class="footer__col2">
            <p class="footer__itemtext">地址：长沙市岳麓区5500号</p>
            <p class="footer__itemtext">电话：666-666-6666（每天10:00~20:00）</p>
          </div>
        </div>
        <div class="footer_item">
          <div class="mhy-qrcode">
            <div class="mhy-qrcode__code">
              <img src="@/image/二维码.png" alt="">
            </div>
            <div class="mhy-qrcode__text">
              <p class="mhy-qrcode__title">扫码下载米游社App</p>
              <p class="mhy-qrcode__subtitle">了解提瓦特最新资讯</p>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="footer__copyright">
          <p>© 2018 米哈游版权所有｜沪公网安备6666666666号｜沪ICP备66666666666号-4</p>
          <p>沪网文〔2019〕3168-216｜增值电信业务经营许可证：沪B2-20190555</p>
          <p>互联网违法不良信息举报电话：021-60371750（工作时间：每天10点-20点）｜互联网违法不良信息举报邮箱：tousu@mihoyo.com</p>
          <p>亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听。</p>
        </div>
        <div class="footer__licence">
          <a href="#">
            <img src="@/image/实名认证.png" alt="">
          </a>
          <a href="#">
            <img src="@/image/信封.png" alt="">
            111
          </a>
          <a href="#">
            <img src="@/image/网上有害信息.png" alt="">
            11
          </a>
          <a href="#">
            <img src="@/image/文化.png" alt="">
          </a>
          <a href="#">
            <img src="@/image/96.png" alt="">
          </a>
          <a href="#">
            <img src="@/image/营业执照.png" alt="">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style lang="scss" scoped>
.footer{
  background-color: #2d2f33;
  padding: 40px 0;
  text-align: center;
  color: rgba(210, 205, 205, 0.6);
  padding-bottom: 40px;
}
.footer .mhy-layout{
  width: 1000px;
  margin: 0 auto;
  padding: 0 100px;
  box-sizing: content-box;
  height: 400px;
}
.mhy-layout .footer__body{
  text-align: left;
  display: flex;
  padding-bottom:40px ;
}
.footer__body .footer__item{
  width: 176px;
  flex-shrink: 0;
}
.footer__body .a3{
  width: 312px;
}
.footer__item .footer__itemtitle{
  margin-bottom: 30px;
  font-weight: 600;
  font-size: 14px;
}
.footer__item .footer__col2{
  display: flex;
  flex-wrap: wrap;
  width: 120px;
  margin-right: -20px;
}
.footer__col2 .footer__itemtext{
  margin-right: 20px;
  line-height: 26px;
  white-space: nowrap;
  font-size: 14px;
}

.footer_item .mhy-qrcode{
    display: block;
    width: 160px;
}
.mhy-qrcode .mhy-qrcode__code{
  width: 100px;
  height: 100px;
  margin: 0 auto;
  position: relative;
  background-color: #f5f5f5;
  flex-shrink: 0;
}
.mhy-qrcode__code img{
  width: 100%;
  height: 100%;
}
.mhy-qrcode .mhy-qrcode__text{
  text-align: center;
  margin-top: 20px;
}
.mhy-qrcode__text .mhy-qrcode__title{
    font-size: 16px;
    color: #00c3ff;
}
.mhy-qrcode__text .mhy-qrcode__subtitle{
  font-size: 16px;
  margin-top: 8px;
  color: #999;
}

.mhy-layout .footer__bottom{
  border-top: 1px solid  rgba(235,235,235,.1);
  text-align: left;
  padding-top: 40px;
}
.footer__bottom .footer__copyright{
  color: #666;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
}
.footer__bottom .footer__licence{
  display: flex;
  -webkit-box-pack: center;
  // align-items: center;
  justify-content: center;
  margin-top: 15px;
}
.footer__licence a{
  margin-left: 10px;
}
</style>
