import { Component, OnInit } from '@angular/core';
import { Groups } from '../models/groups';
import { GroupsService } from '../groups.service';
import { Users } from '../models/users';
import { UsersGroupsService } from '../users-groups.service';


@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  groups : Groups [];
  usersGroups : Users [];

  constructor( private groupsService : GroupsService, private usersGroupsService : UsersGroupsService ) { }

  getGroups() : void {
    this.groups = this.groupsService.getGroups();
  }

  getUsersGroups() : void {
    this.usersGroups = this.usersGroupsService.getUsers();
  }

  ngOnInit() {
    this.getGroups();
    this.getUsersGroups();
  }

}
