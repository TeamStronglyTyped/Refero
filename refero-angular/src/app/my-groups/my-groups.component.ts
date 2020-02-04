import { Component, OnInit } from '@angular/core';
import { Groups } from '../models/groups';
import { GroupsService } from '../groups.service';
import { Users } from '../models/users';
import { UsersGroupsService } from '../users-groups.service';
import { NavValuesService } from '../nav-values.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-my-groups',
  templateUrl: './my-groups.component.html',
  styleUrls: ['./my-groups.component.css']
})
export class MyGroupsComponent {

  groups : any [];
  usersGroups : Users [];
  groupIds : string [];
  currentUser : string;
  inAGroup : boolean;

  constructor( private service : NavValuesService, private groupsService : GroupsService, private usersService : UsersService ) { 
    this.service.purgeNav();
    this.service.addNav("/my-lists","Lists");
    this.service.addNav("/my-groups","Groups");
    this.service.addNav("/account","Account");
    this.service.addNav("/logout","Logout");
    this.service.publish();
    // this.currentUser = 'marsredsky';
    this.currentUser = this.usersService.getUser().userName;
    this.getGroupIds();
    this.inAGroup = false;
  }

  getGroups() : void {

    this.groupsService.getGroupIds( this.currentUser ).subscribe( res => {
      res.forEach( groupId => {
        this.groupsService.getGroupById( groupId ).subscribe( res => {
          let users = [];
          if ( res.groupName !== 'My Lists' ) {
          let group = { 
                      groupName : res.groupName, 
                      users : []
                      }

          this.groupsService.getUsersInGroup( groupId ).subscribe( res => {
              users = res;
              group.users = res;
              this.groups.push( group );
              
          } );
        }
        } )
      
      } );
  } )
  if ( this.groups.length > 0 ) {
    this.inAGroup = true;
  }
};

  getGroupIds() : void {
    this.groupsService.getGroupIds( this.currentUser ).subscribe( res => {
      this.groupIds = res;
      this.getGroups();
    } );
  }
  ngOnInit() {
    this.groups = [];
  }
}



