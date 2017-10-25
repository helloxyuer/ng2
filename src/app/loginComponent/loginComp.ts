import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpData } from '../js/httpMod';
import { baseInfo } from '../js/appconfig';
@Component({
  selector: 'app-login-comp',
  templateUrl: './loginComp.html',
  styleUrls: ['./loginComp.css'],
})
export class LoginComponent {
  @Input() userPassword = '1';
  @Input() userPhone = '18814887500';
  codelogin: Boolean = false;
  constructor(private http: HttpData, private  router: Router) {}
  goLogin(): void {
    const body = {
      'loginName' : this.userPhone,
      'password' : this.userPassword
    };
    this.http.postFrom('/unicron/ent/User/api/Account/authLogin.htm', body).subscribe(res => {
      if (res.suc) {
        baseInfo.baseUserId = res['data'].baseUserId;
        baseInfo.userMobile = res['data'].baseUserId;
        baseInfo.userName = res['data'].myName;
        baseInfo.userLogo = res['data'].logo;
        this.EnterEnt(res['data']);
      }
    });
  }
  EnterEnt(data): void {
    const entMsg = data.entVos[0];
    baseInfo.entId = entMsg.entId;
    baseInfo.entLogo = entMsg.imgPath;
    baseInfo.entName = entMsg.name;
    const thisdata = {
      entId: entMsg.entId,
    };
    this.http.postFrom('/unicron/ent/User/api/Account/affirmEnt.htm', thisdata).subscribe(res => {
      if (res.suc) {
        this.router.navigate(['/index']);
      }
    });
  }
}


