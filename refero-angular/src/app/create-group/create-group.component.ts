import { Component, OnInit } from '@angular/core';
import { NavValuesService } from '../nav-values.service';
import { Users } from '../models/users';
import { Groups } from '../models/groups';
import { Invitations } from '../models/invitations';
import { GroupsService } from '../groups.service';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {

  users: string[];
  groupName: string;
  groupId: number;
  constructor(private service: NavValuesService, private groupService: GroupsService, private userService: UsersService) {
    this.service.setNavOne("Lists");
    this.service.setNavTwo("Groups");
    this.service.setNavOneUrl("/my-lists");
    this.service.setNavTwoUrl("/my-groups");
  }
  // if username is not empty
  // if username isn't creating group
  // if username exsists
  // if username hasn't already been added to invite list
  addUser(username) {
    let inviteUserFeedback = (<HTMLInputElement>document.getElementById('invite-user-feedback'));
    if (username !== "") {
      if (username === this.userService.getUser().userName) {
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

  createGroup() {
    let group = new Groups();
    group.groupName = (<HTMLInputElement>document.getElementById('inputGroup')).value;
    this.groupService.createGroup(group).subscribe(res => {
      console.log(this.userService.getUser().userName + " created a group");
      this.groupId = res.groupId;
      this.postInvitations();
    });

  }

  postInvitations() {
    // do we require groups to have more than the founding user?
    if (this.users.length > 0) {
      for (let user of this.users) {
        let invitation = new Invitations();
        invitation.groupId = this.groupId;
        invitation.status = 'pending';
        invitation.fromUser = this.userService.getUser().userName;
        invitation.toUser = user;
        this.groupService.postInvitations(invitation).subscribe(res => {

        });

      }
    }

  }

  ngOnInit() {
    this.users = [];
  }

}
