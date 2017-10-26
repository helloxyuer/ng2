import { common } from './common';
import { InjectionToken } from '@angular/core';

export const baseInfo = {
  set entId(data: string){
    common.setSession('entId', data);
  },
  get entId(){
    return common.getSession('entId');
  },
  set userName(data: string){
    common.setSession('userName', data);
  },
  get userName(){
    return common.getSession('userName');
  },
  set baseUserId(data: string){
    common.setSession('baseUserId', data);
  },
  get baseUserId(){
    return common.getSession('baseUserId');
  },
  set userMobile(data: string){
    common.setSession('userMobile', data);
  },
  get userMobile(){
    return common.getSession('userMobile');
  },
  set userLogo(data: string){
    common.setSession('userLogo', data);
  },
  get userLogo(){
    return common.getSession('userLogo');
  },
  set entLogo(data: string){
    common.setSession('entLogo', data);
  },
  get entLogo(){
    return common.getSession('entLogo');
  },
  set entName(data: string){
    common.setSession('entName', data);
  },
  get entName(){
    return common.getSession('entName');
  },
}

/*非类依赖定义令牌*/
export const appconfigDi = new InjectionToken<any>('appconfig');
