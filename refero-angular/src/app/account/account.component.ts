import { Component, OnInit, Input } from '@angular/core';
import { NavValuesService } from '../nav-values.service';
import { UsersService } from '../users.service';
import { Users } from '../models/users';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() user:Users;
  passwordError: string = "";
  passwordConfirmError: string = "";
  emailError: string ="";
  passWordConfirm: string = "";
  passwordValid:boolean=false;
  passwordConfirmValid:boolean=false;
  emailValid:boolean=false;

  constructor(private service: NavValuesService, private usersService: UsersService) {
    this.service.purgeNav();
    this.service.addNav("/my-lists","Lists");
    this.service.addNav("/my-groups","Groups");
    this.service.addNav("/account","Account");
    this.service.addNav("/logout","Logout");
    this.service.publish();

    this.user=usersService.getUser();
   }

  ngOnInit() {
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

  changePassword():void{
    this.validatePassword();
    this.validatePasswordConfirm();
    if(this.passwordValid && this.passwordConfirmValid){
      var saveUser: Users = this.usersService.getUser();
      saveUser.passWord=this.user.passWord;
      this.usersService.updateUser(saveUser).subscribe(res=>{
        this.user=res;
      });
    }
  }

  changeEmail():void{
    this.validateEmail();
    if(this.emailValid){
      var saveUser: Users = this.usersService.getUser();
      saveUser.email=this.user.email;
      this.usersService.updateUser(saveUser).subscribe(res=>{
        this.user=res;
      });
    }
  }
}
