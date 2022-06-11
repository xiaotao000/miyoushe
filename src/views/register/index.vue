<template>
<!-- 注册页 -->
    <div class="register">
      <div class="mhy-verify-body-container"></div>
      <div class="mhy-verify-container">
        <img src="@/image/注册LOGO.png" alt="">
        <div class="mhy-register">
          <div class="mhy-verify-header">
            <h2>注册米哈游通行证</h2>
            <p>注册即代表您同意并遵守 <a href="#">《米哈游通行证用户服务协议》</a> <a href="#">《米哈游通行证用户个人信息及隐私保护政策》</a></p>
          </div>
          <ValidationObserver ref="form">
            <from @submit.prevent="submitForm">
              <div class="mhy-form-input">
                <ValidationProvider ref="phone" name="phone" rules="required|length:11|phone" v-slot="{ errors }">
                  <div class="input-container">
                      <input type="text"  placeholder="手机号" v-model="from.phone" onFocus="">
                  </div>
                  <!-- 账号错误的提示信息 -->
                  <p class="error-text">{{errors[0]}}</p>
                </ValidationProvider>
              </div>
              <div class="mhy-form-input">
                <ValidationProvider name="code" rules="required|length:4|integer" v-slot="{ errors }">
                  <div class="input-container">
                    <input type="tel"  placeholder="手机验证码" v-model="from.code">
                    <div class="input-inner-btn">获取验证码</div>
                  </div>
                  <p class="error-text"> {{errors[0]}}</p>
                </ValidationProvider>
              </div>
              <div class="mhy-form-input">
                <ValidationProvider  name="password" rules="required|min:8|max:15|alpha_num"  v-slot="{ errors }">
                  <div class="input-container">
                    <input type="password"  placeholder="密码为8-15位(不能全是字母或数字)" v-model="from.password">
                  </div>
                  <!-- 账号错误的提示信息 -->
                  <p class="error-text">{{errors[0]}}</p>
                </ValidationProvider>
              </div>
              <div class="mhy-form-input">
                <ValidationProvider name="rp_password" :rules="{ required: true, is: from.password }"  v-slot="{ errors }">
                  <div class="input-container">
                    <input type="password"  placeholder="确认密码" v-model="from.OkPassword">
                  </div>
                  <!-- 账号错误的提示信息 -->
                  <p class="error-text">{{errors[0]}}</p>
                </ValidationProvider>
              </div>
              <div class="register-btn">
                <button type="submit" @click="submitForm">注册</button>
              </div>
            </from>
          </ValidationObserver>
          <div class="register-bar">
            <a href="/home">返回登录</a>
          </div>
        </div>
      </div>
      <div class="mhy-footer">
        <div>
          <div class="mihoyo-cn-footer">
            <div class="footer-content">
              <div class="footer-logo">
                <div>
                  <img src="@/image/注册LOGO.png" alt="">
                </div>
              </div>
              <div class="footer-info">
                <div class="footer-link a1"><a>隐私政策</a> <a>|</a> <a>关于我们</a> <a>|</a> <a>联系我们</a> <a>|</a> <a>加入我们</a></div>
                <div class="footer-link"><a>沪公网安备31010402001113号</a><a>|</a><a>增值电信业务经营许可证：沪B2-20190555</a></div>
                <div class="footer-link"> <a>沪ICP备19018275号-4</a> <a>|</a> <a>沪网文〔2019〕3168-216号</a> </div>
                <div class="footer-link"><a>互联网违法不良信息举报邮箱: tousu@mihoyo.com 互联网违法不良信息举报电话: 021-60371750 （工作时间：每天10点 - 20点）</a></div>
                <div class="footer-link"><a>亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听</a></div>
                <div class="footer-link"><a>未成年成长关爱热线：021-60371740</a></div>
                <div class="footer-link"><a>©2012-2021 上海米哈游影铁科技有限公司版权所有 客服电话：400-666-6312</a></div>
                <div class="footer-icon">
                  <a href="#">
                    <img src="@/image/实名认证.png" alt="">
                  </a>
                  <a href="#">
                    <img src="@/image/信封.png" alt="">
                  </a>
                  <a href="#">
                    <img src="@/image/网上有害信息.png" alt="">
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
        </div>
      </div>
    </div>
</template>

