<template>
  <div>
    <div class="nmh">
      <div class="nm">编辑资料</div>
    </div>
    <div class="kmAdd">
      <!-- 头像 -->
      <div class="taoTuo">
         <el-upload
           class="avatar-uploader"
           action="http://172.17.24.16:3000/my/update/avatar"
           :show-file-list="false"
           :headers="myHeaders"
           name="avatar"
           >
          <div class="mhy-avatar">
             <!-- 头像 -->
            <img  :src="imgUrl" alt="">
          </div>
        </el-upload>
        <p>修改头像</p>
      </div>
      <ValidationObserver ref="form">
        <form @submit.prevent="submitForm">
            <!-- 姓名 -->
          <div class="name">
            <ValidationProvider  name="name" rules="required|min:3|max:20" v-slot="{ errors }">
              <div class="srKxa">
                  <div class="nte">片名</div>
                  <el-input type="text"  placeholder="请输入昵称"  v-model="formInput.nickname" maxlength="8" show-word-limit></el-input>
                  <span class="error_text">{{errors[0]}}</span>
              </div>
            </ValidationProvider>
            <div class="srKxaTao">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAvBJREFUOE+1VEtPU1EQnjk9914efUAUKhq3usCAtBQqiKJsCBrjih9gYkjcuHJlIo0rI4lrTXysdMHeEI1peRUoFAkQnqWAilBaCihgaeGeMZeIseX2svIsz/nmmzPzzXwIOicYDErxZLJQUrnLJEGlICghIitD2BICVkFgAFUcjsUW15ubm1OZFPjvBRGhzx88B6g2MMRqADLrJT24I9gBoCFB/GP3p/chj8cjDrFppD2BQLm6Dy0AVAQILCvhnwciIASMgoRv6quqhtJItR/2Dg6WqSo8BCBTJpkiKzKXJJ5IJJJCqOrRZKgyND2pcztHEJEOfurtHTrPUNwHJHtmAOcSd5SV1uXIsnU1Gg/NzIcn9SogoA0SvO36ZdcMaqL8TO7fZQDX9ErOzzfnVZaVNmpEO78SseDoWI8uKQERgBdTidf4we8vVpC3ZRNFUXJkt6P8pka0tb0d+Tw+0Ze917it0v4j9HYHbjBOd7IBERlecbtuAwBubP74NjY1/VcQvRgh6C129QdaiajMSOm6atctxhhfi2+EJ2ZnR42wRDCJvr7Ac9RGyODUupyNnPO8lWhsZjY8P2GEFQRx9PoH3jEExQhY5bjYkKsotqXlyHj4y5eQ8fxiEjv7Bl4AwEkjYMWF0ktWi7lkbvHr4PeVlSXj8mkdvb0DjxmDUiOgzWK12otOnF5cWp5PpZJHdj0tlnD6WPW1AIvFarbk59rW4hvR1F5qz7Cnmvo+3+AplMVTQMjPBnY7KhokiedGorFwaGFxyshkkGMrtre3y8VnzrYQ4FVESDMYLVib01qXo5ExJsfi6wtTobmxbBuFQF0y0stjd18jKLQVFFotZtvqWjyyu5vYPXb3NYDH42H1TU1O2KcHei5lPEKgLb1Ajs86OzoCmq+mldvdH3SotHcPCAv0WpFJrvkpIG2iib2qr67uP3z//85/mMnn8+UIWbYjMSciVhCAnSGaicQOAosKEsMmiY1IqhqpqalJZFbwG5VxaDfsqZLPAAAAAElFTkSuQmCC" alt="">
              <span>需要消耗--修改米游币，--修改--次</span>
              <span class="plo">《查看修改规则》</span>
            </div>
            <div class="srKxa">
              <div class="nte">性别</div>
              <div>
                <template>
                  <div class="lft">
                    <el-radio class="mhy-radio__icon" v-model="formInput.gender" label="男">男</el-radio>
                  </div>
                  <div class="lft">
                    <el-radio class="mhy-radio__icon" v-model="formInput.gender" label="女">女</el-radio>
                  </div>
                  <div class="lft">
                    <el-radio class="mhy-radio__icon" v-model="formInput.gender" label="保密">保密</el-radio>
                  </div>
                </template>
              </div>
            </div>
            <div class="srKxa">
              <div class="nte">个性签名</div>
              <div style="margin: 20px 0;"></div>
              <el-input type="textarea"  placeholder="请输入更新签名"  v-model="formInput.autograph" maxlength="84"  show-word-limit></el-input>
            </div>
          </div>
          <div class="nmpi">
            <el-button type="textarea" @click="submitForm">保存</el-button>
            </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { mapState } from 'vuex'
