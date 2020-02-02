import { UsersService } from './users.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValidationInterceptService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("hello intercept");
    if (this.usersService.getIdToken()) {
      req = req.clone({
        setHeaders: {
          Authorization: this.usersService.getIdToken()
        },
        withCredentials: true
      })
      
      req = req.clone({headers: req.headers.set("SecurityToken",this.usersService.getSecurityToken())})
      
    }
    return next.handle(req);
  }

  constructor(private usersService: UsersService) { }
}
