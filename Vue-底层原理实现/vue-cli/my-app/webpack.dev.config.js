const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 提取css的插件 将其和JS分离
// const CopyWebpackPlugin = require('copy-webpack-plugin') // 拷贝assets目录 自动化

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
      },
      {
        test: /\.css$/,
        use: [ // 使用什么转义css 从后到前的编译
          // MiniCssExtractPlugin.loader,
          process.env.NODE_ENV !== 'production' ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192 // 限制url地址长度
          }
        }]
      }
    ]
  },
  plugins: [ // 引入的插件 需要new一下
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({ // 配置模板文件 把打包完的代码直接自动引入当前index.html中
      filename: 'index.html', // 生成的文件名字
      template: path.join(__dirname, './src/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css',
      allChunks: true // 将多个css 合并打包成一个文件
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