<script>
// 导入验证组件
import { ValidationProvider, ValidationObserver } from 'vee-validate'

export default {
  name: 'register',
  components: { ValidationProvider, ValidationObserver },
  data () {
    return {
      // form表单数据
      from: {
        phone: '19967934005',
        password: 'long123456',
        OkPassword: 'long123456'
      }
    }
  },
  methods: {
    async submitForm () {
      console.log(1111)
      const success = await this.$refs.form.validate()
      console.log(success)
      if (!success) return
      const { phone, password, code } = this.from
      try {
        await this.$store.dispatch('user/register', { phone, password, code })
        console.log('注册成功')
        // this.$router.push('/home')
      } catch (error) {
        console.log('注册失败')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.register{
  background-color: #eaeaea;
  width: 100%;
  min-height: 100%;
  overflow: auto;
  position: absolute;
}
.register .mhy-verify-container{
  width: 612px;
  margin:0 auto;
}
.mhy-verify-container img{
  width: 216px;
  margin: 54px auto;
  display: block;
}

.mhy-verify-container .mhy-register{
  -webkit-box-shadow: 0 20px 20px -10px rgb(0 0 0 / 10%);
  padding: 54px 126px 72px;
  background-color: #ffff;
  color: #4c4c4c;
  border-radius: 6px;
}
.mhy-register .mhy-verify-header{
  margin-top: 18px;
  text-align: center;
}
.mhy-verify-header h2{
  font-size: 28.8px;
  line-height: 48px;
  color: #4EA4DC;
  border-bottom: 4px solid #4ea4dc;
}
.mhy-verify-header p{
  font-size: 16.2px;
  margin-top: 9px;
}
.mhy-verify-header a{
  color: #4ea4dc;
}

// form表单
.mhy-register .mhy-form-input{
  margin-bottom: 18px;
  padding-top: 27px;
  font-size: 21.6px;
  line-height: 24px;
  position: relative;
}
.mhy-form-input .input-container{
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  position: relative;
}
.input-container input{
  outline: none;
  flex: 1;
  z-index: 2;
  border: none;
  width: 100%;
  color: #4c4c4c;
  font-weight: 300;
  padding: 7.2px 0;
  background-color: transparent;
}
.input-container .input-inner-btn{
  width: 144px;
  text-align: center;
  padding: 10.8px 0;
  font-size: 18px;
  color: #4ea4dc;
  cursor: pointer;
  line-height: 17.6px;
}
.register-btn{
  display: block;
  text-align: center;
  margin: 48px 0 16px;
}
.register-btn button{
  display: inline-block;
  border: 1px solid #4ea4dc;
  width: 100%;
  line-height: 57.6px;
  padding: 0 54px;
  background-color: #4ea4dc;
  border-radius: 3.2px;
  color: #fff;
  font-size: 21.6px;
}
.register-bar{
  overflow: hidden;
  font-size: 18px;
  font-weight: 200;
  text-align: right;
}
.register-bar a{
  text-decoration: none;
  color: #4ea4dc;
}

// 底部图标
.mhy-footer {
  position: relative;
  margin: 48px auto 32px;
}
.mhy-footer .mihoyo-cn-footer{
  padding: 30px 0;
  color: #999;
  font-size: 14px;
  padding-bottom: 20px;
  overflow: auto;
}
.mihoyo-cn-footer .footer-content{
  display: flex;
  margin: 0 auto;
  width: 880px;
}
.footer-content .footer-logo{
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  min-height: 94px;
  min-width: 300px;
  box-sizing: border-box;
}
.footer-logo img{
  width: 200px;
  height: inherit !important
}

.footer-info{
  color: #aaa !important;
  margin-left: 60px;
  line-height: 24px;
}
.footer-info .a1{
  height: 52px;
}
.footer-link a{
  margin-right: 10px;
  font-size: 14px;
  color: #aaaa;
}
.footer-info .footer-icon{
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack:start;
  justify-content: flex-start;
  padding: 10px 0;
  flex-wrap: wrap;
  width: 800px;
}
.footer-icon img{
  display: block;
  width: 116px;
  height: 46px;
  margin-right: 15px;
  background-size: 116px 46px;
  margin-bottom: 10px;
}
.error-text{
  color: #f73131;
  font-size: 16px;
  line-height: 16px;
  padding: 11.2px 0 4.8px;
}
</style>
