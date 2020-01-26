import { Component, OnInit } from '@angular/core';
import { NavValuesService } from '../nav-values.service';
import { Users } from '../models/users';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {
  
  users : string [];
  constructor( private service : NavValuesService ) {
    this.service.setNavOne("Lists");
    this.service.setNavTwo("Groups");
    this.service.setNavOneUrl("/my-lists");
    this.service.setNavTwoUrl("/my-groups");
   }

   addUser( username ) {
     if ( username !== "" ) {
      let user = username;
      this.users.push( user );
      (<HTMLInputElement>document.getElementById( "inputUser" )).value = "";
     }

   }

  ngOnInit() {
    this.users = [];
  }

}
