function cloneShallow(source) { // 简单版本的深拷贝 当对象中没有对象时
  var target = {}
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      target[key] = source[key]
    }
  }
  return target
}

function cloneDeep(source) { // 1版本的深拷贝 数组的情况没有考虑到
  var target = {}
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (typeof source[key] === 'object') {
        target[key] = cloneShallow(source[key])
      } else {
        target[key] = source[key]
      }
    }
  }
  return target
}

function cloneDeep2(source) { // 2版本的深拷贝 null symbal 无法拷贝
  if (typeof source !== 'object') return source

  var target = Array.isArray(source) ? [] : {}

  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (typeof source[key] === 'object') {
        target[key] = cloneShallow(source[key])
      } else {
        target[key] = source[key]
      }
    }
  }
  return target
}

function cloneDeep3(x) { // 3版本的深拷贝用栈的方法实现 null symbal 无法拷贝
  const root = {}

  // 栈
  const loopList = [
    {
      parent: root,
      key: undefined,
      data: x
    }
  ]

  while (loopList.length) {
    // 广度优先
    const node = loopList.pop() // 出栈
    const parent = node.parent
    const key = node.key
    const data = node.data

    // 初始化赋值目标 key为undefined 则拷贝到父元素 否则拷贝到子元素
    let res = parent
    if (typeof key !== 'undefined') {
      res = parent[key] = {}
    }

    for (let k in data) {
      if (data.hasOwnProperty(k)) {
        if (typeof data[k] === 'object') {
          // 下一次循环 压栈
          loopList.push({
            parent: res,
            key: k,
            data: data[k]
          })
        } else {
          res[k] = data[k]
        }
      }
    }
  }
  return root
}

let a = {
  name: 'OY',
  book: {
    title: 'I like JS',
    price: '45'
  }
}

let b = cloneDeep3(a)

console.log(b)