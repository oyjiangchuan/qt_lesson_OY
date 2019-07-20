const fs = require('fs');
//I/O  找文件 读入内存 控制台输出读取内容 callback 
//异步 callback 函数作为callback回调函数时可以为匿名函数，就是没有定义名字的函数，可以不调用就可以执行的
fs.readFile('./index.html', 'utf8', (err,  a) => {
    // if (err) {
    //     console.log(err);
    // } else {
    //     console.log(data);
    // }
    if (!err){
        //console.log(data+'<br>');
        console.log(a);
    }
})//读取文件

