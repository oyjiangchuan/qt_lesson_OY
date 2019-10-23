import { track, trigger } from './effect.js'

export function reactive(target) {
  const obderved = new Proxy(target, {
    set: (target, key, receiver) => {
      // 恢复它 '赋值' 的一个行为 反射
      const reslut = Reflect.set(target, key, receiver)
      trigger(target, key) // set设置值之后 重新触发一次get中的依赖
      return reslut
    },
    get: (target, key, recriver) => {
      // mobx库 effect 也有依赖收集
      // 依赖收集
      console.log('依赖收集')
      const res = Reflect.get(target, key, recriver)
      // {
      //   origin: {
      //     count: {
      //       fn1,
      //       fn2
      //     }
      //   }
      // }
      track(target, 'get', key)
      return res
    }
  })
  return obderved
}