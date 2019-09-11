## map reduce forEach
  - map 返回一个新的数组 原数组不会被改变
  - reduce 返回一个值 每次返回的值将作为下一次的pre参数,当遍历执行结束之后,就会将最后的值返回出来
  - forEach 没有返回值,就和for循环一样,会修改原来的数组
## 水仙花数
153 === 1^3 + 5^3 +3^3 相等就是水仙花数

先转化为字符串.toString() 拿到length

for of 遍历