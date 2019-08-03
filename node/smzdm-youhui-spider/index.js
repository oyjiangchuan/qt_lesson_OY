const https = require('https');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path'); //模块提供用于处理文件路径和目录路径的实用工具
// GET(获取数据) POST
https.get('https://www.smzdm.com/youhui/', function(res) { // 回调
    res.setEncoding('utf-8');
    let html = '';
    res.on('data', function(chunk) { // 当收到一小块数据时执行的函数
        html += chunk;
    })
    res.on('end', function(chunk) { // 当数据数据接收完毕时执行的函数
        const $ = cheerio.load(html, {
            decodeEntities: false // 不解析entity
        })

        let lists = [];
        // 只有一个参数 整个 documen
        $('.list.list_preferential').each(function() {
            const _this = this;
            let title = $('.itemName a', _this).text();
            const price = $('.red', _this).text();
            const img = $('.picLeft img', _this).attr('src');
            // console.log({title: title});
            // console.log({price: price});
            lists.push({
                title: title,
                price,
                img
            })
            saveImage('./img/', img);
        })
        saveList('./data/lists.json', lists)
    })
})

function saveImage(imgDiv, imgUrl) {
    https.get(imgUrl, (res) => {
        res.setEncoding('binary'); // 二进制编码
        // var data = '';
        const imgName = path.basename(imgUrl); // path.basename() 方法返回 path 的最后一部分，类似于 Unix 的 basename 命令。 尾部的目录分隔符将被忽略
        res.pipe(fs.createWriteStream(imgDiv + imgName, 'binary'))
    //     res.on('data', (chunk) => {
    //         data += chunk;
    //     })
    //     res.on('end', function() {
    //         // a.png
    //         const imgName = path.basename(imgUrl);
    //         fs.writeFile(imgDiv + imgName, data, 'binary', (err) => {
    //             if (!err) {
    //                 console.log('img saved')
    //             }
    //         })
    //     })
    })
}

function saveList(path, list) {
    fs.writeFile(path, JSON.stringify(list), (err) => {
        if (!err) {
            console.log('lists saved')
        }
    })
}

