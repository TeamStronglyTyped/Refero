import { Component, OnInit } from '@angular/core';
import { NavValuesService } from '../nav-values.service';

@Component({
  selector: 'app-pending-groups',
  templateUrl: './pending-groups.component.html',
  styleUrls: ['./pending-groups.component.css']
})
export class PendingGroupsComponent implements OnInit {

  constructor( private service : NavValuesService ) { 
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
