// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

// 示例 1:

// 输入: [1,2,3,4,5,6,7] 和 k = 3
// 输出: [5,6,7,1,2,3,4]
// 解释:
// 向右旋转 1 步: [7,1,2,3,4,5,6]
// 向右旋转 2 步: [6,7,1,2,3,4,5]
// 向右旋转 3 步: [5,6,7,1,2,3,4]
// 示例 2:

// 输入: [-1,-100,3,99] 和 k = 2
// 输出: [3,99,-1,-100]
// 解释:
// 向右旋转 1 步: [99,-1,-100,3]
// 向右旋转 2 步: [3,99,-1,-100]
// 说明:

// 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
// 要求使用空间复杂度为 O(1) 的 原地 算法。



// [a, b, c, d, e, f, g, h]  k = 2
let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

// function RShift(list, k) {
//   // const copy = [...list]
//   const n = list.length

//   if (k % n === 0) return

//   let cnt = Math.abs(k > 0 ? k % n : n + (k % n))

//   let t = null

//   while (cnt--) {
//     t = list[n - 1] // 先保存最后一项
//     // 右移一位
//     for (let i = n - 1; i > 0; i--) {
//       list[i] = list[i - 1]
//     }
//     list[0] = t
//   }
//   /* for (i = 0; i < n; i++) {
//     list[i] = copy[(k + i) % n]
//     // [c, b, c, d, e, f, g, h]
//     // [c, d, e, d, e, f, g, h]
//     // [c, d, e, f, e, f, g, h]
//     // [c, d, e, f, g, f, g, h]
//     // [c, d, e, f, g, h, g, h]
//     // [c, d, e, f, g, h, a, h]
//     // [c, d, e, f, g, h, a, b]
//   } 
//   return list */
//   return list 
// }

// function RShift(list, k) {
//   const n = list.length
//   let i = Math.abs(k > 0 ? k % n : n + (k % n))

//   return list.concat([...list].slice(n - i, 2 * n - i))
// }

// 终极实现思路
// 先把[0, n - k - 1]翻转
// 然后把[n - k, n - 1]翻转
// 最后把[0, n - 1]翻转

// ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

function reverse(list, strat, end) {
  let t = null
  while (strat < end) {
    t = list[strat]
    list[strat] = list[end]
    list[end] = t
    strat++
    end--
  }
}

function RShift(list, k) {
  const n = list.length
  if (k % n === 0) return
  if (k > n) { 
    k = k - n
    reverse(list, 0, n - k - 1)
    reverse(list, n - k, n - 1)
    reverse(list, 0, n - 1)
    return list
   } else {
    reverse(list, 0, n - k - 1)
    reverse(list, n - k, n - 1)
    reverse(list, 0, n - 1)
    return list
   }
}
console.log(RShift(arr, 10))  // 时间复杂度 和空间复杂度 都为n