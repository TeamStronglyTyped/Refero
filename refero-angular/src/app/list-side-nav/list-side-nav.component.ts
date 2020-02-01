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
      this.userGroups = data;
      let i = 1;
      this.userGroups.forEach(group => {
        this.routes.push({ route: group + "-" + i, name: group});
        i = i + 1;
      });
    });
  }

  ngOnDestroy() {
    this.eventSubscription.unsubscribe();
  }
}
