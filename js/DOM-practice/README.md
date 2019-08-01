## js
1. DOM: Doucment Object Model (文档对象模型) => 浏览器将整个文档HTML建模成为一棵树,DOM 允许我们和这棵树交互
    1. 属性(attr)
    2. document 表示了一颗DOM树
    3. Node 节点
    4. mutationObserver 监听 DOM 的变化
    5. event dom1:onclick="stop()"  dom2:node.onclick = function()  dom3:addEventListener()

    一些重要的API
    1. getAttribute('class') 访问标签的属性
    2. setAttribute('class', 'blue') 添加标签的属性值
    3. getAttributeNames()得到标签所有属性名
    4. document.all
    5. document.images
    6. document.forms
    7. document.body
    8. document.documentElement 返回整个html文档
    9. inputNode = form['username'] 通过form中的input中的name属性可以直接访问inupt标签
    10. console.log(inputNode.value) 再通过.value可以得到输入框中的值,并且打印
    11. firstElementChild 只选择第一个孩子元素节点,不会选择文本节点
    12. firstChild 选中第一个孩子节点,空格可能被选中
    13. createElement('li') 创建一个元素节点
    14. createTextNode('0') 创建一个文本节点
    15. liNode.appendChild(text) 向父节点中添加子节点
    16. box.insertBefore(liNode,box.firstElementChild) 在已有的子节点 前 插入一个新的子节点。
    17. document.querySelectorAll('#box li') 选中全部#box 下的li 标签
    18. lis[i].remove() 通过自身移除lis[i]
    19. box.removeChild(lis[i]) 过父节点移除lis[i]

2. ECMAScript ES6 ES5: 规定了 语法
3. BOM: Borowser Object Model (浏览器对象模型) 和浏览器有关 resize 导航...

- 在文档对象模型 (DOM) 中，每个节点都是一个对象。DOM 节点有三个重要的属性 ：
    1. nodeName : 节点的名称
    2. nodeValue ：节点的值
    3. nodeType ：节点的类型
## 一、nodeName 属性: 节点的名称，是只读的。
    1. 元素节点的 nodeName 与标签名相同
    2. 属性节点的 nodeName 是属性的名称
    3. 文本节点的 nodeName 永远是 #text
    4. 文档节点的 nodeName 永远是 #document
## 二、nodeValue 属性：节点的值
    1. 元素节点的 nodeValue 是 undefined 或 null
    2. 文本节点的 nodeValue 是文本自身
    3. 属性节点的 nodeValue 是属性的值
## 三、nodeType 属性: 节点的类型，是只读的。以下常用的几种结点类型:
    元素类型    节点类型
      元素          1
      属性          2
      文本          3
      注释          8
      文档          9

