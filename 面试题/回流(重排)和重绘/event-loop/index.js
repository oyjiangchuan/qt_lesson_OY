setTimeout((argument) => {
  console.log('111111')
}, 0)

console.time('test')
for (var i = 0; i < 1000000; i++) {
  i === (100000 - 1)
}
console.timeEnd('test')


console.log(2222)

// test: 4.455ms
// 2222  
// 111111


// 浏览器线程: 
// 1. JS引擎线程 
// 2. GUI线程(绘制用户界限) 
// 3. http网络请求线程 (处理用户的get/post等请求 等到返回结果后将回调函数推入到任务队列) 
// 4. 定时触发器线程(setTimeout, setinterval 等待时间结束后把执行函数推入到任务队列) 
// 5. 浏览器事件处理线程
// event-loop(任务队列)中存放所有异步的方法
// 同步的方法放在事件队列中

function test1() {
  test2()
  console.log(1)
}

function test2() {
  console.log(2)
}

function main() {
  console.log(3)
  setTimeout(() => {
    console.log(4)
  })
  test1()
}
main()

// step1: main()先执行，进入线程，进入执行栈打印'hello, I am main'
// step2: 遇见setTimeout，将回调函数放入任务队列，
// step3: main调用test1，test1进入到stack中被执行
// step4: test1执行，调用test2（test2进入到stack中被执行）
// step5: test2执行，打印'hello, I am test2'
// step6: console.log('hello, I am test1')
// step7: 主线程执行完毕，进入任务队列当中执行


console.log('script start'); // 1

setTimeout(function () {
  console.log('setTimeout---0'); // 6
}, 0);

setTimeout(function () {
  console.log('setTimeout---200'); // 7
  setTimeout(function () {
    console.log('inner-setTimeout---0'); // 9
  });
  Promise.resolve().then(function () {
    console.log('promise5'); // 8
  });
}, 200);

Promise.resolve().then(function () {
  console.log('promise1'); // 3
}).then(function () {
  console.log('promise2'); // 5
});

Promise.resolve().then(function () {
  console.log('promise3'); // 4
});

console.log('script end'); // 2

// 链式调用经典例子

new Promise(function (resolve, reject) {
  console.log(1); //第一 先执行
  resolve();
}).then(function () {
  console.log(2); //第五
});

Promise.resolve().then(function () {
  console.log(1);
}).then(function () {
  console.log(2);
});
console.log(3); // 第二

// 修改之后又会不同
setTimeout(() => {
  console.log("setTimeout1");
});
setTimeout(() => {
  console.log("setTimeout2");
  Promise.resolve().then(data => {
    console.log(222);
  });
});
Promise.resolve().then(data => {
  console.log(111);
});