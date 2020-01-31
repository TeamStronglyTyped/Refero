import { Component, OnInit } from "@angular/core";
import { Users } from "../models/users";
import { UsersService } from "../users.service";

@Component({
  selector: "app-banned-users",
  templateUrl: "./banned-users.component.html",
  styleUrls: ["./banned-users.component.css"]
})
export class BannedUsersComponent implements OnInit {
  private users: Users[];
  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.getBannedUsers();
  }
  getBannedUsers() {
    this.userService.getBannedUsers().subscribe(users => (this.users = users));
  }
}
