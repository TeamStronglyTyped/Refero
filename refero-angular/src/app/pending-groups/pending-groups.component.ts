import { Component, OnInit } from '@angular/core';
import { NavValuesService } from '../nav-values.service';
import { Invitations } from '../models/invitations';
import { GroupsService } from '../groups.service';
import { UsersService } from '../users.service';
import { UsersGroups } from '../models/usersGroups';

@Component({
  selector: 'app-pending-groups',
  templateUrl: './pending-groups.component.html',
  styleUrls: ['./pending-groups.component.css']
})
export class PendingGroupsComponent implements OnInit {
  public invitations : any [];
  private currentUser : string;
  constructor( private service : NavValuesService, private groupsService : GroupsService, private usersService : UsersService ) {
    this.service.purgeNav();
    this.service.addNav("/my-lists","Lists");
    this.service.addNav("/my-groups","Groups");
    this.service.addNav("/account","Account");
    this.service.addNav("/logout","Logout");
    this.service.publish();
    // *** CHANGE BACK TO THIS FOR PRODUCTION ***
    this.currentUser = usersService.getUser().userName;
    // *** DELETE THIS FOR PRODUCTION ***
    // this.currentUser = 'redranges';
    this.getPendingInvitations();
  }
  // * get pending invitations from groups service
  // * add invitation to invitations list
  getPendingInvitations() {
    this.groupsService.getPendingInvitations( this.currentUser ).subscribe( res => {

      res.forEach( element => {
        let invite = {
          invitationId : element.invitationId,
          fromUser : element.fromUser.userName,
          toUser : element.toUser.userName,
          groupName : element.groupId.groupName,
          groupId : element.groupId.groupId
        }
        this.invitations.push( invite );
      } );
      // console.log( this.invitations );
    } );
  }
  // * create invitation object
  // * update invitation status through group service
  // * remove buttons
  // * determine if accepted or rejected
  // * set feedback message
  // * if accepted add user to users groups through groups service
  updateStatus( status : string, invitationId : number, groupId : number ) {

    let invitation = new Invitations();
    invitation.status = status;
    invitation.invitationId = invitationId;
    this.groupsService.updateInvitationStatus( invitation ).subscribe( res => {

    } );

    let acceptCell = (<HTMLInputElement> document.getElementById( 'accept-cell-' +invitationId ) );
    let rejectCell = (<HTMLInputElement> document.getElementById( 'reject-cell-' +invitationId ) );
    let feedbackElement = ( <HTMLInputElement> document.getElementById( 'feedback-cell-' + invitationId ));
    acceptCell.parentNode.removeChild( acceptCell );
    rejectCell.parentNode.removeChild( rejectCell );
    if ( status === 'accepted' ) {

      feedbackElement.innerText = 'Accepted Invitation';
      feedbackElement.style.color = '#22ff00';

      let usersGroups = new UsersGroups();
      usersGroups.groupId = groupId;
      usersGroups.username = this.currentUser;

      this.groupsService.addUserToGroup( usersGroups ).subscribe( res => {

      } );

    } else {
      feedbackElement.innerText = 'Rejected Invitation';
      feedbackElement.style.color = '#ee3333';

    }
  }

  ngOnInit() {
    this.invitations = [];
  }

}
