## Map(键值对的组合)
{}
1. {} / Map 区别
    1. Map 中的 key 是有序的, 而添加到对象中的则不是,(对象的属性遍历不能保证顺序如for-in,Object.keys方法等)
    2. {} key 只接受字符串和Symbol, Map 的 Key 可以是任意值(变量)
2. Map / WeakMap 区别

可迭代对象
for of b 可以遍历可迭代对象
[...可迭代对象] 可以展开可迭代对象
set 可迭代对象