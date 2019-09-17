(function() {
  function WaterFall(option) {
    this.container = option.container
    this.number = option.number // 一次 渲染多少张
    this.width = document.body.clientWidth // 可视区域的宽度
    this.init()
  }
  WaterFall.prototype.init = function() {
    const imgList = document.getElementsByTagName('img');
    const perNum = this.getPerNum(); // 计算每一排的照片数量
    let heights = []
    for (let i = 0; i < perNum; i++) {
      heights.push(imgList[i].offsetHeight);
    }
    let minIndex = this.getMinIndex(heights)
    // 第一排float
    // 第二排position
    for (let i = perNum; i < imgList.length; i++) { // 瀑布流核心三行代码
      imgList[i].style.position = 'absolute'
      imgList[i].style.left = `${imgList[minIndex].offsetLeft}px`
      imgList[i].style.top = `${heights[minIndex]}px`


      heights[minIndex] += imgList[i].offsetHeight // 把那个第二排的高度加在最短的一张图片的高度上
      minIndex = this.getMinIndex(heights) // 再重新计算一次最小的高度
    }
    this.heights = heights // 添加到实例中
  }

  WaterFall.prototype.getPerNum = function() {
    const imgList = document.getElementsByTagName('img');
    const singleWidth = imgList[0].offsetWidth // 获取每张图片的宽度,每张图片都是等宽的
    return Math.floor(this.width / singleWidth)
  }
  WaterFall.prototype.getMinIndex = function(heights) {
    const min = Math.min(...heights)
    return heights.findIndex(e => e === min) // 返回最小高度的下标的方法
  }
  WaterFall.prototype.append = function(frag) { // 滚动到底部插入新图片的发放
    const $waterfall = document.getElementById(this.container)
    $waterfall.appendChild(frag)

    const imgList = document.getElementsByTagName('img')
    const imgFromFrag = Array.prototype.slice.call(imgList, -20)

    let heights = this.heights;

    let minIndex = this.getMinIndex(heights)
    setTimeout(() => {
      for (let i = 0; i < 20; i++) { // 瀑布流核心三行代码
        imgFromFrag[i].style.position = 'absolute'
        imgFromFrag[i].style.left = `${imgList[minIndex].offsetLeft}px`
        imgFromFrag[i].style.top = `${heights[minIndex]}px`
  
        heights[minIndex] += imgFromFrag[i].offsetHeight // 把那个第二排的高度加在最短的一张图片的高度上
        minIndex = this.getMinIndex(heights) // 再重新计算一次最小的高度
      }
    },2000)
  }
  window.WaterFall = WaterFall
})()
// console.log(WaterFall)