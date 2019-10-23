let effectStack = []
let targetMap = new Map() // es5中不可以使用对象作为对象的属性 所以这里使用es6的Map
export function effect(fn) {
  if (effectStack.indexOf(fn) === -1) {
    try {
      effectStack.push(fn)
      fn()
      // fn触发get get里面会触发track
    } finally{
      effectStack.pop()
    }
  }
}

export function track(target, type, key) {
  let effect = effectStack[effectStack.length - 1]
  // 拿到fn
  let dep = targetMap.get(target)
  if (dep === undefined) {
    dep = new Map()
    targetMap.set(target, dep)
  } 
  let depsMap = dep.get(key)
  if (!depsMap) {
    depsMap = new Set()
    dep.set(key, depsMap)
  }
  depsMap.add(effect)
  console.log(targetMap)
}

export function trigger(target, key) {
  const keyDeps = targetMap.get(target)
  if (keyDeps) {
    console.log(keyDeps.get(key))
    let res = keyDeps.get(key) && keyDeps.get(key)
    for (let fn of res) {
      fn && fn()
    }
  }
}
// targetMap结构
// {
      //   origin: {
      //     count: {
      //       fn1
      //       fn2
      //     }
      //     age: {
      //        fn3
      //     }
      //   }
      // }