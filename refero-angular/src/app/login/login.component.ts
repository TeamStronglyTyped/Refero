import { Component, OnInit, Input } from '@angular/core';
import { NavValuesService } from '../nav-values.service';
import { Router } from '@angular/router';
import { Users } from '../models/users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() user:Users;
  errorMessage: string;

  constructor(private service: NavValuesService, private usersService: UsersService, private router:Router) {
    /*this.service.setNavOne("Login");
    this.service.setNavTwo("Register");
    this.service.setNavOneUrl("/login");
    this.service.setNavTwoUrl("/register");*/
    this.service.purgeNav();
    this.service.addNav("/login","Login");
    this.service.addNav("/register","Register");
    this.service.publish();

    this.user = new Users();
    this.user.userName="";
    this.user.passWord="";
    this.user.email="";
    this.user.banned="";
    this.usersService.setUser(this.user);
  }

  ngOnInit(){
  }

  submit(): void {
    const usernameRegex : RegExp = new RegExp(/^[A-Za-z0-9]{6,30}$/);
    const passwordRegex : RegExp = new RegExp(/^(?=.*[A-Za-z])(?=.*[0-9]{2,})(?=.*[~!@#$%^&*])[A-Za-z0-9~!@#$%^&*]{8,40}$/);
    if (usernameRegex.test(this.user.userName) && passwordRegex.test(this.user.passWord)){
      this.errorMessage="";
      this.tryLogin();
    }else{
      this.errorMessage="Invalid Username or Password."
    }
  }

  forgotPassword(): void {
    this.errorMessage="A temporary password has been e-mailed to you."
  }

  tryLogin(){
    this.usersService.validateUser(this.user).subscribe(res=>{
      if (res==null){
        this.errorMessage="Login Credentials Incorrect!";
        this.user.userName="";
        this.user.passWord="";
      }else{
        if (res.banned == null){
          res.banned == "T";
        }
        if (res.banned == "F"){
          // user banned is false so login to application
          this.user=res;
          this.errorMessage="";
          this.usersService.setUser(this.user);
          this.router.navigate(['/my-lists']);
        } else {
          // ban flag is any thing other than false so user must be banned.  send nasty message.
          this.errorMessage="So Sorry. You've been BANNED Dude!";
          this.user.userName="";
          this.user.passWord="";
        }
      }
    });
  }
}


