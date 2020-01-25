import { Component } from '@angular/core';
import { NavValuesService } from './nav-values.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'refero-angular';

  navOneUrl: string;
  navTwoUrl: string;
  navOne: string;
  navTwo: string;

  constructor(private service: NavValuesService, private router: Router) {
    this.router.events.subscribe((value) => {
      this.service.navOne.subscribe(value => this.navOne = value);
      this.service.navTwo.subscribe(value => this.navTwo = value);
      this.service.navOneUrl.subscribe(value => this.navOneUrl = value);
      this.service.navTwoUrl.subscribe(value => this.navTwoUrl = value);
    });
  }

}
