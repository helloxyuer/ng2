import { Component, Input } from '@angular/core';

@Component({
  selector: 'login-comp',
  templateUrl: './loginComp.html',
  styleUrls: ['./loginComp.css'],
})
export class LoginComponent {
  @Input() msgLoginCode: string;
  @Input() userPassword: string;
  @Input() userPhone: string;
  codelogin: Boolean = false;
  constructor() {

  }
  switchLoginWay(way: Number): void {
    this.codelogin = (way === 1);
  }

  phoneFocus(): void { }
  checkPhone(): void {
    this.userPhone = this.userPhone.replace(/\D+/g,'');
    console.log(this.userPhone);
  }
  goLogin(): void {
    console.log('132');
  }
  pwdFocus(): void {

  }
}


