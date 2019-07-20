- css 烦 浪费时间？
{
    key:value;
}
css 编译使用stylus插件 

- stylus 是css 预编译
    用stylus来写css 快多了. 还有其他一些高级功能，使用tab键缩进，代表是一个选择器下的样式
    写的是.styl文件，浏览器要的是css文件 

- stylus使用：先进入文件的目录下，使用方法 (stylus 文件名.styl -o 文件名.css)
    (stylus -w 文件名.styl -o  文件名.css)一直监听，随着.styl文件的修改，.css文件会修改

- 界面第一步是写结构，这是在最重要的
    1. 脱离分析标签表面的低级趣味 从内到外
    2. 盒子 从外到内
    main.container>ul.tag-list>li.item>.tag>.info-box+.action-box
    3. 写结构 不要去管css 
    4. 语义化，用合适的标签
    