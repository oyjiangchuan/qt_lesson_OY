function who(Pname) {
  // console.log(target)
  // target.Pname = '蜗牛';
  // return target;
  return function (target) {
    // 这里的target === function Man() {} === class Man {}
    console.log(target)
    target.Pname = Pname;
    return target;
  }
}
// @who
@who('蜗牛弟弟')
// @who({
//   name: '蜗牛'
// })
class Man {
  xiangqin() {
    // console.log(`蜗牛去相亲了`);
    console.log(`${Man.Pname}去相亲了`);
  }
}
var man = new Man();
man.xiangqin();
class Man1 {
  xiangqin() {
    console.log(`蜗牛弟弟去相亲了`);
    // console.log(`${Man.name}去相亲了`);
  }
}