import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  constructor(private http: HttpClient) {}
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
      loginName : 18814887500,
      password : 123456
    }
    this.http.post('/unicron/ent/User/api/Account/authLogin.htm', params).subscribe(data => {
      this.results = data['results'];
    });
  }
  pwdFocus(): void {

  }
}


