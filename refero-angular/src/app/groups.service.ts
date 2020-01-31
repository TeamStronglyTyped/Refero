import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Groups } from './models/groups';
import { Invitations } from './models/invitations';
import { GROUPS } from './mock-groups';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  private url : string;

  constructor(private http:HttpClient) { 
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


}
