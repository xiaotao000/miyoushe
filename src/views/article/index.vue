<template>
  <div class="edition">
    <div class="mhy-container">
      <div class="mhy-new-article__header">
        <h1>发布帖子</h1>
      </div>
      <div class="mhy-new-article__editor">
        <el-form
          @submit.native.prevent="submitArticle"
          action="none"
          ref="ruleForm"
          :rules="rules"
          :label-position="'left'"
          :model="formData"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="标题：" prop="title">
            <el-input
              style="width: 750px"
              v-model="formData.title"
              type="text"
              placeholder="标题（必填）"
              maxlength="30"
              show-word-limit
            />
          </el-form-item>
          <el-form-item label="内容：" prop="introduce">
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4 }"
              placeholder="请输入内容"
              v-model="formData.introduce"
            />
          </el-form-item>
          <el-form-item label="封面图">
            <el-upload
              action="1"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :auto-upload="false"
              :before-upload="beforeUpload"
              :on-remove="handleRemove"
              :on-change="fileList"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="" />
            </el-dialog>
          </el-form-item>
          <el-form-item label="发布版块：" prop="category">
            <el-radio v-model="formData.category" label="酒馆">酒馆</el-radio>
            <el-radio v-model="formData.category" label="攻略">攻略</el-radio>
            <el-radio v-model="formData.category" label="硬核">硬核</el-radio>
          </el-form-item>
          <el-form-item label="话题：" prop="section">
            <el-input
              v-model="formData.section"
              placeholder="请输入话题"
            ></el-input>
          </el-form-item>
          <el-form-item style="text-align: center">
            <button type="submit" class="submit-button">发布</button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import { reqAddArticle } from '@/api/article'
export default {
  name: 'AddArticle',
  data () {
    return {
      formData: {
        cover: []
      },
      dialogImageUrl: '',
      dialogVisible: false,
      imgUrlList: [],
      rules: {
        title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
        introduce: [{ required: true, message: '请输入内容', trigger: 'blur' }],
        category: [{ required: true, message: '请选择版块', trigger: 'blur' }],
        section: [{ required: true, message: '请输入话题', trigger: 'blur' }]
      }
    }
  },
  methods: {
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
    // 已上传文件
    fileList (file, fileList) {
      this.imgUrlList = fileList
      this.formData.cover = fileList
    },
    async submitArticle () {
      try {
        await this.$refs.ruleForm.validate()
        const formData = this.getFormData(this.formData)
        this.formData.cover.forEach((item) => {
          formData.append('cover', item.raw)
        })

        await reqAddArticle(formData)
        this.$message.success('发布成功！！！')
      } catch (error) {
        console.log('添加失败！！', error)
      }
    },
    getFormData (object) {
      const formData = new FormData()
      Object.keys(object).forEach((key) => {
        const value = object[key]
        if (Array.isArray(value)) {
          // value.forEach((subValue, i) =>
          //   formData.append(key + `[${i}]`, subValue)
          // )
        } else {
          formData.append(key, object[key])
        }
      })
      return formData
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
        border-radius: 4px;    }
  }
}
</style>
