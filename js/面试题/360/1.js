const expression = '{{}}{}{}';
const expressionFalse = '{}{{}';
// 先用JS实现  正则
function isBalanced(exp) {
  const reg = /{}/g;
  let len;
  do {
    len = exp.length
    exp = exp.replace(reg, '') // 使用replace方法进行括号的正则匹配,do while也比较关键
    console.log(exp)
  } while(len != exp.length) // 不为空
  return exp.length == 0
}

console.log(isBalanced(expression))
console.log(isBalanced(expressionFalse))