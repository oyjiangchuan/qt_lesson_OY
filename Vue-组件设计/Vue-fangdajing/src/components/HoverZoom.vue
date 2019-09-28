<template>
  <div class="zoom">
    <!-- small -->
    <div class="smallBox" 
    @mouseover="mouseOver"
    @mousemove="mouseMove"
    @mouseout="mouseOut"> <!-- 绑定三个关键的事件 鼠标进来时 鼠标移动时 鼠标离开时 -->
      <img :src="smallSrc" alt="">
      <div class="mask" v-show="show" 
      :style="{
        width: '210px',
        height: '210px',
        opacity: 0.7
      }"></div> <!-- Vue中写行内样式的语法 -->
    </div>
    <!-- big -->
    <div class="bigBox" :style="{ width: '430px', height: '430px'}" v-show="show">
        <img :src="bigSrc" alt="" :style="{ width: '800px',height: '800px'}">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    smallSrc: { type: String },
    bigSrc: { type: String }
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    mouseOver (event) { // 监听鼠标进来时会有一个默认的事件参数
      // const maskNode = document.querySelector('.mask')
      // this.maskNodeRect = maskNode.getBoundingClientRect();
      this.show = true
    },
    mouseMove (event) { // 监听鼠标移动时会有一个默认的事件参数
      // console.log(event.clientY) 这里的event.clientX event.clientY 都是相对于浏览器可视区域的位置 还是会出现小BUG
      const X = event.clientX, Y = event.clientY;
      let maskX = X - 210 / 2, maskY = Y - 210 / 2;
      maskX = maskX < 0 ? 0 : maskX
      maskY = maskY < 0 ? 0 : maskY
      const smallboxRect = document.querySelector('.smallBox img').getBoundingClientRect() // 获取元素的宽高坐标的信息

      if (maskX + 210 >= smallboxRect.width) {
        maskX = smallboxRect.width - 210
      }
      if (maskY + 210 >= smallboxRect.height) {
        maskY = smallboxRect.height - 210
      }
      const mask = document.querySelector('.mask')

      mask.style.transform = `translate(${maskX}px, ${maskY}px)`

      // (800-430) / (430 - 210) 移动的比例 小图动 大图跟着比例移动
      const bigboxMove = document.querySelector('.bigBox img')
      bigboxMove.style.left = -maskX * ((800-430) / (430 - 210)) + 'px'
      bigboxMove.style.top = -maskY * ((800-430) / (430 - 210)) + 'px'
    },
    mouseOut (event) {
      this.show = false
    }
  }
}
</script>

<style>
.smallBox {
  position: absolute;
}
.mask {
  cursor: move;
  position: absolute;
  left: 0;
  top: 0;
  background-image: url(https://img-tmdetail.alicdn.com/tps/i4/T12pdtXaldXXXXXXXX-2-2.png);
  background-repeat: repeat;
}
.bigBox {
  position: absolute;
  left: 450px;
  border: 1px solid #000;
  overflow: hidden;
}
.bigBox img {
  position: absolute;
}
</style>