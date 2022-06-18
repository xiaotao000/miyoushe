<template>
  <div>
    <div class="nmh">
      <div class="nm">我的发帖</div>
    </div>
    <div class="second" v-for="item in card" :key="item.id">
      <a class="p">{{ item.time }}</a>
      <div class="zore">{{ item.title }}</div>
      <span class="thor" v-html="item.introduce"></span>
      <!-- 发布的图片 -->
      <div class="img3">
        <img v-for="img, i in item.cover" :key="i" :src="`${'http://mui65p.natappfree.cc' + img}`" alt="" />
      </div>
      <div class="topi">
        <!-- 标签 -->
        <div class="topces">
          <span>冒险家·集结</span>
          <span>每日一水</span>
        </div>
        <!-- 小图标 -->
        <div class="page">
          <div class="second-card">
            <i class="el-icon-view"></i>
            <span>{{ !item.browse ? 0: item.browse }}</span>
          </div>
          <div class="second-data">
            <i class="el-icon-chat-dot-round"></i>
            <span>{{ !item.comment ? 0: item.browse }}</span>
          </div>
          <div class="second-data">
            <i class="iconfont iconfont icon-dianzan"></i>
            <span>{{ !item.count ? 0: item.browse }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reWgyh } from '@/api/release'
export default {
  data () {
    return {
      card: []
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    async getList () {
      const add = await reWgyh()
      this.card = add
    }
  }
}
</script>

<style lang="scss" scoped>
.wgFy > p {
  margin-top: 20px;
  color: #999;
  white-space: pre-wrap;
  text-align: center;
  line-height: 24px;
}
.npmIng {
  margin-bottom: -5px;
}
.wgFy {
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.nm {
  margin-left: 30px;
}
.nmh {
  width: 100%;
  line-height: 50px;
  border-bottom: 1px solid #ebebeb;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
}
.img3 {
  display: flex;
  img {
    margin-right: 5px;
    cursor: pointer;
    border-radius: 6px;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
    vertical-align: middle;
  }
}
/* 标签 */
.topces {
  display: flex;
  align-items: center;
  color: #666;
  span {
    height: 24px;
    line-height: 24px;
    background-color: #f5f5f5;
    cursor: pointer;
    padding: 0 12px;
    margin-right: 10px;
    display: inline-block;
    border-radius: 12px;
  }
}
</style>
