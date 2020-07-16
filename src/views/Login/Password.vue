<!--
 * @Company: Inossem
 * @Author: zhanyu
 * @Email: zhanyu.xu@inossem.com
 * @Date: 2020-07-05 11:10:14
 * @LastEditors: zhanyu
 * @LastEditTime: 2020-07-05 16:15:11
 * @Description: description
--> 
<template>
  <div class="password">
    <LoginHeader>
      <el-form slot="container" ref="ruleForm" label-position="left" label-width="0px">
        <div class="title">
          <h3>找回密码</h3>
        </div>
        <!-- username -->
        <el-form-item prop="username">
          <el-input type="text" auto-complete="off" placeholder="账号">
            <i slot="prefix" class="fa fa-user-o"></i>
          </el-input>
        </el-form-item>

        <!-- email -->
        <el-form-item prop="email">
          <el-input type="text" auto-complete="off" placeholder="邮箱">
            <i slot="prefix" class="fa fa-envelope-o"></i>
          </el-input>
        </el-form-item>

        <!-- 确定 -->
        <el-form-item>
          <el-button type="primary" style="width:100%;">确定</el-button>
        </el-form-item>
      </el-form>
    </LoginHeader>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import LoginHeader from "./LoginHeader.vue";
@Component({
  components: { LoginHeader }
})
export default class Password extends Vue {}
</script>

<style lang="scss" scoped>
.title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}

i {
  font-size: 14px;
  margin-left: 8px;
}
</style>
