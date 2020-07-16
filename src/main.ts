/*
 * @Company: Inossem
 * @Author: zhanyu
 * @Email: zhanyu.xu@inossem.com
 * @Date: 2020-07-04 19:21:14
 * @LastEditors: zhanyu
 * @LastEditTime: 2020-07-08 23:31:36
 * @Description: description
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import '@/assets/iconfonts/font-awesome.css'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
