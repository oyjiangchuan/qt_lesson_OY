// 使用hash
class HashRouter {
  constructor() { // hashchange事件
    // key(/page1) => val (func 由外界传进来)
    this.routers = {}
    window.addEventListener('hashchange', this.Load.bind(this))
  }
  register(hash, callback = function () {}) {
    this.routers[hash] = callback;
  }

  registerNotFound(callback = function () {}) {
    this.routers['404'] = callback
  }

  registerError(callback = function() {}) {
    this.routers['Error'] = callback
  }

  Load() {
    // console.log(this);
    let hash = location.hash.slice(1),
        handler
    // handler处理函数
    // container 显示相应的page内容
    // 由外界决定

    // 仅限对象本身的属性 而不去查找原型链上的属性
    if (!this.routers.hasOwnProperty(hash)) {
      handler = this.routers['404'];
    } else {
      handler = this.routers[hash];
    }
    try {
      handler.apply(this);
    } catch(e) {
      console.error(e);
      (this.routers['error'] || function() {}).call(this, e);
    }
  }
}