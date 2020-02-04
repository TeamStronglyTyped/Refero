import { Component, OnInit } from "@angular/core";
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

  constructor(private listService: ListService, private userService: UsersService) {
    if (listService.getGroupName() == "") {
      listService.setGroupName("My Lists");
    }
  }

  addList() {
    let listName = (<HTMLInputElement>document.getElementById("newList")).value;
    if (listName != "") {
      let list: Lists = new Lists();
      list.listName = listName;
      list.owner = this.userService.getUser().userName;
      this.listService.getGroupIdForUserGroup(this.userService.getUser().userName, this.listService.getGroupName()).subscribe(res => {
        list.group = res;
        this.listService.addList(list).subscribe(created => { });
      });
    }
  }

  ngOnInit() { }
}
