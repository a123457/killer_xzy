<!--
 * @Company: Inossem
 * @Author: zhanyu
 * @Email: zhanyu.xu@inossem.com
 * @Date: 2020-07-05 11:10:14
 * @LastEditors: zhanyu
 * @LastEditTime: 2020-07-13 11:37:29
 * @Description: description
--> 
<template>
  <div class="login">
    <LoginHeader>
      <el-form
        :model="ruleForm"
        :rules="loginRules"
        ref="ruleForm"
        label-position="left"
        label-width="0px"
        slot="container"
      >
        <div class="title">
          <h3>账号密码登录</h3>
        </div>
        <!-- username -->
        <el-form-item prop="userName">
          <el-input
            ref="userName"
            type="text"
            auto-complete="off"
            placeholder="账号"
            v-model="ruleForm.userName"
          >
            <i slot="prefix" class="fa fa-user-o"></i>
          </el-input>
        </el-form-item>

        <!-- password -->
        <el-form-item prop="pwd">
          <el-input
            ref="pwd"
            type="password"
            auto-complete="off"
            placeholder="密码"
            v-model="ruleForm.pwd"
          >
            <i slot="prefix" class="fa fa-lock"></i>
          </el-input>
        </el-form-item>

        <!-- 登录button -->
        <el-form-item>
          <el-button type="primary" style="width:100%;" @click="LoginIn">登录</el-button>
        </el-form-item>

        <!-- 7天登录和忘记密码 -->
        <el-form-item>
          <el-checkbox>7天内自动登录</el-checkbox>
          <el-button @click="$router.push('/password')" type="text" class="forget">忘记密码？</el-button>
        </el-form-item>
      </el-form>
    </LoginHeader>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import LoginHeader from "./LoginHeader.vue";
import { Form as ElForm, Input } from "element-ui";
import { isValidUsername } from "@/utils/validate";
@Component({
  components: { LoginHeader }
})
export default class Login extends Vue {
  private ruleForm: {
    userName: string;
    pwd: string;
    autoLogin: boolean;
  } = {
    userName: "",
    pwd: "",
    autoLogin: true // 七天内是否自动登录
  };
  private validateUsername = (rule: any, value: string, callback: Function) => {
    if (!isValidUsername(value)) {
      callback(new Error("请输入管理员账号"));
    } else {
      callback();
    }
  };

  private validatePassword = (rule: any, value: string, callback: Function) => {
    if (value.length < 6) {
      callback(new Error("密码最少为6位"));
    } else {
      callback();
    }
  };
  private loginRules = {
    userName: [{ validator: this.validateUsername, trigger: "blur" }],
    pwd: [{ validator: this.validatePassword, trigger: "blur" }]
  };
  mounted() {
    if (this.ruleForm.userName === "") {
      (this.$refs.userName as Input).focus();
    } else if (this.ruleForm.pwd === "") {
      (this.$refs.pwd as Input).focus();
    }
  }
  private LoginIn(): void {
    (this.$refs.ruleForm as ElForm).validate(val => {
      console.log(val);
    });
  }
}
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
.forget {
  float: right;
}
</style>

