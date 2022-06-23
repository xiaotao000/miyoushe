<template>
  <div>
    <div class="nmh">
      <div class="nm">我的发帖</div>
    </div>
    <div class="second" v-for="item in card" :key="item.id">
      <a class="p">{{ item.time }}</a>
      <router-link :to="{name: 'details', query: { id: item.id, show: true, category: item.category } }" tag="div" class="zore">{{ item.title }}</router-link>
      <router-link :to="{name: 'details', query: { id: item.id, show: true, category: item.category } }" tag="span" class="thor" v-html="Array.from(item.introduce.replace(/<p><img .*?><\/p>/g, '')).slice(0, 90).join('')"></router-link>
      <!-- 发布的图片 -->
      <router-link :to="{name: 'details', query: { id: item.id, show: true, category: item.category} }" tag="div" class="img3">
        <!--  -->
        <img v-for="img, i in item.cover" :key="i" :src="img.imgUrl.startsWith('http://') ? img.imgUrl : `http://192.168.43.104:3000${img.imgUrl}`" alt="" />
      </router-link>
      <div class="topi">
        <!-- 标签 -->
        <div class="topces" v-if="item.section">
          <span>{{item.section}}</span>
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
  computed: {
    isUrl () {
      return this.card.filter(item => item.cover.includes('http://192.168.43.104:3000'))
    }
  },
  methods: {
    async getList () {
      const add = await reWgyh()
      console.log(add)
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
.second {
  width: 640px;
  border-bottom: 1px solid #ebebeb;
  padding: 24px 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.img3 {
  margin-top: 10px;
  margin-bottom: 10px;
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
