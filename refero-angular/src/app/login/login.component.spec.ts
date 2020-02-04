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
      imports: [Input, HttpClientTestingModule, RouterTestingModule.withRoutes([]), NgModule  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //describe('validateSubmit', () => {
  //  it('should return false because of short userName', () => {
  //    expect(component.validateSubmit("fred","fred11!!")).toBe(false);
  //  });
  //});

});
