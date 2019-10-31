let proto = {}

function defineGetter(prop, name) { // 参数分别是代理的对象和对象上的属性
  proto.__defineGetter__(name, function() { // 每个对象都有一个__defineGetter__的方法 用这个方法来实现代理
    return this[prop][name] // this ===> ctx 所以ctx.url 得到的就是this.request.url
  })
}

function defineSetter(prop, name) {  // 每个对象都有一个__defineSetter__的方法
  proto.__defineSetter__(name, function(val) {
    this[prop][name] = val
  })
}

defineGetter('request', 'url')
defineGetter('request', 'path')

defineGetter('response', 'body') // ctx.body 代理response的body方法 ctx.response.body = ctx.body
defineSetter('response', 'body')
module.exports = proto