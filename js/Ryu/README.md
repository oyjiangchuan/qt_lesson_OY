- 复杂的开发需求看本质
    talk in js 编程是面向对象的世界
    属性 方法
    攻击 防御 跳跃 蹲下 Ryu  JSON
    const Ryu = {
        name:'Ryu',
        sex: '男',
        attack: function() {
            console.log('攻击');
        },
        defense: function() {
            console.log('防御');
        },
        jump: function() {
            console.log('跳跃');
        },
        crouch: function() {
            console.log('蹲下');
        }
    }

- 三个版本的演绎过程
    1. 具体流程的前端
        事件模型 + JSON 面向对象 
        onkeypress 事件的类型 ev对象
    2. 抽象是编程训练的核心
        按键执行的动作  JSON配置的技巧
    3. 封装 谁来做
        makeCommands(receiver, state)