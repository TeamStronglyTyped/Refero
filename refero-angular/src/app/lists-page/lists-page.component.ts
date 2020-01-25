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
    this.service.setNavOne("Lists");
    this.service.setNavTwo("Groups");
    this.service.setNavOneUrl("/my-lists");
    this.service.setNavTwoUrl("/my-groups");
  }

  ngOnInit() {
  }

}
