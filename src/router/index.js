import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) return savedPosition
    return { x: 0, y: 0, behavior: 'smooth' }
  }
})

const vPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location, cb1, cb2) {
  if (cb1 || cb2) return vPush.call(this, location, cb1, cb2)
  return vPush.call(this, location, () => {})
}

export default router
