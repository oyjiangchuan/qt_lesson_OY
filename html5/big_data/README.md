- 网页上显示大量的HTML也是负担
  http 请求 3000端口  伺服状态 Server
  /  index.html 传输给浏览器 Client
  127.0.0.1 localhost  本地开发
  172.20.10.3 局域网    远程  
  需要浏览器 访问代理Client ip:8080 下载下来(如果时间过长,用户就会不浏览)
  远程 => 服务器(ip,domain) 伺服状态(http) live-server  8080

  分页 ?limit=20&page=1
  html5 来实现

  http 超文本传输协议 
  如果文件太大 分几次，等时间长 对大数据做分页

  http 状态码 304 表示自从上次访问之后文件没有修改，浏览器会缓存文件

- 得益于 es6 Array.from({length: n}, (v, k)=>`新闻${k}`)  前端模拟大数据
- 按页分割  分割好, Array.from({leng: Math.ceil(arr.length/size), (v, k)=> arr.slice(size*i, i*size + size)
        )})
