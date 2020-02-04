import { Component, OnInit, Input } from "@angular/core";
import { ListService } from "../list.service";
import { Lists } from "../models/lists";
import { UsersService } from "../users.service";
import { RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {

  public lists: Lists[] = [];

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
          this.updateLists();
        });
      });
    }
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
    if (this.listService.subscription == undefined) {
      this.listService.subscription = this.listService.invokeUpdateList.subscribe(() => {
        this.lists = [];
        this.updateLists();
      });
    }
  }
}
