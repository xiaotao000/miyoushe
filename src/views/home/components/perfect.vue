<template>
    <div class="mhy-account-frame" v-if="IsDialog">
        <div class="mhy-account-action-sheet__content">
            <div class="mhy-account-action-sheet__close" @click="a1">x</div>
            <div class="mhy-init-account-info">
                <div class="mhy-init-account-info__title">
                    完善信息
                </div>
                <ValidationObserver ref="form">
                  <form class="mhy-init-account-info__form"  @submit.prevent="submitForm">
                    <!-- 头像 -->
                    <div class="mhy-init-account-info__avatar">
                      <el-upload
                        class="avatar-uploader"
                        action="http://mys.flycran.xyz/my/update/avatar"
                        :show-file-list="false"
                        :on-success="handlePictureCardPreview"
                        :headers="myHeaders"
                        name="avatar"
                        >
                        <div class="mhy-avatar">
                          <!-- 头像 -->
                          <img  :src="imageUrl" alt="">
                        </div>
                        <!-- <div class="mhy-button-default">
                          <button class="mhy-button__button">修改头像</button>
                        </div> -->
                      </el-upload>
                    </div>
                    <!-- 提示 -->
                    <div class="mhy-init-account-info__tips">
                      <img src="@/image/注册LOGO.png" alt="">
                      <div class="mhy-init-account-info__words">昵称会决定彼此的第一印象，用心来一个吧</div>
                    </div>
                    <!-- 昵称输入框 -->
                    <div class="mhy-input">
                      <ValidationProvider name="name" rules="required|min:3|max:20" v-slot="{ errors }">
                        <div class="mhy-input__container">
                            <input type="text" placeholder="填写昵称(3-20)" v-model="formInput.name">
                            <div class="err-text">{{errors[0]}}</div>
                        </div>
                      </ValidationProvider>
                    </div>
                    <!-- 完成按钮 -->
                    <div class="mhy-button">
                      <button class="mhy-button__button" type="submit">完成</button>
                    </div>
                    <!-- 霸王条款 -->
                    <div class="mhy-checkbox">
                      <ValidationProvider name="agree" rules="required|agree"  v-slot="{ errors }">
                        <input name="m1" type="checkbox" v-model="formInput.agree">
                        <span>我已阅读并接受</span>
                        <a href="#">《米哈游社区用户服务协议》</a>
                        <div class="err-text b1">{{errors[0]}}</div>
                      </ValidationProvider>
                    </div>
                  </form>
                </ValidationObserver>
            </div>
        </div>
    </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { getUsername } from '@/api/user'
import { GET_TOKEN } from '@/utils/userToken'
import { mapState } from 'vuex'
const token = GET_TOKEN()

export default {
  name: 'perfect',
  components: { ValidationProvider, ValidationObserver },
  data () {
    return {
      formInput: {
        name: ''
      },
      imageUrl: 'https://img1.sycdn.imooc.com/5458666300017f2102200220-200-200.jpg',
      myHeaders: { authorization: 'Bearer ' + token }
    }
  },
  methods: {
    handlePictureCardPreview (response, file, fileList) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    async submitForm () {
      const success = await this.$refs.form.validate()
      console.log(success)
      if (!success) return
      await getUsername({ nickname: this.formInput.name })
      this.$store.dispatch('user/getUserInfo')
      this.$store.dispatch('user/modifyState', false)
    },
    a1 () {
      this.$store.dispatch('user/modifyState', false)
    }
  },
  mounted () {
    console.log(this.myHeaders)
  },
  computed: {
    ...mapState('user', ['IsDialog'])
  }
}
</script>

<style lang="scss" scoped>
.mhy-account-frame{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    color: #333;
    font-size: 14px;
    z-index: 999;
    overflow: auto;
}
.mhy-account-frame .mhy-account-action-sheet__content{
    position: absolute;
    padding: 0 30px 44px;
    width: 400px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
    background-color: #fff;
    border-radius: 4px;
}
.mhy-account-action-sheet__content .mhy-account-action-sheet__close{
    position: absolute;
    width: 30px;
    height: 30px;
    top: 0;
    right: -40px;
    background-color: #000;
    line-height: 30px;
    text-align: center;
    font-size: 10px;
    border-radius: 100%;
    color: #fff;
    cursor: pointer;
    font-weight: bold;
}
.mhy-init-account-info .mhy-init-account-info__title{
    line-height: 70px;
    font-size: 16px;
    border-bottom: 1px solid #f0f0f0;
    margin-bottom: 34px;
    position: relative;
}
// form表
.mhy-init-account-info .mhy-init-account-info__form{
  color: #9999;
}
.mhy-init-account-info__form .mhy-init-account-info__avatar{
  margin-bottom: 28px;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
}

.mhy-init-account-info__avatar .mhy-avatar{
  width: 92px;
  height: 92px;
  margin-bottom: 16px;
  cursor: pointer;
  display: inline-block;
  position: relative;
}
.mhy-avatar img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid #ebebeb;
  vertical-align: top;
}
.mhy-init-account-info__avatar .mhy-button-default{
  color: #00c3ff;
  line-height: 19px;
  display: inline-block;
  cursor: pointer;
  flex-shrink: 0;
}
// 提示
.mhy-init-account-info__form .mhy-init-account-info__tips{
  position: relative;
  width: 273px;
  background: #ebf7ff;
  border-radius: 4px;
  margin: auto;
  height: 30px;
}
.mhy-init-account-info__tips img{
  position: absolute;
  top: 7px;
  left: 13px;
  width: 15px;
  height: 16px;
  border-style: none;
}
.mhy-init-account-info__tips .mhy-init-account-info__words{
  color: #333;
  font-size: 12px;
  margin-left: 32px;
  line-height: 30px;
}
// input文本框
.mhy-init-account-info__form .mhy-input{
  font-size: 14px;
  position: relative;
  line-height: 18px;
}
.mhy-input .mhy-input__container{
  margin-top: 14px;
  margin-bottom: 63px;
  display: flex;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  position: relative;
  height: 100%;
  transition: .3s border-color;
}
.mhy-input__container input{
  line-height: 44px;
  height: 44px;
  position: relative;
  -webkit-box-flex: 1;
  flex-grow: 1;
  z-index: 2;
  border: none;
  color: #333;
  padding: 0 20px;
  background-color: transparent;
  font-size: inherit;
  outline: none;
}
// 完成按钮
.mhy-button{
  width: 100%;
  line-height: 41px;
  background-color: #00c3ff;
  color: #fff;
  border-radius: 4px;
  display: inline-block;
  cursor: pointer;
  flex-shrink: 0;
}

// 霸王条款
.mhy-checkbox{
  padding-top: 14px;
  position: relative;
}
.mhy-checkbox span{
margin: 0 10px;
}
.mhy-checkbox a{
  color: #00c3ff;
  text-decoration: none;
}

.mhy-button__button{
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
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
.err-text{
  color: red;
  position: absolute;
  top: 50px;
  left: 10px;
  font-size: 12px;
}
.b1{
  position: absolute;
  top: 40px;
  left: 10px;
}
</style>
