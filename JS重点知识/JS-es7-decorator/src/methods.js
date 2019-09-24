// ES5 写法
// function Man() {}
// Man.prototype.xiangqin = function() {}
// Object.defineProperty(Man.prototype, 'xiangqin', {
//   value: function() {}
// })

function betterWn(target, name, descriptior) {
  // 这里的三个参数分别代表：target === Man.prototype name === xiangqin descriptior === value
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
  
  @betterWn
  xiangqin () {
    // console.log('我家在红谷滩有两套房');
    // console.log('我家有车');
    console.log('和我在一起');
  }
}

var man = new Man();
man.xiangqin();