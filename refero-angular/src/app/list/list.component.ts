import { Component, OnInit, Input } from "@angular/core";
import { ListService } from "../list.service";
import { Lists } from "../models/lists";
import { UsersService } from "../users.service";
import { ListItems } from '../models/listItems';

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {

  public lists: Lists[] = [];
  public listItems: ListItems[] = [];

  constructor(private listService: ListService, private userService: UsersService) {
    this.updateLists();
  }

  addList() {
    let listName = (<HTMLInputElement>document.getElementById("newList")).value;
    if (listName != "") {
      let list: Lists = new Lists();
      list.listName = listName;
      list.owner = this.userService.getUser().userName;
      this.listService.getGroupIdForUserGroup(this.userService.getUser().userName, this.listService.getGroupName()).subscribe(res => {
        list.group = res;
        this.listService.addList(list).subscribe(created => {
          this.lists = [];
          this.updateLists();
        });
      });
    }
  }

  deleteList(listName: string) {
    if (listName != "") {
      this.listService.delteListByName(listName).subscribe(res => {
        this.lists = [];
        this.updateLists();
      });
    }
  }

  displayList(listName: string) {
    this.listService.getListItemsByListName(listName).subscribe(res => {
    });
  }

  public updateLists() {
    if (this.listService.getGroupName() == "") {
      this.listService.setGroupName("My Lists");
    }
    this.listService.getListsInGroupName().subscribe(res => {
      res.forEach(list => {
        this.lists.push(list);
      });
    });
  }

  ngOnInit() {
    this.listService.subscription = this.listService.invokeUpdateList.subscribe(() => {
      this.lists = [];
      this.updateLists();
    });
  }
}
