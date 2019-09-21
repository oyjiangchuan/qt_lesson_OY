<template>
  <!-- 容器组件 -->
  <SubMenu>
    <template #title>{{data.title}}</template>
    <MenuItem v-for="child in data.children" :key="child.id" v-if="!child.children">{{child.title}}</MenuItem>
    <ReSubMenu :data="child" v-else ></ReSubMenu>
  </SubMenu>
</template>
<script>
import SubMenu from './SubMenu'
import MenuItem from './MenuItem'
export default {
  name: 'ReSubMenu',
  props: {
    data: {
      type: Object
    }
  },
  components: {
    SubMenu,
    MenuItem
  }
}
</script>