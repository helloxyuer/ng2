import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

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
  post(url: string, body?: any, options?: any): Observable<any> {
    body = common.turnbody(body);
    return super.post(url, body, options);
  }
}
