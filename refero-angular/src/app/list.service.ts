import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subscription } from "rxjs";
import { Lists } from "./models/lists";
import { ListItems } from "./models/listItems";
import { UsersService } from "./users.service";

@Injectable({
  providedIn: "root"
})
export class ListService {
  private url: string;
  private groupName: string = "";
  private groupId: number = -1;

  invokeUpdateListItems = new EventEmitter();
  itemSubscription: Subscription;

  invokeUpdateList = new EventEmitter();
  subscription: Subscription;

  constructor(private http: HttpClient, private userService: UsersService) {
    this.url = "http://3.134.109.60:5050";
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

  public updateListItems() {
    this.invokeUpdateListItems.emit();
  }

  public getGroupId(): number {
    return this.groupId;
  }

  public setGroupId(groupId: number) {
    this.groupId = groupId;
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

  public delteListByName(listName: string) {
    if (this.getGroupName() == 'My Lists') {
      return this.http.delete<Lists>(this.url + "/delete-list-by-name-and-owner/" + listName + "/" + this.userService.getUser().userName);
    }
    else {
      return this.http.delete<Lists>(this.url + "/delete-list-by-name/" + listName);
    }
  }

  public delteList(id: number) {
    this.userService.setIdToken("admin23");
    return this.http.delete<Lists>(this.url + "/delete-list/" + id);
  }

  public getGroupIdForUserGroup(user: string, group: string) {
    return this.http.get<number>(
      this.url + "/get-groupid-for-user-group/" + user + "/" + group
    );
  }

  public getListsInGroupName() {

    if (this.getGroupName() == 'My Lists') {
      return this.http.get<Lists[]>(
        this.url + "/get-lists-in-group-name/" + this.getGroupName() + "/" + this.userService.getUser().userName
      );
    }
    else {
      return this.http.get<Lists[]>(
        this.url + "/get-lists-in-group-name2/" + this.getGroupName()
      );
    }
  }

  public getListItemsByListName(listName: string) {
    return this.http.get<string[]>(this.url + "/get-list-items-by-list-name/" + listName);
  }

  public getListIdByNameAndOwner(listName: string) {
    return this.http.get<number>(this.url + "/get-list-id-by-name-and-owner/" + listName + "/" + this.userService.getUser().userName);
  }

  public postNewListItem(listItem: ListItems) {
    listItem.creator = this.userService.getUser().userName;
    return this.http.post<ListItems>(this.url + "/post-new-list-item", listItem);
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
