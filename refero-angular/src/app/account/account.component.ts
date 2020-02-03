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
    const passwordRegex : RegExp = new RegExp(/^(?=.*[A-Za-z])(?=.*[0-9]{2,})(?=.*[~!@#$%^&*])[A-Za-z0-9~!@#$%^&*]{8,40}$/);
    if (passwordRegex.test(this.user.passWord)){
      this.passwordError="";
      this.passwordValid=true;
    }else{
      this.passwordError="Password must at least 8 characters, and have at least 1 letter, 2 numbers and 1 symbol."
      this.passwordValid=false;
    }
  }

  validatePasswordConfirm():void{
    if (this.user.passWord==this.passWordConfirm){
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
