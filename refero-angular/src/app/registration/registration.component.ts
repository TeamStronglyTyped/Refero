import { Component, OnInit, Input } from '@angular/core';
import { NavValuesService } from '../nav-values.service';
import { Users } from '../models/users';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  @Input() user:Users;
  usernameError: string = "";
  passwordError: string = "";
  passwordConfirmError: string = "";
  emailError: string ="";
  passwordConfirm: string = "";
  usernameValid:boolean=false;
  passwordValid:boolean=false;
  passwordConfirmValid:boolean=false;
  emailValid:boolean=false;


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

  ngOnInit() {
  }

  validateUsername(): void{
    const usernameRegex : RegExp = new RegExp(/^[A-Za-z0-9]{6,30}$/);
    if (usernameRegex.test(this.user.username)){
      this.usernameError="";
      this.usernameValid=true;
    }else{
      this.usernameError="Username must be from 6 to 30 letters or numbers"
      this.usernameValid=false;
    }
  }

  validatePassword(): void{
    const passwordRegex : RegExp = new RegExp(/^(?=.*[A-Za-z])(?=.*[0-9]{2,})(?=.*[~!@#$%^&*])[A-Za-z0-9~!@#$%^&*]{8,40}$/);
    if (passwordRegex.test(this.user.password)){
      this.passwordError="";
      this.passwordValid=true;
    }else{
      this.passwordError="Password must at least 8 characters, and have at least 1 letter, 2 numbers and 1 symbol."
      this.passwordValid=false;
    }
  }

  validatePasswordConfirm():void{
    if (this.user.password==this.passwordConfirm){
      this.passwordConfirmError="";
      this.passwordConfirmValid=true;
    }else{
      this.passwordConfirmError="Passwords do not match."
      this.passwordConfirmValid=false;
    }
  }

  validateEmail():void{
    const emailRegex : RegExp= new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    //const emailRegex : RegExp = new RegExp( '/b[A-Z0-9._%+-]+@[A-Z0-9.-]+/.[A-Z]{2,}/b');
    if (emailRegex.test(this.user.email)){
      this.emailError="";
      this.emailValid=true;
    }else{
      this.emailError="Not a valid email address."
      this.emailValid=false;
    }
  }

  register():void{
    this.validateUsername();
    this.validatePassword();
    this.validatePasswordConfirm();
    this.validateEmail();
    if(this.usernameValid && this.passwordValid && this.passwordConfirmValid && this.emailValid){
      alert("registration success");
    }
  }
}
