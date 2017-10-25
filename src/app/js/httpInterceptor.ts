import {Injectable } from '@angular/core';
import {Observable } from 'rxjs/observable';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpResponse } from '@angular/common/http';
import 'rxjs/Rx' ;

@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('send begin------');
    const started = Date.now();
    return next.handle(req).do(event => {
      if (event instanceof HttpResponse) {
        console.log(event.body.data);
        const elapsed = Date.now() - started;
        console.log(`send end------- ${req.urlWithParams} ------- ${elapsed} ms.`);
      }
    });
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
    return next.handle(authReq);
  }
}
