import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Groups } from '../models/groups';
import { ListSideNavService } from '../list-side-nav.service';

@Component({
  selector: 'app-list-side-nav',
  templateUrl: './list-side-nav.component.html',
  styleUrls: ['./list-side-nav.component.css']
})
export class ListSideNavComponent implements OnInit {

  userGroups: Groups[]; 
  routes : Object [];

  constructor(private service: ListSideNavService, private router: Router) { 
    this.router.events.subscribe((value) => {
      this.service.getAllGroupsIn(0).subscribe(data => {
        this.userGroups = data;
        console.log(this.userGroups);
      });
    });
    this.routes = [ {route : 'my-lists',
                    name : 'My Lists'
                    }];
  }

  ngOnInit() {
  }

}