/*
 * @Company: Inossem
 * @Author: zhanyu
 * @Email: zhanyu.xu@inossem.com
 * @Date: 2020-07-02 15:16:37
 * @LastEditors: zhanyu
 * @LastEditTime: 2020-07-04 15:26:10
 * @Description: description
 */
import Vue from 'vue'
import Vuex from 'vuex'
import { IAppState } from './modules/app'
Vue.use(Vuex);
export interface IRootState {
  app: IAppState;
}
export default new Vuex.Store<IRootState>({})
