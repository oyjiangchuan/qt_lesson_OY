函数柯里化

编写函数 校验电话号码, 邮箱

通用函数有好处  接受n个参数 每次返回一个函数
可以裂变吗？
checkCellPhone = checkByRegExp(/^1[3-9]\d{9}$/)
checkEmail = checkByRegExp(/^(\w)+(\.\w)*@(\w)+((\.\w+)+)$/)

checkCellPhone('18312131256');
函数式编程

返回函数, 每次只接受一个参数
返回的函数运行 闭包可以得到最初参数的数量 当运行到最后的参数时 就运行完成 否则继续返回函数 

函数柯里化的过程就是分函数收集参数的过程
return function() {} 产生闭包 fn.length fn 闭合
require + module.exports es5模块化方案