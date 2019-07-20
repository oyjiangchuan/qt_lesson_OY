- js 运行环境
    1. 浏览器宿主 frontend 前端
    2. 服务器端 backend 后端
- npm 包管理器 慢
    yarn 包管理器 facebook  快
    npm install -g live-server(包) 功能是自动刷新网页 
    - g 表示全局安装
    yarn global add nodemon(全局安装nodemon包) 自动刷新node文件
    yarn global bin 安装的包地址？



- typeof 类型运算符
    typeof duck
    返回值是数据类型的字符串
    五种基本类型：
    数值number,字符串string,布尔值boolean，null(空)，undefined(未定义)；
    复杂数据类型：
    其他的数据类型都是对象 object，function，array(数组)/[]
    函数就是一个可以运行的对象
    注意：typeof在打印function时，返回的是function
    typeof在打印数组的时候，返回的是object；

- 对象字面量 {key:value...}
    typeof obj object
    js是动态语言 可以在定义完后再添加属性
    对象字面量 key val {} 创建对象很方便
    js 强表现力语言

- 数组
    对象 可以被遍历的对象 
    .length 
    .push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度
    .push() 方法的使用如下：
    <script type="text/javascript">
        var arr = new Array(3)
        arr[0] = "George"
        arr[1] = "John"
        arr[2] = "Thomas"
        document.write(arr + "<br />")
        document.write(arr.push("James") + "<br />")
        document.write(arr)
    </script>
        输出：
        George,John,Thomas
        4
        George,John,Thomas,James
