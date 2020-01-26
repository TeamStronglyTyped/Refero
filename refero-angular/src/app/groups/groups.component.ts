import { Component, OnInit } from '@angular/core';
import { NavValuesService } from '../nav-values.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent {

  constructor( private service : NavValuesService ) { 
    this.service.setNavOne("Lists");
    this.service.setNavTwo("Groups");
    this.service.setNavOneUrl("/my-lists");
    this.service.setNavTwoUrl("/my-groups");
  }

  ngOnInit() {

  }
}


