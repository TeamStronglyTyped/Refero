import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Groups } from './models/groups';
import { Invitations } from './models/invitations';
import { GROUPS } from './mock-groups';
import { Observable } from 'rxjs';
import { UsersGroups } from './models/usersGroups';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  private url : string;

  constructor( private http:HttpClient, private userService: UsersService) {
    this.url="http://localhost:5050";
  }

  getGroups () : Groups [] {
    return GROUPS;
  }

  public createGroup( group : Groups ) : Observable< Groups > {
    return this.http.post< Groups >( this.url + "/post-new-group", group );
  }

  public postInvitations( invitation : Invitations ) : Observable < Invitations > {
    return this.http.post < Invitations > ( this.url + "/post-new-invitation", invitation );
  }

  public addUserToGroup ( userGroup : UsersGroups ) : Observable < UsersGroups > {
    return this.http.get < UsersGroups > ( this.url + '/add-user-to-group/' + userGroup.username + '/' + userGroup.groupId );
  }

  public getAllGroupsIn(): Observable<String[]> {
    return this.http.get<String[]>(this.url + "/get-groups-for/" + this.userService.getUser().userName);
  }

}
