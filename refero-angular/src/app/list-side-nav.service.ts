import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Groups } from "./models/groups";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class ListSideNavService {
  userGroups: Groups;
  url: string;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:5050";
  }

  public getAllGroupsIn(listId: number): Observable<String[]> {
    return this.http.get<String[]>(this.url + "/get-groups-for/zachary");
  }

  public getAllGroupsNames(groupIds: String[]): Observable<String[]> {
    return this.http.post<String[]>(this.url + "/get-groups-names", groupIds);
  }
}
