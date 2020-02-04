import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subscription } from "rxjs";
import { Lists } from "./models/lists";
import { ListItems } from "./models/listItems";

@Injectable({
  providedIn: "root"
})
export class ListService {
  private url: string;
  private groupName: string = "";
  private groupId: number = -1;

  invokeUpdateList = new EventEmitter();
  subscription: Subscription;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:5050";
  }

  public getGroupName(): string {
    return this.groupName;
  }

  public setGroupName(groupName: string) {
    this.groupName = groupName;
    this.invokeUpdateLists();
  }

  public invokeUpdateLists() {
    this.invokeUpdateList.emit();
  }

  public getGroupId(): number {
    return this.groupId;
  }

  public setGroupId(groupId: number) {
    this.groupId = groupId;
  }

  public getAllLists(): Observable<Lists[]> {
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
    return this.http.delete<Lists>(this.url + "/delte-list" + id);
  }

  public getGroupIdForUserGroup(user: string, group: string) {
    return this.http.get<number>(this.url + "/get-groupid-for-user-group/" + user + "/" + group);
  }

  public getListsInGroupName() {
    return this.http.get<Lists[]>(this.url + "/get-lists-in-group-name/" + this.getGroupName());
  }

  public getListItemsByListName(listName: string) {
    return this.http.get<ListItems[]>(this.url + "/get-list-items-by-list-name/" + listName);
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
