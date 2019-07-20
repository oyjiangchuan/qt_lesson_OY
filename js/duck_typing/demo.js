// 国王 鸭子合唱团 1000
const chior = [];/* 合唱团 1000 ,数组也是对象，方法也是对象*/
// 方法：
function joinChior(animal) {//参数
    //检测
    //加入数组
    chior.push(animal);/* 数组的push方法 */
    //如果数量达到了,汇报
}
// talk in js

// js 对象字面量来描述一个对象
const duck = {
    type:'鸭子',//属性
    sex:'公',
    duckSing:function() {//行为
        console.log("嘎嘎嘎");
    }
}
joinChior(duck);