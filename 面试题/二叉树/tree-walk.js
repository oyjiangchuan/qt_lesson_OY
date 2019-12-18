const tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: {
        val: 5
      },
      right: {
        val: 6,
        left: {
          val: 8
        }
      }
    },
    right: {
      val: 7,
      right: {
        val: 9
      }
    }
  },
  right: {
    val: 3
  }
}

function preOrder(tree, arr = []) {
  if (tree) {
    arr.push(tree.val)
    preOrder(tree.left, arr)
    preOrder(tree.right, arr)
  }
  return arr;
}
// 递归 爆栈(溢出) 函数调用时的执行栈被堆满
// 手动维护这个栈
var arr = preOrder(tree)
console.log(arr)

// 递归变循环实现
function loop(tree) {
  let stack = []; // 使用数组模拟栈
  let current = tree;
  let res = [];
  stack.push(current)
  while (stack.length > 0) {
    while (current) {
      res.push(current.val);
      stack.push(current);  // 入栈
      current = current.left;
    }
    current = stack.pop(); // 出栈 (执行栈)
    current = current.right
  }
  return res
}

// 斐波那契数列循环
function fb(n) {
  let num1 = 1;
  let num2 = 1;
  let sum = num1 + num2;
  if (n === 1 || n === 2) return 1;
  for (let i = 3; i <= n; i++) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
  }
  return sum
}