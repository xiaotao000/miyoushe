<template>
  <div>
    <div class="nmh">
      <div class="nm">我的发帖</div>
    </div>
      <div class="second" v-for="item in card" :key="item.id">
        <a class="p">{{item.time}}</a>
        <div class="zore">{{item.title}}</div>
        <span class="thor"
          >{{item.introduce}}</span>
        <!-- 发布的图片 -->
        <div class="img3">
          <div class="cobo" v-for="img,i in item.cover" :key="i">
            <img :src="`${'http://mys.flycran.xyz'+ img}`" alt="">
          </div>
        </div>
        <div class="topi">
          <!-- 标签 -->
          <div class="topces">
            <div class="topc">
              <span>冒险家·集结</span>
            </div>
            <div class="topc">
              <span>每日一水</span>
            </div>
          </div>
          <!-- 小图标 -->
        <div class="page">
          <div class="second-card">
            <i class="el-icon-view"></i>
            <span>{{item.browse}}</span>
          </div>
          <div class="second-data">
            <i class="el-icon-chat-dot-round"></i>
            <span>3134</span>
          </div>
          <div class="second-data">
            <i class="iconfont iconfont icon-dianzan"></i>
            <span>126</span>
          </div>
        </div>
        </div>
      </div>
    </div>
</template>

<script>
import  { reWgyh} from '@/api/release'
export default {
data(){
  return{
    card:[]
  }
},
mounted(){
  this.getList()
},
methods:{
    async getList (){
      const add = await reWgyh()
      this.card = add
}
}
}
</script>

<style scoped>
.wgFy>p{
  margin-top: 20px;
    color: #999;
    white-space: pre-wrap;
    text-align: center;
    line-height: 24px;
}
.npmIng{
  margin-bottom: -5px;
}
.wgFy{
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
