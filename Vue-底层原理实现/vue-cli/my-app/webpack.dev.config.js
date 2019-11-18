const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = { // module.exports导出
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/, /* 匹配的文件项 */
        loader: 'babel-loader', /* 解析器 */
        exclude: /node_modules/  /* exclude代表不解析的文件 */
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [ // 引入的插件 需要new一下
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({ // 配置模板文件 把打包完的代码直接自动引入当前index.html中
      filename: 'index.html', // 生成的文件名字
      template: path.join(__dirname, './src/index.html')
    })
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js' // 配置代码跑compiler模式(编译时的) 还有runtime模式(运行时的)
    }
  },
  devServer: { // devServer启用web服务
    contentBase: path.join(__dirname, "./dist"),
    port: "8080",
    open: true, // 自动打开浏览器
    hot: true // 启动devServer热更新功能 自动更新 不用手动更新
  }
}