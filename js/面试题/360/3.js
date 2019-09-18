const expression = '}}{}{}';
const expressionFalse = '{}{{}';

const isBalanced = (str) => {
  // [{()}]
  // es6 新的数据结构 hashmap 映射
  const map = new Map([ // map初始化方案 [key val]
    ['{', '}'],
    ['[', ']'], 
    ['(', ')']
  ])
  // map.set()
  // console.log(map.get('{'))
  // for (let [key, val] of map) {
  //   console.log(key,val)
  // }
  console.log([...map.values()])
  let stack = []
  for (let i = 0; i < str.length; i++) {
    let node = str[i];
    // 入栈 出栈
    if (map.has(node)) {
      stack.push(node)
    } else if ([...map.values()].includes(node)) { // map.values()返回的可能是一个类数组 使用展开运算符 再在外面套一层[] 再使用includes方法
      // 右边的 values之中的一个 跟栈顶的元素匹配
      let key = stack[stack.length - 1]
      console.log(key)
      if (map.get(key) !== node) {
        return false
      }
      stack.splice(stack.length-1, 1)
    }
  }
  return stack.length === 0
}

console.log(isBalanced(expression))