import { Component, OnInit } from "@angular/core";
import { Users } from "../models/users";
import { UsersService } from "../users.service";

@Component({
  selector: "app-all-users",
  templateUrl: "./all-users.component.html",
  styleUrls: ["./all-users.component.css"]
})
export class AllUsersComponent implements OnInit {
  users: Users[];
  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.getUsers();
  }
  getUsers(): void {
    this.userService.getAllUsers().subscribe(users => (this.users = users));
  }
  bannUser(user: Users): void {
    this.users = this.users.filter(user => user !== user);
    this.userService
      .bannUser(
        (user = {
          userName: user.userName,
          passWord: user.passWord,
          email: user.email,
          banned: "T"
        })
      )
      .subscribe();
    location.reload(false);
  }
}
