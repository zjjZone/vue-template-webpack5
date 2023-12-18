const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: './src/main.js', //打包的入口
  //设置打包的出口
  output: {
    path: path.resolve(__dirname, '../dist'),
    // 每个输出的 js 的名称
    // hash, contentHash, chunkHash
    filename: 'static/js/[name].[fullhash].js',
    // webpack5 内置，构建前删除一下 dist.
    // webpack4 没有，clean-webpack-plugin.
    clean: true
  },
  //设置别名
  resolve: {
    alias: {
      '@': path.join(__dirname, '../src')
    }
  },

  //添加模块
  module: {
    rules: [
      {
        //设置.vue文件的解析规则
        test: /\.vue$/,
        loader: 'vue-loader'
      }
      // {
      //   //设置加载图片资源的规则
      //   test: /\.(png|jpe?g|gif)$/i,
      //   type: 'asset/resource'
      // }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      // 就是把我们的js和css 注入到一个 html 的模板里
      template: path.resolve(__dirname, '../public/index.html'),
      // 自动注入资源文件
      inject: true
    }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      // 是否开启 options API，学习Vue3之后我们知道，以前我们学习vue主要是options语法，Vue3新增了setup语法（推荐）。
      __VUE_PROD_DEVTOOLS__: false
      // 生产环境是否支持DEVTOOLS
    })
  ]
}
