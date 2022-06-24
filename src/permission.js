// permission 验证用户是否登录
import router from '@/router'
import store from '@/store'

// 路由前置守卫
// A -> B
// to   进入的路由对象
// from 离开的路由对象
// next 控制跳转
router.beforeEach(async (to, from, next) => {
  // token  ->  后端返回【登录后】给前端的用户凭证 【用于给后端判断当前是哪个用户】
  // 前端在获取token后  后续请求需要将token携带【headers】传给后端
  const token = store.state.user.token
  // 判断是否有token
  if (token) {
    // 判断当前路由是否为登录
    if (to.path === '/logon') {
      next('/')
    } else {
      // 有token 验证是否有用户信息
      if (!store.state.user.userInfo.avatar) {
        try {
          // 重新拉取用户信息【派发action】
          await store.dispatch('user/getUserInfo')
          next()
        } catch (error) {
          // token错误或者过期
          // 清理token
          store.commit('user/REMOVE_TOKEN')
          // 跳转到登录
          next('/login?redirect=' + to.path)
        }
      } else {
        next()
      }
    }
  } else {
    // 无token 验证当前路由是否需要权限
    if (to.path === '/pjns' || to.path === '/ginhan' || to.path === '/bnsen' || to.path === '/collection' || to.path === '/igent' || to.path === '/figns' || to.path === '/setup' || to.path === '/picture' || to.path === '/article' || to.path === '/details') {
      next('/logon')
    } else {
      next()
    }
  }
})
