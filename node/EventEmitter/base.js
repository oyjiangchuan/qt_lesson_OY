const Event = require('events');
const ev = new Event();

// on订阅者
// function price1() {
//     console.log('大米涨价了');
// }
// function price2(thing) {
//     console.log(`${thing}涨价了`)
// }
// ev.on('price', price1); 
// ev.on('price', price2);
// // emit发布者
// // ev.emit('price', '大蒜')
// ev.removeListener('price', price1) // 订阅者移除price事件
// ev.emit('price', '大蒜')

// once指订阅一次,emit一次之后就不会再执行了
ev.once('eat', () => {
    console.log('eat1')
})
ev.once('eat', () => {
    console.log('eat2')
})
ev.emit('eat'); // eat1 eat2
ev.emit('eat'); // 这里无效