/**
 * @func 就地编辑
 * @author 江川
 * 网站的基础类 不要重复造轮子
 * 不是具体的业务, 抽象统一的公共业务
 */
function EditInplace(id, parent, initVal) {
    // constructor
    this.id = id;
    this.parentElement = parent;
    this.value = initVal || 'default value';
    this.createElement(); // 动态DOM
    this.attchEvents();
}

EditInplace.prototype.createElement = function() {
    this.containerElement = document.createElement('div');
    this.containerElement.id = this.id;
    this.staticElement = document.createElement('span');
    this.staticElement.innerHTML = this.value;

    this.fiedElement = document.createElement('input');
    this.fiedElement.type = 'text';
    this.fiedElement.value = this.value
    this.containerElement.appendChild(this.fiedElement)

    this.containerElement.appendChild(this.staticElement);
    this.parentElement.appendChild(this.containerElement);
    // 两个状态
    this.convertTOText();
}

EditInplace.prototype.convertTOText = function() {
    this.fiedElement.style.display = 'none';
    this.staticElement.style.display = 'inline';
}

EditInplace.prototype.convertTOEdit = function() {
    this.fiedElement.style.display = 'inline';
    this.staticElement.style.display = 'none';
}

EditInplace.prototype.attchEvents = function() {
    // 节点已经挂载到页面上了
    let self = this; // 这this指向EditInplace
    this.staticElement.addEventListener('click', () => {
        // 这里使用箭头函数就可以将内部的this指向EditInplace
        // 如果不使用箭头函数,这里的this是指向上一级的事件this.staticElement
        // 也可以在点击事件前将指向EditInplace的this赋给一个变量,在回调函数中是可以访问到的
        console.log(this)
        // 引用到对象怎么办？
        this.convertTOEdit();
        // self.convertTOEdit();
        // convertTOEdit.call(EditInplace);
    }, false)
    this.fiedElement.addEventListener('keydown', (event) => { // keydown按下键时的事件
        if (event.keyCode == 13 ) {
            this.staticElement.innerHTML = this.fiedElement.value;
            this.convertTOText();
        }
    })
}
