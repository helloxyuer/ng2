import {Injectable } from '@angular/core';
import {Observable } from 'rxjs/observable';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req);
  }
}

@Injectable()
export class SetHeaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = req.headers;
    headers.set('Content-Type' , 'application/x-www-form-urlencoded');
    headers.set('clientType' , 'Web');
    headers.set('Equipment' , 'Web');
    headers.set('ClientSystem' , 'Web');
    const authReq = req.clone({headers: headers});
    return next.handle(authReq);
  }
}
