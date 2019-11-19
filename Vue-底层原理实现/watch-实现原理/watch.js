class watcher {
  constructor (opts) {
    this.$data = this.getBaseType(opts.data) === 'Object' ? opts.data : {}
    this.$watch = this.getBaseType(opts.watch) === 'Object' ? opts.watch : {}
    for (let key in opts.data) {
      this.setData(key)
    }
  }
  setData (_key, _val) {
    Object.defineProperty(this, _key, { // this将此刻上下文的执行交给应用对象 把上下文指向当前的对象
      get: function() {
        return this.$data[_key]
      },
      set: function(val) { // 数据源中data被Object.defineProperty监听, 当data数据发生改变的时, 调用执行放在set中的watch方法的  watch中的方法是放在set中
        const oldValue = this.$data[_key] // 保存一下旧值
        if (oldValue === val) return val
        this.$data[_key] = val
        this.$watch[_key] && typeof this.$watch[_key] === 'function' && ( this.$watch[_key].call(this, val, oldValue))
        console.log(this)
        return val
      }
    }) 
  }
  getBaseType (target) {
    const typeStr = Object.prototype.toString.call(target)
    return typeStr.slice(8, -1)
  }
}


let vm = new watcher({
  data: {
    a: 0,
    b: 'hello world'
  },
  watch: {
    a (newValue, oldValue) {
      console.log(newValue, oldValue)
    }
  }
})

setTimeout(() => {
  vm.a = 1
}, 1000)

