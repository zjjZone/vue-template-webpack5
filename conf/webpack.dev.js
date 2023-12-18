const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config')
const path = require('path')

module.exports = merge(baseConfig, {
  // 开发环境
  mode: 'development',
  // 源码调试
  devtool: 'eval-cheap-module-source-map',
  // 调试服务
  devServer: {
    port: 3000,
    compress: false, // 不压缩，这样热更新，更快
    hot: true, // 热更新
    historyApiFallback: true, // 解决开发环境，history 路由，的 404 问题
    static: {
      // 托管静态资源 public 文件夹
      directory: path.join(__dirname, '../public')
    }
  },
  module: {
    rules: [
      {
        //设置css的解析规则 解析sfc里面的style
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' }
        ]
      }
    ]
  }
})
