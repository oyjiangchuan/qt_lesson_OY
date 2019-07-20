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