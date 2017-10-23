import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SetHeaderInterceptor } from '../js/httpInterceptor';

@Component({
  selector: 'app-login-comp',
  templateUrl: './loginComp.html',
  styleUrls: ['./loginComp.css'],
})
export class LoginComponent {
  @Input() msgLoginCode: string;
  @Input() userPassword: string;
  @Input() userPhone: string;
  codelogin: Boolean = false;
  results = '';
  constructor(private http: HttpClient , private headerIntor: SetHeaderInterceptor) {}
  switchLoginWay(way: Number): void {
    this.codelogin = (way === 1);
  }

  phoneFocus(): void { }
  checkPhone(): void {
    this.userPhone = this.userPhone.replace(/\D+/g, '');
    console.log(this.userPhone);
  }
  goLogin(): void {
    const params = {
      loginName : '18814887500',
      password : '123456'
    };
    this.http.post('/unicron/ent/User/api/Account/authLogin.htm', params).subscribe(data => {
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


