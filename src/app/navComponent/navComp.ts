import { Component, Input } from '@angular/core';
import { HttpData } from '../js/httpMod';
import { baseInfo } from '../js/appconfig';

@Component({
  selector: 'app-nav-comp',
  templateUrl: './navComp.html',
  styleUrls: ['./navComp.css'],
})
export class NavComponent {
  entImgPath = baseInfo.entLogo;
  entName = baseInfo.entName;
  entAdmin = baseInfo.userName;
  constructor(private http: HttpData) {

  }
  goLogin(): void {
    const body = {};
    this.http.postFrom('/unicron/ent/User/api/Account/authLogin.htm', body).subscribe(res => {
    });
  }
}


