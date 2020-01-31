import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  private timeLeft: number = 3;
  private interval;

  constructor(private router:Router, private usersService: UsersService) { 
    this.startTimer();
  }
  

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval);
        this.usersService.logout().subscribe(res=>{
          this.router.navigate(['/login']);
        });
        
      }
    },750)
  }

  ngOnInit() {
  }

}
