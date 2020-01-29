import { Injectable } from '@angular/core';
import {  HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Users } from './models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url:string;

  constructor(private http:HttpClient) { 
    this.url="http://localhost:5050";
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
}
