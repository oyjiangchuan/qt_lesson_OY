const Event = require('events');
const https = require('https');
const ev = new Event();
ev.on('event1', () => {
    console.log('a')
})
ev.on('event2', () => {
    console.log('b')
})
ev.emit('event2')
https.get('https://juejin.im/user/574d2f2a2e958a00693487b0', function(res) {
    console.log(res)
    res.on('data', (c) => {
        console.log('c', c)
    })
})