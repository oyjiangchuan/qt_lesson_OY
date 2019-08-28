const curry = require('./b.js')
function checkByRegExp(reg, string) {
    return reg.test(string)
}
let checkCellPhone = curry(checkByRegExp)(/^1[3-9]\d{9}$/);
console.log(checkCellPhone('13812345621'));
let checkEmail = curry(checkByRegExp)(/^(\w)+(\.\w)*@(\w)+((\.\w+)+)$/);
console.log(checkEmail('923242791@qq.com'))

// console.log(checkByRegExp(/^1[3-9]\d{9}$/, '18619265552'));
// console.log(checkByRegExp(/^(\w)+(\.\w)*@(\w)+((\.\w+)+)$/, '923242791@qq.com')) // 可以匹配((\.\w+)+).com.cn,^ $ 表示匹配开始,结束 *匹配0到多次 +匹配一次到多次 ?匹配0到1次
