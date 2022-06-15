import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    redirect: '/home',
    children: [
      // 首页
      { path: '/home', component: () => import('@/views/home') },
      // 酒馆
      { path: '/pub', component: () => import('@/views/pub') },
      // 攻略
      { path: '/method', component: () => import('@/views/method') },
      // 官方
      { path: '/official', component: () => import('@/views/official') },
      // 同人图
      { path: '/peermap', component: () => import('@/views/PeerMap') },
      // cos
      { path: '/cos', component: () => import('@/views/cos') },
      // 硬核
      { path: '/hardcore', component: () => import('@/views/hardcore') },
      // 发布文章
      { path: '/article', component: () => import('@/views/article') },
      // 发布图片
      { path: '/picture', component: () => import('@/views/picture') },
      // 详情
      { path: '/details', component: () => import('@/views/details') },
      // 个人中心
      {
        path: '/personal',
        component: () => import('@/views/personal'),
        redirect: '/ginhan',
        children: [
          // 我的发帖
          { path: '/ginhan', component: () => import('@/views/personal/persook/ginhan') },
          // 我的评论
          { path: '/bnsen', component: () => import('@/views/personal/persook/bnsen') },
          // 我的收藏
          { path: '/collection', component: () => import('@/views/personal/persook/collection') },
          // 我的粉丝
          { path: '/igent', component: () => import('@/views/personal/persook/igent') },
          // 我的关注
          { path: '/figns', component: () => import('@/views/personal/persook/figns') },
          // 隐私设置
          { path: '/setup', component: () => import('@/views/personal/persook/setup') },
          // 编辑资料
          { path: '/pjns', component: () => import('@/views/personal/persook/pjns') }
        ]
      }
    ]
  },
  {
    path: '/register',
    component: () => import('@/views/register')
  },
  {
    path: '/logon',
    component: () => import('@/views/logon')
  }
]

const router = new VueRouter({
  routes
})

export default router
