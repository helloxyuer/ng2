import {Injectable } from '@angular/core';
import {Observable } from 'rxjs/observable';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx' ;

@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('send begin...');
    return next.handle(req);
  }
}

@Injectable()
export class SetHeaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'ClientType': 'Web',
      'Equipment': 'Web',
      'ClientSystem': 'Web',
    });
    const authReq = req.clone({headers: headers});
    return next.handle(authReq).do(event => {
      console.log( event);
    });
  }
}
