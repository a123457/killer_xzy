<!--
 * @Company: Inossem
 * @Author: zhanyu
 * @Email: zhanyu.xu@inossem.com
 * @Date: 2020-07-02 15:10:31
 * @LastEditors: zhanyu
 * @LastEditTime: 2020-07-08 23:54:49
 * @Description: description
--> 
<template>
  <div class="home">
    <span>名字: {{name}}</span>
    <span>年龄: {{age}}</span>
    <span>长相: {{desc}}</span>
    <div>毛蛋： {{maodan}}</div>
    <el-input v-model="inputValue" placeholder="请输入描述" style="width:400px; max-width:100%;" />
    <el-button type="success" @click="setName">点击</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { AppModule } from "../store/modules/app";
// @ is an alias to /src
@Component({
  name: "Xzy_killer"
})
export default class extends Vue {
  private name: string = "xzy";
  private age: number = 18;
  private desc: string = AppModule.desc;
  private inputValue: string = "";
  private maodan: string = AppModule.maodanzz;
  public setName(): void {
    this.maodan = this.inputValue;
    AppModule.SetName(this.inputValue);
  }
}
</script>
<style scoped>
</style>
