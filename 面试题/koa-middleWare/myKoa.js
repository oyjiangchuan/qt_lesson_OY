class MyKoa {
  constructor() {
    this.middleWare = []
  }
  use(fn) {
    this.middleWare.push(fn)
    return this; // 就可以实现链式调用
  }

  run() {
    // application、compose:中间件、
    const dispatch = (i) => {
      let fn = this.middleWare[i]
      if (!fn) return Promise.resolve()
      // fn 就是use 进来的函数 ctx next

      // 第一个版本
      // fn({ ctx }, () => {
      //   // next 的代码
      //   // 把剩余的中间件都调用
      //   return dispatch(i + 1)
      // })

      // 第二个版本，考虑到await后面跟promise
      return Promise.resolve(fn({ ctx: 'ctx' }, () => {
        // next 的代码
        // 把剩余的中间件都调用
        return dispatch(i + 1)
      }))
    }
    dispatch(0)
  }
}

module.exports =  MyKoa;