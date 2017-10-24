import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-comp',
  templateUrl: './loginComp.html',
  styleUrls: ['./loginComp.css'],
})
export class LoginComponent {
  @Input() userPassword = '123456';
  @Input() userPhone = '18814887500';
  codelogin: Boolean = false;
  constructor(private http: HttpClient) {}
  switchLoginWay(way: Number): void {
    this.codelogin = (way === 1);
  }

  phoneFocus(): void { }
  goLogin(): void {
    const body = {
      'loginName' : this.userPassword,
      'password' : this.userPhone
    };
    this.http.post('/unicron/ent/User/api/Account/authLogin.htm', body).subscribe(data => {
      console.log(data);
    }, error => {
      console.log('err');
    });
  }
  EnterEnt(data): void {
    const entMsg = data.entVos[0];
    const thisdata = {
      entId: entMsg.entId,
    };
    this.http.post('/unicron/ent/User/api/Account/affirmEnt.htm', thisdata).subscribe(res => {
      console.log(res);
    });
  }
}


