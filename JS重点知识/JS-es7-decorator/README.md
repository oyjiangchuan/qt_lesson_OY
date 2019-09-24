## 劫持
1. 获取到原来的方法 保留一下
2. 改写原来(原型)的方法 做一下增强 改写的时候需要 绑定一下this change.call(this, ...args)


## 装饰器
- 无侵入式的修饰、修饰器只能用于类和类的方法，不能用于函数，因为存在函数提升。
1. 就是一个方法@符后的一个东西永远是方法
2. 方法的参数
  - 修饰类时

  function who(Pname) {
    return function (target) {
    // 这里的target === function Man() {} === class Man {}
    console.log(target)
    target.Pname = Pname;
    return target;
    }
  }
  @who('蜗牛弟弟')
  class Man {}

  - 修饰方法时(类中的方法)
  
  function betterWn(target, name, descriptior) {
  // 这里的三个参数分别代表：target === Man.prototype; name === xiangqin; descriptior === value;
  // 这里的函数的参数和Object.defineProperty中的三个参数相似 
  const originalXiangqin = descriptior.value; // 拿到原始的函数
  descriptior.value = () => {
    // 
    console.log('我家在红谷滩有两套房');
    console.log('我家有车');
    originalXiangqin();
    }
  }

  class Man {
    @betterWn // 修饰类中的方法时
    xiangqin() {
      console.log('和我在一起');
    }
  }

## 装饰者模式(一种设计模式)
1. @就是一个 装饰者模式的应用(动态的改变某个类,方法)