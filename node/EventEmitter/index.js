const Event = require('events'); // 内置的events模块
const request = require('request'); // npm i request -S(安装了一个请求包模块)
const inquirer = require('inquirer'); // (安装了一个模块)
const fs = require('fs'); // 文件模块
const ev = new Event();
ev.on('choose', function(songs, keywords) {
     // 命令行的交互
     inquirer.prompt([{
         type: 'list',
         name: 'song',
         message: `共${songs.length}首, 回车选择`,
         choices: songs.map((s, i) => {
             return `${i}:${s.name}`
         })
     }]).then(choices => {
        //  console.log(choices) // { song: '0:老男孩 (live)' } 这里song来自配置的name属性
        const { song } = choices;
        const index = parseInt(song.split(':')[0]);
        const selected = songs[index]
        // console.log(selected) // 打印出songs索引中歌曲的正确信息
        const { id } = selected;
        request({
            url: `http://neteasecloudmusicapi.zhaoboy.com/song/url?id=${id}`,
            json: true
        }, (err, res, body) => {
            // console.log(body); 这里请求回来的数据是对象
            const { url } = body.data[0];
            if (!url) {
                console.log('没有找到该歌曲')
                return;
            }
            request(url).pipe(fs.createWriteStream(`${decodeURIComponent(keywords)}.mp3`)) // 下载歌曲
        })
     })
})
ev.on('search', function(keywords) { // 先订阅
    // 请求 搜索结果 下一步 选择
    keywords = encodeURIComponent(keywords); // 对搜索的结果做一次编码
    request({
        url: `http://neteasecloudmusicapi.zhaoboy.com/search?keywords=${keywords}`,
        json: true
    }, (err, res, body) => {
        // console.log('请求信息', err);
        // console.log(body) 这里请求回来的是一个对象{ result: { songs: [ {}, {}, {} ... ] }
        if (body.result.songs && body.result) {
            ev.emit('choose', body.result.songs, keywords)
        } else {
            console.log(`没有${keywords}的信息`)
        }
    })
})
function main() {
    const argv = process.argv.slice(2);
    const keywords = argv[0];
     // 搜索 选择 播放
     ev.emit('search', keywords);
}
main();
