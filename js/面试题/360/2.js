const expression = '{{}}{}{}';
const expressionFalse = '{}{{}';
function isBalanced(exp) {
  // 数组是用于实现栈或者队列是最便宜的 连续的
  let info = exp.split(''),
      stack = [] // push pop 实现栈

  console.log(info)
  for (let i = 0; i < info.length; i++) {
    let el = info[i];
    if (el == '{') {
      stack.push(el)
    } else if (el == '}') {
      if (stack.length === 0) {
        return false
      }
      stack.pop()
    }
  }
  return stack.length === 0
}

console.log(isBalanced(expression))