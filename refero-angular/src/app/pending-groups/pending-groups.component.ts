import { Component, OnInit } from '@angular/core';
import { NavValuesService } from '../nav-values.service';

@Component({
  selector: 'app-pending-groups',
  templateUrl: './pending-groups.component.html',
  styleUrls: ['./pending-groups.component.css']
})
export class PendingGroupsComponent implements OnInit {

  constructor( private service : NavValuesService ) { 
    this.service.setNavOne("Lists");
    this.service.setNavTwo("Groups");
    this.service.setNavOneUrl("/my-lists");
    this.service.setNavTwoUrl("/my-groups");
  }

  ngOnInit() {
  }

}
