/*
 * @Company: Inossem
 * @Author: zhanyu
 * @Email: zhanyu.xu@inossem.com
 * @Date: 2020-07-04 15:23:12
 * @LastEditors: zhanyu
 * @LastEditTime: 2020-07-06 16:13:24
 * @Description: description
 */
import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'

export enum DeviceType {
  Mobile,
  Desktop,
}

export interface IAppState {
  device: DeviceType,
  desc: string
}
@Module({ dynamic: true, store, name: 'app' })
class App extends VuexModule implements IAppState {
  public device = DeviceType.Desktop
  public desc = '美貌智慧于一身的年轻帅气的男人'
  public maodanzz: string = 'sb'
  @Mutation
  public Set_Cool_Name(name: string) {
    this.maodanzz = name
  }
  @Action
  public SetName(name: string) {
    this.Set_Cool_Name(name)
  }
}
export const AppModule = getModule(App)
