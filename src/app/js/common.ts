import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { baseInfo } from './appconfig';

interface ResData {
  data?: object;
  suc: boolean;
  message: string;
}

export const common = {
  turnbody: function turnBody(obj: object) {
    let query = '';
    let name, value, fullSubName, subName, subValue, innerObj, i;
    for ( name in obj) {
      value = obj[name];
      if (value instanceof Array) {
        for (i = 0; i < value.length; ++i) {
          subValue = value[i];
          fullSubName = name + '[' + i + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += turnBody(innerObj) + '&';
        }
      } else if (value instanceof Object) {
        for (subName in value) {
          subValue = value[subName];
          fullSubName = name + '[' + subName + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += turnBody(innerObj) + '&';
        }
      } else if (value !== undefined && value !== null) {
        query += encodeURIComponent(name) + '='
          + encodeURIComponent(value) + '&';
      }
    }

    return query.length ? query.substr(0, query.length - 1) : query;
  },
};

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
        'baseuserid': baseInfo.baseUserId ? baseInfo.baseUserId : ''
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
        'baseuserid': baseInfo.baseUserId ? baseInfo.baseUserId : ''
      })
    });
  }
}
