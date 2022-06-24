<template>
  <div class="layout-view">
    <AppHeader />
    <router-view></router-view>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import { mapState } from 'vuex'

export default {
  name: 'Layout',
  components: { AppHeader, AppFooter },
  computed: {
    ...mapState('user', ['userInfo'])
  },
  mounted () {
    this.$store.dispatch('user/getUserInfo')
    console.log(111)
    if (this.userInfo.is_delete === 1) {
      this.$store.dispatch('user/logout')
      this.$message.error('你的账号已被封禁')
    }
  }
}
</script>

<style lang="scss" scoped>
.layout-view{
  padding-top: 62px;
}
</style>
