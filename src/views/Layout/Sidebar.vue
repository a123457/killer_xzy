<!--
 * @Company: Inossem
 * @Author: zhanyu
 * @Email: zhanyu.xu@inossem.com
 * @Date: 2020-07-06 10:28:38
 * @LastEditors: zhanyu
 * @LastEditTime: 2020-07-08 09:33:50
 * @Description: description
--> 
<template>
  <el-scrollbar class="el-scrollbar">
    <el-menu class="el-menu-slide" :default-active="$router.currentRoute.path" router>
      <template>
        <el-menu-item>
          <i></i>
          <span slot="title"></span>
        </el-menu-item>
        <!-- 多个子元素 -->
        <el-submenu>
          <template slot="title">
            <i></i>
            <span></span>
          </template>
          <el-menu-item>
            <i></i>
            <span></span>
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {}
})
export default class Sidebar extends Vue {}
</script>

<style lang="scss" scoped>
.el-scrollbar {
  height: 100%;
  border-right: 1px solid #e6e6e6;
  background: #fff;
  .el-menu-slide {
    border-right: none;
    i {
      margin-right: 5px;
      width: 24px;
      text-align: center;
      font-size: 18px;
    }
  }
}
</style>
