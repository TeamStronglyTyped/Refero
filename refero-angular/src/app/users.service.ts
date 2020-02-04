import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Users } from "./models/users";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  private url: string;
  private user: Users;
  private idToken: string = "";
  private securityToken: string = "";

  constructor(private http: HttpClient) {
    this.url = "http://localhost:5050";
    this.user = new Users();
  }

  public validateUser(user: Users): Observable<HttpResponse<Users>> {
    return this.http.post<Users>(this.url + "/login", user, {
      observe: "response"
    });
  }

  public userNameIsAvailable(userName: String): Observable<Boolean> {
    return this.http.get<Boolean>(this.url + "/register/" + userName);
  }

  public registerUser(user: Users): Observable<Users> {
    return this.http.post<Users>(this.url + "/register", user);
  }
  public updateUser(user: Users): Observable<Users> {
    return this.http.post<Users>(this.url + "/account", user);
  }
  public getAllUsers(): Observable<Users[]> {
    this.setIdToken("admin23");
    return this.http.get<Users[]>(this.url + "/get-all-users");
  }
  public getBannedUsers(): Observable<Users[]> {
    this.setIdToken("admin23");
    return this.http.get<Users[]>(this.url + "/get-banned-users");
  }
  public bannUser(user: Users) {
    this.setIdToken("admin23");
    return this.http.put<Users>(this.url + "/bann-user", user);
  }
  public restoreUser(user: Users) {
    this.setIdToken("admin23");
    return this.http.put<Users>(this.url + "/restore-user", user);
  }

  public logout() {
    return this.http.delete(this.url + "/logout");
  }

  public setUser(user: Users) {
    this.user = user;
  }

  public getUser(): Users {
    return this.user;
  }

  public validAdmin(user: Users): boolean {
    if (user.userName !== "admin") {
      return false;
    } else if (user.passWord !== "Refero2020!") {
      return false;
    } else {
      return true;
    }
  }

  public setSecurityToken(token: string) {
    this.securityToken = token;
  }

  public getSecurityToken(): string {
    return this.securityToken;
  }

  public setIdToken(id: string) {
    this.idToken = id;
  }

  public getIdToken(): string {
    return this.idToken;
  }

  public generateIdToken() {
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    const lengthOfCode = 30;
    let text = "";
    for (let i = 0; i < lengthOfCode; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    this.idToken = text;
  }
}
