import { Component, OnInit, Input, NgModule } from '@angular/core';
import { NavValuesService } from '../nav-values.service';
import { Router } from '@angular/router';
import { Users } from '../models/users';
import { UsersService } from '../users.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [Input, NgModule  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*describe('validateSubmit', () => {
    it('should return false because of short userName', () => {
      let username: string ="fred";
      let password: string ="fred11!!";
      expect(component.validateSubmit(username, password)).toBe(false);
    });
  });*/

  /*describe('validateSubmit', () => {
    it('should return false because of userName with invalid characters', () => {
      expect(component.validateSubmit("fr!@#$ed","fred11!!")).toBe(false);
    });
  });*/

});
