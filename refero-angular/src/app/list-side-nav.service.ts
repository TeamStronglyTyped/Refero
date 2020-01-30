import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Groups } from './models/groups';

@Injectable({
  providedIn: 'root'
})
export class ListSideNavService {

  userGroups: Groups;
  url: string;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:5050";
  }

  public getAllGroupsIn(listId: number) {
    return this.http.get<Groups[]>(this.url);
  }
}
