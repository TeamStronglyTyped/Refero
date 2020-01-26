import { Component, OnInit, Input } from '@angular/core';
import { NavValuesService } from '../nav-values.service';
import { Users } from '../models/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() user:Users;
  errorMessage: string;

  constructor(private service: NavValuesService) {
    this.service.setNavOne("Login");
    this.service.setNavTwo("Register");
    this.service.setNavOneUrl("/");
    this.service.setNavTwoUrl("/register");

    this.user = new Users();
    this.user.username="";
    this.user.password="";
    this.user.email="";
    this.user.banned="";
  }

  ngOnInit(){
  }

  submit(): void {
    const usernameRegex : RegExp = new RegExp(/^[A-Za-z0-9]{6,30}$/);
    const passwordRegex : RegExp = new RegExp(/^(?=.*[A-Za-z])(?=.*[0-9]{2,})(?=.*[~!@#$%^&*])[A-Za-z0-9~!@#$%^&*]{8,40}$/);
    if (usernameRegex.test(this.user.username) && passwordRegex.test(this.user.password)){
      this.errorMessage="";
    }else{
      this.errorMessage="Invalid Username or Password."
    }
  }

  forgotPassword(): void {
    this.errorMessage="A temporary password has been e-mailed to you."
  }
}
