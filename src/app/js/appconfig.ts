export const baseInfo = {
  set entId(data){
    sessionStorage.setItem('entId', data);
  },
  get entId(){
    return sessionStorage.getItem('entId');
  },
  set userName(data){
    sessionStorage.setItem('userName', data);
  },
  get userName(){
    return sessionStorage.getItem('userName');
  },
  set baseUserId(data){
    sessionStorage.setItem('baseUserId', data);
  },
  get baseUserId(){
    return sessionStorage.getItem('baseUserId');
  },
  set userMobile(data){
    sessionStorage.setItem('userMobile', data);
  },
  get userMobile(){
    return sessionStorage.getItem('userMobile');
  },
  set userLogo(data){
    sessionStorage.setItem('userLogo', data);
  },
  get userLogo(){
    return sessionStorage.getItem('userLogo');
  },
}
