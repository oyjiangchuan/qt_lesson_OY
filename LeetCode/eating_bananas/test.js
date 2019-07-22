// Math.max()
const IMath = {} // namespace
/**
*   @params:number  NaN not a number
*   @return:number  返回最大值
*/
IMath.max = function(...args) {
     console.log(arguments,arguments.length); //arguments类数组,和数组相似但表现形式是{'0':2,'1':4,'2':3,'3':9};
    // ...args 收起参数

    /* for (var i = 0; i < arguments.length; i++){
        // 类型检测
        if(typeof args[i] !== 'number') {
            return NaN;
        }
    } */
}
console.log(IMath.max(...[2, 4, 3, 9])); // 展开