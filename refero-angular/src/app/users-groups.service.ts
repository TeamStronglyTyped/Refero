import { Injectable } from '@angular/core';
import { USERS } from './mock-users';
import { Users } from './models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersGroupsService {

  constructor() { }

  getUsers() : Users [] {
    return USERS;
  }

}
