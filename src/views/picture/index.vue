<template>
  <div class="edition">
    <div class="mhy-container">
      <div class="mhy-new-article__header">
        <h1>发布图片</h1>
      </div>
      <div class="mhy-new-article__editor">
        <el-form @submit.native.prevent="submitArticle" action="none" ref="ruleForm" :rules="rules" :label-position="'left'" :model="formData" label-width="100px" class="demo-ruleForm">
          <el-form-item label="标题：" prop="title">
              <el-input style="width: 750px; " v-model="formData.title" type="text" placeholder="标题（必填）" maxlength="30" show-word-limit />
          </el-form-item>
          <el-form-item label="图片介绍：" prop="introduce">
              <el-input style="width: 750px;" class="introduce" v-model="formData.introduce" resize="none" :rows="10" type="textarea" placeholder="请输入图片介绍" maxlength="500" show-word-limit />
          </el-form-item>
          <el-form-item label="上传图片：">
            <el-upload
              action="http://192.168.43.104:3000/api/cover"
              name="cover"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :before-upload="beforeUpload"
              :on-remove="handleRemove"
              :file-list="imgUrlList"
              :on-success="successUpload"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="" />
            </el-dialog>
          </el-form-item>
          <el-form-item label="发布版块："  prop="category">
              <el-radio v-model="formData.category" label="同人图">同人图</el-radio>
              <el-radio v-model="formData.category" label="COS">COS</el-radio>
          </el-form-item>
          <el-form-item label="话题：" prop="section">
              <el-input v-model="formData.section" placeholder="请输入话题" maxlength="30" show-word-limit></el-input>
          </el-form-item>
          <el-form-item style="text-align: center;">
              <button type="submit" class="submit-button">发布</button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { reqAddPicture, reqUpdatePicture } from '@/api/article'
import { getDetailsList } from '@/api/home'

export default {
  name: 'AddPicture',
  data () {
    return {
      formData: {
        cover: []
      },
      fileList: [],
      dialogImageUrl: '',
      dialogVisible: false,
      imgUrlList: [],
      rules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' }
        ],
        introduce: [
          { required: true, message: '请输入内容', trigger: 'blur' }
        ],
        category: [
          { required: true, message: '请选择版块', trigger: 'blur' }
        ],
        section: [
          { required: true, message: '请输入话题', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    this.getArticle()
  },
  methods: {
    async getArticle () {
      if (!this.$route.query.id) return
      const res = await getDetailsList({ id: this.$route.query.id })
      const arr = res.map(item => ({ id: item.id, title: item.title, introduce: item.introduce, cover: item.cover, category: item.category, section: item.section }))
      this.formData = arr[0]
      console.log(arr[0].cover)
      arr[0].cover.forEach(item => {
        if (item.imgUrl.indexOf('http://192.168.43.104:3000')) {
          this.imgUrlList.push({ url: 'http://192.168.43.104:3000' + item.imgUrl })
        } else {
          this.imgUrlList.push({ url: item.imgUrl })
        }
      })
    },
    successUpload (res, file, fileList) {
      this.fileList = fileList
    },
    // 删除图片
    handleRemove (file, fileList) {
      this.imgUrlList = fileList
    },
    // 预览图
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    // 校验规则
    beforeUpload (file) {
      console.log(file)
      const { type, size } = file
      if (type !== 'image/jpeg' && type !== 'image/png') {
        this.$message.error('文件必须为JPEG | PNG')
        return false
      }
      if (size / 1024 / 1024 > 2) {
        this.$message.error('文件不能大于2MB')
        return false
      }
    },
    async submitArticle () {
      console.log(111)
      try {
        await this.$refs.ruleForm.validate()
        this.formData.cover = this.fileList.map(item => ({ imageName: item.name, imgUrl: (item.response && item.response.data[0].imgUrl) || item.url }))
        this.formData.id ? await reqUpdatePicture(this.formData) : await reqAddPicture(this.formData)
        this.$router.push('/home')
        this.$message.success('发布成功！！！')
        Object.assign(this.$data, this.$options.data())
        this.$nextTick(() => {
          this.$refs.ruleForm.clearValidate()
        })
      } catch (error) {
        console.log('添加失败！！', error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.mhy-container {
  margin-top: 30px;
  margin-bottom: 60px;
  background-color: #fff;
  border-radius: 4px;
  .mhy-new-article__header {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #f0f0f0;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      font-size: 16px;
      font-weight: 600;
    }
  }
  .mhy-new-article__editor {
    width: auto;
    padding: 50px 80px 40px;
    ::v-deep .demo-ruleForm {
      .introduce .el-input__inner {
        height: 300px;
      }
      .introduce .el-input__count {
        margin-top: 180px;
      }
    }
      .submit-button {
        width: 190px;
        height: 42px;
        margin: 0 auto;
        text-align: center;
        cursor: pointer;
        border: 0;
        outline: 0;
        background-color: #00c3ff;
        color: #fff;
        border-radius: 4px;
      }
  }
}
</style>
