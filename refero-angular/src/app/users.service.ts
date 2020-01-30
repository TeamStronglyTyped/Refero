import { Injectable } from '@angular/core';
import {  HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Users } from './models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url:string;
  private user:Users;

  constructor(private http:HttpClient) { 
    this.url="http://localhost:5050";
    this.user=new Users;
  }

  

  public validateUser(user: Users): Observable<Users> {
    return this.http.post<Users>(this.url+"/login", user);
  }

  public userNameIsAvailable(userName: String): Observable<Boolean> {
    return this.http.get<Boolean>(this.url+"/register/"+userName);
  }

  public registerUser(user: Users): Observable<Users> {
    return this.http.post<Users>(this.url+"/register",user);
  }

  public setUser(user: Users){
    this.user=user;
  }

  public getUser(): Users{
    return this.user;
  }
}
