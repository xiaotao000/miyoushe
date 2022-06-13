import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 全局组件
import LOGON from '@/components/Logon'

import '@/css/iconfont.css'

// 初始化CSS
import 'normalize.css'

// 导入validation验证
import '@/utils/validation'

// 重置CSS
import './styles/reset.scss'

// 全局CSS
import '@/styles/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component('LOGON', LOGON)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
