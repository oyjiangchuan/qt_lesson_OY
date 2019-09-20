// 代理 浏览器也是代理
var proxy = new Proxy({}, {
  get: function(obj, prop) { // 对象 属性
    console.log('设置get操作')
    return obj[prop]
  },
  set: function(obj, prop, value) {
    console.log('设置set操作')
    obj[prop] = value
  }
})
proxy.time = 35
console.log(proxy)
console.log(proxy.time)