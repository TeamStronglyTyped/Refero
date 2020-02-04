import { TestBed, inject } from "@angular/core/testing";
import {Users} from "./models/users"
import { UsersService } from './users.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

describe('UsersService', () => {
  let uService: UsersService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      providers: [UsersService]
  });
   uService = TestBed.get(UsersService);
  });
 

describe("validAdmin", ()=>{
  it("should return false because of invalid username", ()=>{
    let user: Users = new Users
    user.userName = "user1"
    user.passWord = "Refero2020"
    user.email = "tesst@test.net"
    expect(uService.validAdmin(user)).toBe(false)
  })
  it("should return false because of invalid password", ()=>{
    let user: Users = new Users
    user.userName = "admin"
    user.passWord = "Password12"
    user.email = "tesst@test.net"
     expect(uService.validAdmin(user)).toBe(false)
  })
  it("should return true with  valid credentials", ()=>{
    let user: Users = new Users
    user.userName = "admin"
    user.passWord = "Refero2020!"
    user.email = "tesst@test.net"
     expect(uService.validAdmin(user)).toBe(true)
  })
});

});