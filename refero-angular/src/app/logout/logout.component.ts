import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { NavValuesService } from '../nav-values.service';
import { Users } from '../models/users';
import { ListService } from '../list.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  private timeLeft: number = 3;
  private interval;

  constructor(private router:Router, private usersService: UsersService, private service: NavValuesService, private listService: ListService) {
    this.listService.setGroupName("");
    this.service.purgeNav();
    this.service.addNav("/my-lists","Lists");
    this.service.addNav("/my-groups","Groups");
    this.service.addNav("/account","Account");
    this.service.addNav("/logout","Logout");
    this.service.publish();
    this.startTimer();
  }


  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval);
        this.usersService.logout().subscribe(res=>{
          this.usersService.setUser(new Users());
          this.usersService.setSecurityToken("");
          this.usersService.setIdToken("");
          this.router.navigate(['/login']);
        });

      }
    },750)
  }

  ngOnInit() {
  }

}
