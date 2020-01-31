import { Component, OnInit } from '@angular/core';
import { NavValuesService } from '../nav-values.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private service: NavValuesService) {
    this.service.purgeNav();
    this.service.addNav("/my-lists","Lists");
    this.service.addNav("/groups","Groups");
    this.service.addNav("/account","Account");
    this.service.addNav("/logout","Logout");
    this.service.publish();
   }

  ngOnInit() {
  }

}