import { GET_TOKEN } from '@/utils/userToken'
import { setData } from '@/api/user'
const token = GET_TOKEN()
export default {
  data () {
    return {
      IsDialog: true,
      formInput: {
        gender: '保密'
      },
      imgSrc: 'https://img-static.mihoyo.com/communityweb/upload/c9d11674eac7631d2210a1ba20799958.png',
      myHeaders: { authorization: 'Bearer ' + token }
    }
  },
  components: { ValidationProvider, ValidationObserver },
  computed: {
    ...mapState('user', ['userInfo']),
    imgUrl () {
      return this.userInfo.avatar ? 'http://172.17.24.14:3000' + this.userInfo.avatar : this.imgSrc
    },
    Ckname () {
      return this.formInput.nickname ? this.formInput.nickname : this.userInfo.nickname
    },
    Ckautograph () {
      return this.formInput.autograph ? this.formInput.autograph : this.userInfo.autograph
    },
    Ckgender () {
      return this.formInput.gender ? this.formInput.gender : this.userInfo.gender
    }
  },
  mounted () {
    this.formInput = { ...this.userInfo }
    console.log(this.myHeaders)
  },
  methods: {
    async submitForm () {
      const success = await this.$refs.form.validate()
      console.log(success)
      if (!success) return
      try {
        await setData({ nickname: this.Ckname, autograph: this.Ckautograph, gender: this.Ckgender })
        this.$message.success('修改成功')
        this.$store.dispatch('user/getUserInfo')
      } catch (error) {
        this.$message.error('修改成功')
      }
    }
  }
}
</script>

<style scoped>
::v-deep .el-button--primary{
  background: #ffffff;
  width: 113px;
}
.nmpi{
  text-align: center;
  margin-top: 30px;
}
::v-deep .el-textarea__inner{
    height: 84px;
}
.lft{
  margin-right: 30px;
  display: inline-block;
  cursor: pointer;
}
.mhy-radio__icon {
    display: inline-block;
    height: 14px;
    width: 14px;
    /* border: 1px solid #b2b2b2; */
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 100%;
    margin-right: 8px;
    vertical-align: -0.15em;
}
.mhy-radio--active {
    border: 4px solid #00c3ff;
}
.plo{
  margin-left: 4px;
  cursor: pointer;
  color: #00b2ff;
}
.srKxaTao>img{
  margin-right: 6px;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
}
.nte{
  width: 60px;
    text-align: right;
    color: #999;
    margin-right: 30px;
}
.srKxaTao{
  color: #999;
    line-height: 16px;
    font-size: 12px;
    margin: 8px 0 21px 91px;
    display: flex;
    align-items: center;
}
.srKxa{
  display: flex;
  margin-bottom: 25px;
  position: relative;
}
.srKxa span{
  position: absolute;
  top: 35px;
  color: red;
  left: 90px;
}
.name{
  line-height: 44px;
    overflow: hidden;
}
.taoTuo>p{
  cursor: pointer;
    color: #00c3ff;
    font-size: 12px;
}
.mhy-avatar img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid #ebebeb;
  vertical-align: top;
}
.mhy-avatar{
  cursor: pointer;
    width: 120px;
    height: 120px;
    margin-bottom: 23px;
}
.taoTuo{
  position: relative;
    text-align: center;
    width: 120px;
    margin: 0 auto 23px;
}
.kmAdd{
  padding: 40px 30px 100px;
}
.nm{
margin-left: 30px;
}
.nmh{
  width: 100%;
    line-height: 50px;
    border-bottom: 1px solid #ebebeb;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
}
</style>
