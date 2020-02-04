import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Lists } from "./models/lists";
import { ListItems } from "./models/listItems";
import { UsersService } from "./users.service";

@Injectable({
  providedIn: "root"
})
export class ListService {
  private url: string;
  private groupName: string = "";

  constructor(private http: HttpClient, private userService: UsersService) {
    this.url = "http://localhost:5050";
  }

  public getGroupName(): string {
    return this.groupName;
  }

  public setGroupName(groupName: string) {
    this.groupName = groupName;
  }

  public getAllLists(): Observable<Lists[]> {
    this.userService.setIdToken("admin23");
    return this.http.get<Lists[]>(this.url + "/get-all-lists");
  }

  public getListItems(): Observable<ListItems[]> {
    return this.http.get<ListItems[]>(this.url + "/get-list-items");
  }

  public addList(list: Lists) {
    if (this.validList(list)) {
      return this.http.post<Lists>(this.url + "/post-new-list", list);
    }
  }

  public delteList(id: number) {
    this.userService.setIdToken("admin23");
    return this.http.delete<Lists>(this.url + "/delte-list" + id);
  }

  public validList(list: Lists): boolean {
    if (!list.listName || !list.group || !list.owner) {
      return false;
    }
    if (list.group < 0) {
      return false;
    }
    return true;
  }
}
