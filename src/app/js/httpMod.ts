import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { baseInfo } from './appconfig';
import { common } from './common';

@Injectable()
export class HttpData extends HttpClient {
  postFrom(url: string, body?: any): Observable<any> {
    body = common.turnbody(body);
    return super.post(url, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'ClientType': 'Web',
        'Equipment': 'Web',
        'ClientSystem': 'Web',
        'baseuserid': baseInfo.baseUserId
      })
    });
  }
  postJson(url: string, body?: any): Observable<any> {
    body = common.turnbody(body);
    return super.post(url, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=utf-8',
        'ClientType': 'Web',
        'Equipment': 'Web',
        'ClientSystem': 'Web',
        'baseuserid': baseInfo.baseUserId
      })
    });
  }
}
