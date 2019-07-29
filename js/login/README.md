- 5G时代 设备的省电很重要  js有可能被禁用
  <a href="/login">登录</a> 跳转页面 功能的实现
  script addEventListener 同时存在的必要 更好的用户体验
  无障碍的互联网访问
- event.preventDefault(); // 阻止默认行为,如阻止a标签的页面跳转
- event.stopPropgation(); // 阻止冒泡行为
- 添加监听事件时 如 document.getElementById('box').addEventListener('click', function(event) {
    event.preventDefault();
    alert('I am a box');
}, true)
  这里添加id名为box的点击事件,第一个参数为事件名,第二个为回调函数,第三个参数是确定冒泡事件的顺序,默认是false,从内到外;当其中的事件都设置为true时,就是从外到内的冒泡
- DOM DOM树,    BODY是树根,  元素及元素的子元素 子节点 孙节点...
  .inner 默认沿着DOM树 事件的冒泡触发 