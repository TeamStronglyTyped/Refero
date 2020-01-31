import { Component, OnInit } from '@angular/core';
import { Groups } from '../models/groups';
import { GroupsService } from '../groups.service';
import { Users } from '../models/users';
import { UsersGroupsService } from '../users-groups.service';
import { NavValuesService } from '../nav-values.service';

@Component({
  selector: 'app-my-groups',
  templateUrl: './my-groups.component.html',
  styleUrls: ['./my-groups.component.css']
})
export class MyGroupsComponent {

  groups : Groups [];
  usersGroups : Users [];
  

  constructor( private service : NavValuesService, private groupsService : GroupsService, private usersGroupsService : UsersGroupsService ) { 
    this.service.purgeNav();
    this.service.addNav("/my-lists","Lists");
    this.service.addNav("/my-groups","Groups");
    this.service.addNav("/account","Account");
    this.service.addNav("/logout","Logout");
    this.service.publish();
  }

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



