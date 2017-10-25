import { Component, Input } from '@angular/core';
import { HttpData } from '../js/common';
import { baseInfo } from '../js/appconfig';
@Component({
  selector: 'app-login-comp',
  templateUrl: './loginComp.html',
  styleUrls: ['./loginComp.css'],
})
export class LoginComponent {
  @Input() userPassword = '123456';
  @Input() userPhone = '18814887500';
  codelogin: Boolean = false;
  constructor(private http: HttpData) {}
  switchLoginWay(way: Number): void {
    this.codelogin = (way === 1);
  }

  phoneFocus(): void { }
  goLogin(): void {
    const body = {
      'loginName' : this.userPhone,
      'password' : this.userPassword
    };
    this.http.postFrom('/unicron/ent/User/api/Account/authLogin.htm', body).subscribe(res => {
      baseInfo.baseUserId = res['data'].baseUserId;
      baseInfo.userMobile = res['data'].baseUserId;
      baseInfo.userName = res['data'].myName;
      baseInfo.userLogo = res['data'].logo;
      this.EnterEnt(res['data']);
    });
  }
  EnterEnt(data): void {
    const entMsg = data.entVos[0];
    baseInfo.entId = entMsg.entId;
    const thisdata = {
      entId: entMsg.entId,
    };
    this.http.postFrom('/unicron/ent/User/api/Account/affirmEnt.htm', thisdata).subscribe(res => {
    });
  }
}


