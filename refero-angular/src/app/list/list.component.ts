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
  public selectedListName: string = "";

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
          this.listItems = [];
          this.selectedListName = "";
          this.updateLists();
        });
      });
    }
  }

  deleteList(listName: string) {
    if (listName != "") {
      this.listService.delteListByName(listName).subscribe(res => {
        this.lists = [];
        this.listItems = [];
        this.selectedListName = "";
        this.updateLists();
      });
    }
  }

  displayList(listName: string) {
    this.listItems = [];
    this.selectedListName = listName;
    this.listService.getListItemsByListName(listName).subscribe(res => {
      let stringList: string[] = res;
      stringList.forEach(element => {
        let str = element.split(',');
        let listIem: ListItems = new ListItems;
        listIem.itemId = parseInt(str[0]);
        listIem.list = parseInt(str[1]);
        listIem.listItem = str[2];
        listIem.status = str[3];
        listIem.creator = str[4];
        this.listItems.push(listIem);
      });
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
    this.listItems = [];
    this.selectedListName = "";
    this.updateLists();
  });

  this.listService.itemSubscription = this.listService.invokeUpdateListItems.subscribe(() => {
    this.displayList(this.selectedListName);
  });
}
}
