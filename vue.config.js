const path = require('path')

const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'production' ? '/view' : '/'
module.exports = {
  lintOnSave: false,
  publicPath: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  // 打包时不生成sourceMap，提高打包速度
  productionSourceMap: false,
  devServer: {
    // /接口 代理到 http://localhost:3000/接口
    // proxy: 'http://localhost:3000'
    // /api开头的请求都会被代理到 http://localhost:3000/api
    // 例如 /api/users 现在会被代理到请求 http://localhost:3000/api/users
    proxy: {
      "/api": {
        target: "http://localhost:3000"
      }
    }
  }
}
