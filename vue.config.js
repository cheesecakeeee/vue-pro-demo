const path = require('path')

const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'production' ? '/view' : '/'
module.exports = {
  lintOnSave: false,
  publicPath: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('components'))
  },
  // 打包时不生成sourceMap，提高打包速度
  productionSourceMap: false,
  devServer: {
    proxy: 'http://localhost:3000'
  }
}
