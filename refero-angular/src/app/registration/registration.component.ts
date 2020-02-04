import { Component, OnInit, Input } from '@angular/core';
import { NavValuesService } from '../nav-values.service';
import { Users } from '../models/users';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';


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
  passWordConfirm: string = "";
  usernameValid:boolean=false;
  passwordValid:boolean=false;
  passwordConfirmValid:boolean=false;
  emailValid:boolean=false;


  constructor(private service: NavValuesService, private router:Router, private usersService: UsersService) {
    this.service.purgeNav();
    this.service.addNav("/login","Login");
    this.service.addNav("/register","Register");
    this.service.publish();

    this.user = new Users();
    this.user.userName="";
    this.user.passWord="";
    this.user.email="";
    this.user.banned="";
  }

  ngOnInit() {
  }
  validateUsername(): void{
    this.usernameValid=this.validateUsernameExecute(this.user.userName);
  }
  validateUsernameExecute(userName: string): boolean{
    const usernameRegex : RegExp = new RegExp(/^[A-Za-z0-9]{6,30}$/);
    if (usernameRegex.test(userName)){
      this.usernameError="";
      return true;
    }else{
      this.usernameError="Username must be from 6 to 30 letters or numbers"
      return false;
    }
  }

 
  validatePassword(): void{
    this.passwordValid=this.validatePasswordExecute(this.user.passWord);
  }

  validatePasswordExecute(passWord: string): boolean{
    const passwordRegex : RegExp = new RegExp(/^(?=.*[A-Za-z])(?=.*[0-9]{2,})(?=.*[~!@#$%^&*])[A-Za-z0-9~!@#$%^&*]{8,40}$/);
    if (passwordRegex.test(passWord)){
      this.passwordError="";
      return true;
    }else{
      this.passwordError="Password must at least 8 characters, and have at least 1 letter, 2 numbers and 1 symbol."
      return false;
    }
  }
  validatePasswordConfirm():void{
    this.passwordConfirmValid=this.validatePasswordConfirmExecute(this.passWordConfirm, this.user.passWord);
  }
  validatePasswordConfirmExecute(passWordConfirm: string, passWord: string):boolean{
    if (passWord==passWordConfirm){
      this.passwordConfirmError="";
      return true;
    }else{
      this.passwordConfirmError="Passwords do not match."
      return false;
    }
  }
  validateEmail():void{
    this.emailValid=this.validateEmailExecute(this.user.email);
  }

  validateEmailExecute(email: string):boolean{
    const emailRegex : RegExp= new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (emailRegex.test(email)){
      this.emailError="";
      return true;
    }else{
      this.emailError="Not a valid email address."
      return false;
    }
  }

  register():void{
    this.serverValidateUsername();
    this.validatePassword();
    this.validatePasswordConfirm();
    this.validateEmail();
    if(this.usernameValid && this.passwordValid && this.passwordConfirmValid && this.emailValid){
      this.user.banned="F";
      this.usersService.registerUser(this.user).subscribe(res=>{
        this.user=res;
        if (this.user){
          this.router.navigate(['/']);
        }
      });
    }
  }

  serverValidateUsername(){
    this.validateUsername();
    if(this.usernameValid){
      this.usersService.userNameIsAvailable(this.user.userName).subscribe(res=>{
        var isAvailable: Boolean = res;
        if(!isAvailable){
          this.usernameValid=false;
          this.usernameError="Sorry. This Username is not available.";
        }
      });      
    }
  }

  
}
