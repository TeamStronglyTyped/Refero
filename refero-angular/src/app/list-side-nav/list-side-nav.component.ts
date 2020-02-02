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
  routes: any[] = [{ name: "My Lists" }];
  userGroups: any[];

  constructor(private service: ListSideNavService, private router: Router) {}

  ngOnInit() {
    this.eventSubscription = this.service.getAllGroupsIn().subscribe(data => {
      this.userGroups = data;
      this.userGroups.forEach(group => {
        this.routes.push({ name: group });
      });
    });
  }

  ngOnDestroy() {
    this.eventSubscription.unsubscribe();
  }
}
