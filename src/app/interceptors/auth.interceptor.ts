import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token =localStorage.getItem("token");  //tokenımızı yakaladık 
    let newRequest: HttpRequest<any>;
    newRequest= request.clone({
      headers:request.headers.set("Authorization","Bearer "+token)
    })
    return next.handle(newRequest);
  }
}


//request = urun eklemek için bilgileri girmek ve başmak 

// next = bir sonraki aşamada  uygulanacak olan 


//token koymak için üye olurken ona vereceğim tokenı (yetkiyi) koyuyoruz.