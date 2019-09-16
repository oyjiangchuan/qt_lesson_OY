import vue from 'vue';
import ToastComponent from './index.vue';
// console.log(ToastComponent);
// this.$message('这是一条消息')
// 通过visiable = true 在props中
// .msg = 'xx'
// .visiable = true

// 返回一个构造函数 面向对象 解决某一类问题
// EditInPlace
// new EditInPlace()
const toastConstruct = vue.extend(ToastComponent);

function showMessage(msg, duration = 2000) {
  const instance = new toastConstruct({
    el: document.createElement('div'),
    propsData: {
      msg: msg,
      visiable: true
    }
  })
  document.body.appendChild(instance.$el);
  setTimeout(() => {
    instance.visiable = false
    document.body.removeChild(instance.$el);
  }, duration)
}

export default showMessage;