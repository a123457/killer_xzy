/*
 * @Company: Inossem
 * @Author: zhanyu
 * @Email: zhanyu.xu@inossem.com
 * @Date: 2020-07-08 23:27:14
 * @LastEditors: zhanyu
 * @LastEditTime: 2020-07-13 21:13:57
 * @Description: description
 */
const path = require('path')
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
    config
      .plugin('vue-skeleton-webpack-plugin')
      .use(SkeletonWebpackPlugin, [{
        webpackConfig: {
          entry: {
            app: path.join(__dirname, './src/views/skeleton/skeleton.ts'),
          },
        },
        minimize: true,
        quiet: true
      }])
  }
}
