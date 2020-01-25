import { Injectable } from '@angular/core';
import { Groups } from './models/groups';
import { GROUPS } from './mock-groups';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor() { }

  getGroups () : Groups [] {
    return GROUPS;
  }
}
