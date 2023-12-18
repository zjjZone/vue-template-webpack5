const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(baseConfig, {
  // 开发环境
  mode: 'production',
  optimization: {
    // 配合mode 和 esm 开启treeshaking
    usedExports: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    // 代替style-loader，单独抽离css
    new MiniCssExtractPlugin({ 
      filename: 'static/css/[name].[contenthash:4].css'
    })
  ]
})
