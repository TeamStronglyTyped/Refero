import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Groups } from "./models/groups";
import { Observable } from 'rxjs';
import { UsersService } from './users.service';

@Injectable({
  providedIn: "root"
})
export class ListSideNavService {
  userGroups: Groups;
  url: string;

  constructor(private http: HttpClient, private userService: UsersService) {
    this.url = "http://3.134.109.60:5050";
  }

  public getAllGroupsIn(): Observable<String[]> {
    return this.http.get<String[]>(this.url + "/get-groups-for/" + this.userService.getUser().userName);
  }
}
