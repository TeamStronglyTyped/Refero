import { Component, OnInit } from '@angular/core';
import { NavValuesService } from '../nav-values.service';

@Component({
  selector: 'app-lists-page',
  templateUrl: './lists-page.component.html',
  styleUrls: ['./lists-page.component.css']
})
export class ListsPageComponent implements OnInit {

  navOne: string;
  navTwo: string;

  constructor(private service: NavValuesService) {  
    this.service.purgeNav();
    this.service.addNav("/my-lists","Lists");
    this.service.addNav("/my-groups","Groups");
    this.service.addNav("/account","Account");
    this.service.addNav("/logout","Logout");
    this.service.publish();
  }

  ngOnInit() {
  }

}
