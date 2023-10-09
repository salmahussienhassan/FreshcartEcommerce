import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (localStorage.getItem('token')!== null ){
      const token:any=localStorage.getItem('token')

   request=request.clone({
        headers:request.headers.set('token',token)  
      })

      return next.handle(request);
    }
else{
  return next.handle(request);
}

  
  }
}
