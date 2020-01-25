import { Component, OnInit } from '@angular/core';
import { NavValuesService } from '../nav-values.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private service: NavValuesService) {
    this.service.setNavOne("Login");
    this.service.setNavTwo("Register");
    this.service.setNavOneUrl("/");
    this.service.setNavTwoUrl("/register");
  }

  ngOnInit() {
  }

}
