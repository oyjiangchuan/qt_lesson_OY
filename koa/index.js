// 前端处理异步 回调 => promise => generator => async 定义函数的关键词 和function一样 在async定义的函数中可以使用await
// async () => {
//   let a = await Promise() // 接 Promise
//   a resolve
// }

const Koa = require('koa')
const KoaBody = require('koa-body')
const fs = require('fs')
const { promisify } = require('util')
const path = require('path')
const app = new Koa()

app.use(KoaBody({
  multipart: true, // 表单编码
  formidable: {
    maxFieldsSize: 200 * 1024 * 1024,
    keepExtensions: true,
    uploadDir: path.join(__dirname, '/static/images')
  }
}))
app.use(async (ctx, next) => {
  // 访问http://localhost:3000/  先上传文件的表单
  // http://localhost:3000/upload 提交表单upload 同时处理表单
  const method = ctx.method
  const path = ctx.path
  console.log(method, path)
  if (method === 'GET' && path === '/') {
    ctx.body = `
    <form action="/upload" enctype="multipart/form-data" method="POST">
      <input type="file" name="avatar"/>
      <input type="submit" value="提交" />
    </form>
    `
  } else if (method === 'POST' && path === '/upload') {
    console.log(ctx.request.files) //undefined koa没有封装对文件的处理 
    // 安装cnpm i koa-body -S 第三方中间件
    const readdir = promisify(fs.readdir) // 把不是promise的转化为promise
    const files = await readdir('./static/images', 'utf8') // 读取文件名
    const htmlTemplate = files.map(file => {
      return `
      <li>
        <a href="/images/${file}">${file}</a>
      </li>`
    }).join('')
    ctx.body = htmlTemplate
    
  }
})


app.listen(3000, () => {
  console.log('服务已启动在3000端口')
})