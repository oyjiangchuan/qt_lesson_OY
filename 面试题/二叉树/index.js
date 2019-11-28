var tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4
    }
  },
  right: {
    value: 3,
    left: {
      value: 5,
      left: {
        value: 7
      },
      right: {
        value: 8
      }
    },
    right: {
      value: 6
    }
  }
}

// 先序遍历的递归方法
// var preOrder = function (node) {
//   if (node) {
//     console.log(node.value) /* 根 */
//     preOrder(node.left) /* 左 */
//     preOrder(node.right) /* 右 */
//   }
// }

// 使用深度优先 非递归 借助栈
var preOrderUnrecur = function (node) {
  if (!node) {
    throw Error('Empty Tree')
  }
  var stack = [] // 创建一个栈
  stack.push(node)
  while (stack.length !== 0) {
    node = stack.pop() // 出栈 删除最后一项
    console.log(node.value)
    if (node.right) stack.push(node.right) // 入栈 又会执行while
    if (node.left) stack.push(node.left)
  }
}

// 使用广度优先 非递归 借助栈
function BreadthFristUnrecur (biTree) {
  let queue = []
  queue.push(biTree)
  while (queue.length !== 0) {
    let node = queue.shift()
    console.log(node.value)
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }
}

