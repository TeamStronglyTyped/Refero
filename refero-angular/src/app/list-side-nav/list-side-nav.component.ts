import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { Groups } from "../models/groups";
import { ListSideNavService } from "../list-side-nav.service";
import { Subscription } from "rxjs";
import { element } from "protractor";

@Component({
  selector: "app-list-side-nav",
  templateUrl: "./list-side-nav.component.html",
  styleUrls: ["./list-side-nav.component.css"]
})
export class ListSideNavComponent implements OnInit {
  private eventSubscription = Subscription.EMPTY;
  userGroups: any[];
  routes: any[] = [{ route: "my-lists", name: "My Lists" }];

  constructor(private service: ListSideNavService, private router: Router) {}

  ngOnInit() {
    this.eventSubscription = this.service.getAllGroupsIn(0).subscribe(data => {
      if (data !== undefined && data.length != 0 ) {
        this.service.getAllGroupsNames(data).subscribe(groups => {
          this.userGroups = groups;
          this.userGroups.forEach(group => console.log(group));
        });
      }
    });
    // this.routes = [ {route : 'my-lists',
    //                 name : 'My Lists'
    //                 }];
  }

  ngOnDestroy() {
    this.eventSubscription.unsubscribe();
  }
}
