<template>
  <el-dialog title="登录" :visible.sync="dialogVisible" @close="cancel">
    <el-form label-width="80px">
      <el-form-item label="邮箱">
        <el-input v-model="params.email"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="params.password"></el-input>
      </el-form-item>
      <el-form-item label="昵称" v-if="handleFlag === 'register'">
        <el-input v-model="params.nickname"></el-input>
      </el-form-item>
      <el-form-item label="手机" v-if="handleFlag === 'register'">
        <el-input v-model="params.phone"></el-input>
      </el-form-item>
      <el-form-item label="简介" v-if="handleFlag === 'register'">
        <el-input v-model="params.desc"></el-input>
      </el-form-item>
    </el-form>
    <div class="daiog-footer" slot="footer">
      <el-button type="success" @click="handleOAuth">github 授权登录</el-button>
      <el-button type="primary" @click="handleOk" v-if="handleFlag === 'register'">注册</el-button>
      <el-button type="primary" @click="handleOk" v-else>登录</el-button>
      
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { Vue, Prop, Component, Emit } from "vue-property-decorator";
@Component // 一定要添加 否则无法正常使用get(计算属性)
export default class RegisterAndLogin extends Vue {
  @Prop({ default: true }) private visible!: boolean; // Prop默认的写法
  @Prop({ default: false }) private handleFlag!: string; // Prop默认的写法
  private params: any = {
    email: "",
    password: "",
    nickname: "",
    phone: "",
    desc: ""
  };

  get dialogVisible(): boolean {
    // console.log(this.visible)
    return this.visible;
  }

  @Emit() // emit的方式
  private cancel(): boolean {
    return false;
  }

  private handleOAuth(): void {
    // 保存授权之前的页面链接
    let preventHistory: object = {
      name: this.$route.name,
      query: this.$route.query
    };
    window.sessionStorage.preventHistory = JSON.stringify(preventHistory);
    window.location.href =
      "https://github.com/login/oauth/authorize?client_id=013a2c4456bfb4d6d7fa&redirect_uri=https://biaochenxuying.cn/login";
  }

  private handleOk(): void {
    const reg = new RegExp(
      "^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$"
    );
    if (!reg.test(this.params.email)) {
      this.$message.error("请输入正确的邮箱格式");
    } else {
      if (!this.params.password) {
        this.$message.error("密码不能为空");
      }
    }
    // 登陆操作
    this.submit()
  }

  private async submit(): Promise<void> {
    let data: any = ''
    if (this.handleFlag === 'register') {
      data = await this.$https.post(this.$urls.register, this.params) // 返送接口请求 data是返回值
    } else {
      data = await this.$https.post(this.$urls.login, this.params)
    }
  }
}
</script>

<style>
</style>