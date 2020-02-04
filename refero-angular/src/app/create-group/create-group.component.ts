import { Component, OnInit } from '@angular/core';
import { NavValuesService } from '../nav-values.service';
import { UsersGroups } from '../models/usersGroups';
import { Groups } from '../models/groups';
import { Invitations } from '../models/invitations';
import { GroupsService } from '../groups.service';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { ListService } from '../list.service';



@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {

  users: string[];
  groupName: string;
  groupId: number;
  currentUser: string;
  constructor(private service: NavValuesService, private groupService: GroupsService, 
    private userService: UsersService, private listService : ListService, private router : Router ) {
    this.service.purgeNav();
    this.service.addNav("/my-lists","Lists");
    this.service.addNav("/my-groups","Groups");
    this.service.addNav("/account","Account");
    this.service.addNav("/logout","Logout");
    this.service.publish();
    this.currentUser = this.userService.getUser().userName;
  }
  // * if username is not empty
  // * if username isn't creating group
  // * if username exists
  // * if username hasn't already been added to invite list
  addUser( username ) {
    let inviteUserFeedback = ( <HTMLInputElement>document.getElementById( 'invite-user-feedback' ) );
    if ( !this.isInvitedUserEmpty( username ) ) {
      if ( this.isInvitingSelf( username ) ) {
        inviteUserFeedback.innerText = '*Cannot invite yourself to a group';
        inviteUserFeedback.style.color = 'red';
      } else {
        this.userService.userNameIsAvailable(username).subscribe(res => {
          if (res === false) {
            if (this.users.includes(username)) {
              inviteUserFeedback.innerText = '*Cannot invite the same user twice';
              inviteUserFeedback.style.color = 'red';
            } else {
              inviteUserFeedback.innerText = 'User added to invite list';
              inviteUserFeedback.style.color = '#33ff00';
              let user = username;
              this.users.push(user);
              (<HTMLInputElement>document.getElementById("inputUser")).value = "";
            }
          } else {
            inviteUserFeedback.innerText = `*User does not exsist`;
            inviteUserFeedback.style.color = 'red';
          }
        });
      }
    } else {
      inviteUserFeedback.innerText = `*Must invite a user`;
      inviteUserFeedback.style.color = 'red';
    }
  }
  // * get group name from DOM
  // * use group service createGroup -> send group to spring, and return group with id
  // * call addUserToGroup method
  // * call post invitations
  createGroup() {
    let group = new Groups();
    group.groupName = ( <HTMLInputElement>document.getElementById( 'inputGroup' ) ).value;
    this.groupName = group.groupName;
    if ( this.isGroupNameEmpty( group.groupName ) ) {
      // instruct user to add group name
      console.log( 'no group name' );
    } else {
      this.groupService.createGroup(group).subscribe( res => {
        
        this.groupId = res.groupId;

        let userGroup = new UsersGroups();
        userGroup.username = this.currentUser;
        userGroup.groupId = this.groupId;
        this.addUserToGroup( userGroup );
        if ( this.users.length > 0 ) {
          this.postInvitations();
        }
    
      } );
  }

  }
  // * use group service to add current user to users_groups table through spring 
  addUserToGroup( userGroup : UsersGroups ) {

    this.groupService.addUserToGroup(userGroup).subscribe( res => {
     this.listService.setGroupName( this.groupName );
     this.router.navigate( ['/my-lists'] );
      
    });
  }

  // * loop through users list
  // * for each user create invitation object
  // * send invitation to the groupService postInivtations
  postInvitations() {
    // *** do we require groups to have atleast one person invited? ***
    if ( this.users.length > 0 ) {
      for ( let user of this.users ) {
        let invitation = new Invitations();
        invitation.groupId = this.groupId;
        invitation.status = 'pending';
        invitation.fromUser = this.userService.getUser().userName;
        invitation.toUser = user;
        this.groupService.postInvitations( invitation ).subscribe( res => {

        } );

      }
    }

  }

  isInvitedUserEmpty( username ) {
    if ( username === '' ) {
      return true;
    } else {
      return false;
    }
  }

  isInvitingSelf( username ) {
    if ( this.currentUser === username ) {
      return true;
    } else {
      return false;
    }
  }

  isGroupNameEmpty( groupName ) {
    if( groupName === '' ) {
      return true;
    } else {
      return false;
    }
  }

  

  ngOnInit() {
    this.users = [];
  }

}
