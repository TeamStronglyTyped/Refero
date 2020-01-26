import { Component, OnInit } from '@angular/core';
import { NavValuesService } from '../nav-values.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {

  constructor( private service : NavValuesService ) {
    this.service.setNavOne("Lists");
    this.service.setNavTwo("Groups");
    this.service.setNavOneUrl("/my-lists");
    this.service.setNavTwoUrl("/my-groups");
   }

  ngOnInit() {
  }

}
