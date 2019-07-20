- 命名空间 name spcae 
    Phaser  { }
    1. 申请领地空间
    取名字  var MIUI = {}
    MIUI.version = '10.1';
    MIUI.openSystem = function() { }
    游戏框架 最小化入侵我们的window
    乱用var,会污染全局变量
    2. var Phaser = {}  将会直接挂载到window对象上
    作用域  scope
    window => 
    3. es5 类的构造 使用function() {}
    函数首字母大写，它表示一个类，这个函数本身是构造函数,
    方法    Phaser.Game.prototy.getName
