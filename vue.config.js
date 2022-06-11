const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/dist',
  transpileDependencies: true,
  // 关闭eslint报错
  lintOnSave: false,
  // 自定义开发服务器
  devServer: {
    open: true,
    host: '127.0.0.1'
  }
})
