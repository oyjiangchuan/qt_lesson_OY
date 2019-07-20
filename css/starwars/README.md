## emmet插件 快捷输入
vscode 来自微软、内置了emmet插件
- 使用css选择器来快速的语法
    1. 类名选择器 .className
    2. > 父子选择器
    3. + 兄弟选择器
    4. [] 属性选择器
    .starwars-demo>img.star*2[scr="./images/"]
- 定位
    css布局的一种
    position:absolute;
    position:relateive; body 是最顶层的定位
    父级或者一直往外查找，如果有定位元素，相对最近的长辈元素定位，否则就是body
- transform
    变形属性 translate 平移，移动（可定义x,y,z轴）|scale 缩放 |rotate 旋转（可定义x,y,z轴）

    三维世界 
    1. perspective 视点离屏幕的距离
    2. transfrom-style：prespective-3d; 支持3dz轴的变形样式
- npm node 的工具包管理
    live-server 静态网页提供了web-server 热更新（代码保存之后，页面自动更新效果）
    npm install -g live-server 全局安装
    js 的命令行工具 让js运行在服务器端
    em,字体大小的倍数
    
- 终端命令行
    1. 打开node:node -v
    2. 查看当前目录:dir
- 启动命令
    3. npm/cnpm install ：加载依赖（淘宝镜像：npm install -g cnpm --registry=https://registry.npm.taobao.org）
    4. npm/cnpm run dev ：本地启动
- git命令
    git status ：查看代码修改情况
    git add .\src\ ：将修改添加到暂存区
    git commit -m '说明文字' ：将更改和日志消息一起存储到新的提交中
    git pull ：把gitlab上面的代码拉取下来
    git push ：把提交中的代码推送到gitlab上
- 通用命令
    ctrl + c --> y ：停止终端
    clear ：清空终端