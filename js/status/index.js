function Light () {
    this.status = 'on'; // 状态
    this.button = null;
    this.init();
}
Light.prototype.init = function() {
    var button = document.createElement('button');
    // button.innerHTML = '开关';
    if (this.status == 'off') {
        button.innerHTML = '关';
    } else {
        button.innerHTML = '开';
    }
    this.button = document.body.appendChild(button);
    this.button.onclick = () => {
        this.buttonPressed();
    }
}
Light.prototype.buttonPressed = function() {
    if (this.status == 'off') {
        console.log('开灯')
        this.status = 'on'
        this.button.innerHTML = '开';
    } else {
        console.log('关灯')
        this.status = 'off'
        this.button.innerHTML = '关';
    }
}