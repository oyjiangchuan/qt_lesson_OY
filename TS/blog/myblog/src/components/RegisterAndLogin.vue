<template>
  <el-dialog title="登录" :visible.sync="dialogVisible" @close="cancel">
    <el-form label-width="80px">
      <el-form-item label="邮箱">
        <el-input v-model="params.emil"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="params.password"></el-input>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script lang="ts">
import { Vue, Prop, Component, Emit } from "vue-property-decorator";
@Component // 一定要添加 否则无法正常使用get(计算属性)
export default class RegisterAndLogin extends Vue {
  @Prop({ default: false }) visible!: boolean; // Prop默认的写法
  private params: any = {
    emil: "",
    password: ""
  }
  get dialogVisible(): boolean {
    // console.log(this.visible)
    return this.visible;
  }
  @Emit() // emit的方式
  private cancel(): boolean {
    return false;
  }
}
</script>

<style>
</style>