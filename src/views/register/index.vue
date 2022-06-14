<template>
<!-- 注册页 -->
    <div>
      <LOGON>
        <ValidationObserver ref="form">
            <form @submit.prevent="submitForm">
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
                <ValidationProvider name="code" rules="required|length:6|integer" v-slot="{ errors }">
                  <div class="input-container">
                    <input type="tel"  placeholder="手机验证码" v-model="from.code">
                    <div class="input-inner-btn" v-if="isTimer">{{timer + '秒'}}</div>
                    <div class="input-inner-btn" @click="countDown" v-else>获取验证码</div>
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
                <button type="submit">注册</button>
              </div>
            </form>
          </ValidationObserver>
          <div class="register-bar">
            <router-link to="logon">返回登录</router-link>
          </div>
      </LOGON>
    </div>
</template>

<script>
// 导入验证组件
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { getCode } from '@/api/user'
export default {
  name: 'register',
  components: { ValidationProvider, ValidationObserver },
  data () {
    return {
      // form表单数据
      from: {
        phone: '',
        password: '',
        OkPassword: '',
        code: ''
      },
      timer: 60,
      isTimer: false,
      i: ''
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
        this.$router.push('/home')
        this.$store.dispatch('user/modifyState', true)
      } catch (error) {
        console.log('注册失败')
      }
    },
    // 验证码
    async countDown () {
      this.isTimer = true
      const res = await getCode({ phone: this.from.phone })
      setTimeout(() => {
        this.from.code = res
      }, 3000)
      console.log(this.code)
      console.log(res)
      // let time = 3
      // document.querySelector('h1').innerHTML = this.timer
      // 开启倒计时 1s执行1次
      let timer = this.timer
      // eslint-disable-next-line no-var
      var timeID = setInterval(() => {
        timer--
        // console.log(timer)
        this.timer = timer
        if (timer <= 0) {
          this.timer = 4
          this.isTimer = false
          clearInterval(timeID)
        }
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>

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

.error-text{
  color: #f73131;
  font-size: 16px;
  line-height: 16px;
  padding: 11.2px 0 4.8px;
}
</style>
