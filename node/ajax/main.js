// live-server
// index.html http 访问的支持 web server
const http = require('http');
const fs = require('fs');
const index = fs.createReadStream('./index.html')
// web server 一直伺服的 某个端口
// 向request 返回response资源 req请求的用户信息  res返回的信息 createServer() 创建一个web server
const server = http.createServer((req, res) => {
    // res.end('hello world hahah');
    // index.html 显示出来 
    // req 浏览器 访问网站的代理
    if (req.url == '/') { // 这里'/'代表的是根目录1314端口
        index.pipe(res)
        // res.end('index page')
    } else if (req.url == '/userinfo') {
        const info = {
            "name": "徐佳影",
            "desc": "身骑白马"
        }
        res.writeHead(200, {
            'Content-Type': 'text/plain;charset=utf8'
        })
        res.end(JSON.stringify(info));
    }
    else {
        res.end('hello world')
    }

})
server.listen(1314)