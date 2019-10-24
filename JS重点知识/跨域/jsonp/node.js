// jsonp解决跨域请求的思想
//   1. script标签支持跨域请求资源
//   2. script标签会将请求回来的资源当成js来执行

const http = require('http')

http.createServer((req, res) => {
  const url = require('url').parse(req.url)
  if (url.pathname === '/api/books') {
    const methodName = url.query && url.query.split('=')[1]; // 拿到前端传来的方法名
    console.log(methodName)
    let list = [{book: 'book1'}, {book: 'book2'}]
    res.end(`${methodName}(${JSON.stringify(list)})`)
  }
}).listen(3000, () => {
  console.log('server is running http://localhost:3000')
})