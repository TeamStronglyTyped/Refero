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

  navGroup:NavGroup[] = new Array<NavGroup>();

  constructor(private service: NavValuesService, private router: Router) {

  }

  ngOnInit() {
    if(this.service.subscriptionVar==undefined){
      this.service.subscriptionVar=this.service.invokeUpdate.subscribe(()=>{
        this.buildNavBar();
      });
    }
  }

  buildNavBar(){
    this.navGroup = new Array<NavGroup>();
    var numItems=0;
    this.router.events.subscribe((value) => {
      var i:number=0;
      this.service.navGroup.forEach(n =>{
        if (numItems<this.service.navGroup.length){
          this.navGroup.push(new NavGroup());
          n.nav.subscribe(value => {
            if(value.length>0){
              this.navGroup[i].nav = value
              n.navUrl.subscribe(value => this.navGroup[i].navUrl = value);
            }
          });

        }
        i++;
        numItems++;
      })
      /*this.service.navOne.subscribe(value => this.navOne = value);
      this.service.navTwo.subscribe(value => this.navTwo = value);
      this.service.navOneUrl.subscribe(value => this.navOneUrl = value);
      this.service.navTwoUrl.subscribe(value => this.navTwoUrl = value);*/
    });
  }


}

class NavGroup  {
  public navUrl :string;
  public nav : string;

  NavGroup(){
    this.navUrl="";
    this.nav="";
  }
}
