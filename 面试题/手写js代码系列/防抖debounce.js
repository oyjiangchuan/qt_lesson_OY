const debounce = (fn, delay) => { // 不停下来就不会发送请求
  let timer = null
  return (...args) => {
    clearInterval(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}


function debounceOne(fn, delay) {
  let timer = null
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}


function throttle(fn, delay) {
  let flag = true
  return (...args) => {
    if (!flag) return
    flag = false
    setTimeout(() => {
      fn.apply(this, args)
      flag = true // 一定是执行完之后在赋值 如果没有执行完 再次点击 就不会发生下面的函数执行
    }, delay)
  }
}