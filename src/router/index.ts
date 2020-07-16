/*
 * @Company: Inossem
 * @Author: zhanyu
 * @Email: zhanyu.xu@inossem.com
 * @Date: 2020-07-02 15:10:31
 * @LastEditors: zhanyu
 * @LastEditTime: 2020-07-05 16:16:25
 * @Description: description
 */
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/Login.vue')
  },
  {
    path: '/password',
    name: 'password',
    component: () => import('@/views/Login/Password.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
