- 第一天
- stylus插件
    今天这里采用stylus插件，创建styl文件，在命令行输入stylus -w style.styl -o style.csss生成css文件，并且实时监控

- css语法布局知识点
    1. 移动端，除了苹果plus系列，其他手机均采用两倍Retina屏幕，我们拿到移动端设计稿一般是700px，此时换算成手机上就是先除以二，再除以根字体大小，换算成rem
    2. box-sizing border-box，防止padding值撑开盒子
    transform rotate(45deg) translateY(-50%)，旋转45度，往Y轴向上移动盒子50%的宽度
    3. 用伪元素制作一个小箭头，给父级容器一个相对定位，自己一个绝对定位，给自身一个宽高，给一个边框，用border-width 0 0 2px 2px，只显示两条边宽，再旋转盒子调整位置就可以了.(这里注意伪元素的使用一定要添加content属性！！！)
    4. -webkit-tap-highlight-color rgba(255, 255, 255, 0)苹果手机会出现的高亮模式，我们这里要去除，在移动端开发的时候注意
    5. min-width 3.1rem 一般在移动端开发页面的时候使用到，表示最小宽度，一般放置于页面的最开始的盒子中
    6. 一般能使用padding的方法解决时，就不要使用margin值，防止出现一些不必要的bug
    7. filter blur(0)蒙层的效果
    8. background-size cover 设置背景图片的宽高覆盖满整个容器，不考虑是否变形
    9. overflow hidden创建一个bfc容器，可以清除浮动

- ajax知识，基于jquery框架下的使用
    自调用函数写法
    (function(){
        $.ajax({
                url: 'https://www.easy-mock.com/mock/5d2ed7d17f168b5e40d35f4b/movie/maoyanmoving',
                type: 'get',
                success: function(res) {
                    console.log(res)
                    $('#moviePic').attr('src',res.data.moviePic) // jq中获取DOM结构,修改属性
                    $('.score-num span').html(res.data.people) // .html方法，修改html的内容
                    $('.movie-name span').html(res.data.name)
                    $('.movie-ename span').html(res.data.nameEnglish)
                }
            })
    })()
    通过api地址访问请求数据，得到数据后添加到相应的DOM结构中
- jquery中一些方法：
    1. $('#rating').prepend('<img class="img" src="./images/star-h.png"></img>') // 往#rating的div中添加图片.prepend方法
    2. $('#moviePic').attr('src',res.data.moviePic) // jq中获取DOM结构,修改属性
    3. $('.score-num span').html(res.data.people) // .html方法，修改html的内容
    4. $(this).hasClass('show') // 判断此时是否有类名show
    5. $(this).removeClass('show') // 移除类名shwo
    6. $('#toast').addClass('active') // 添加类名active  这三个方法都不需要添加在类名前面添加.，而$('')中选择时要添加选择器的前缀.或者#

- es6中箭头函数写法
    setTimeout(() => {
                $('#toast').removeClass('active')
            },2000)

- 第二天
- css知识
    1. display -webkit-box - 是css3新添加的盒子模型属性,经典的一个布局应用就是布局的垂直等高、水平均分、按比例划分。
    2. -webkit-box-orient vertical -子元素排列 vertical（竖排）orhorizontal（横排）
    3. word-break break-all 强制换行属性(一般情况下,元素会自动换行;但是当录入的数据是一堆没有空格的字符或字母或数字超过容器宽度时就会把容器撑大，不换行;)
    4. overflow-x scroll -在x轴超出给滚动条一般是用于图片的处理 
    5. -webkit-line-clamp 3 -规定文本显示的行数
    6. transition transform .5S -监听transfrom的变化,过渡的时间为0.5s
    7. text-overflow ellipsis -文本超出范围显示省略号点的符号
    8. white-space nowrap -不换行,一般7，8两个属性一般一起使用

- 使用的jquery方法
    1. 监听点击事件可以使用$('').click(function() {})
        也可以使用$('').on('click',function() {})

- es6添加DOM结构
     `<li>
            <a href="#" class="link">
                <div class="movie-celebrities__pic>
                        <img src="${n.avatal}" alt="">
                </div>
                <span class="movie-celebrities-nick">${n.name}</span>
                <span class="movie-celebrities-roles">${n.sort}</span>
            </a>
    </li>`

    云括号``中包括结构,要在``中添加变量值的话,需要用${}包裹,在里面添加变量值