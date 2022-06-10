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
      { path: '/hardcore', component: () => import('@/views/hardcore') }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
