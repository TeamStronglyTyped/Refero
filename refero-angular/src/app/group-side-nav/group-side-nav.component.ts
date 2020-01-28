import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-side-nav',
  templateUrl: './group-side-nav.component.html',
  styleUrls: ['./group-side-nav.component.css']
})
export class GroupSideNavComponent implements OnInit {
  routes : Object [];
  constructor() { 
    this.routes = [ {route : 'my-groups',
                    name : 'my groups'
                    }, 
                    {route: 'pending-groups',
                     name :'pending groups'
                    }, 
                    { route: 'create-group',
                      name : 'create group' } 
                    ];
  }

  ngOnInit() {
  }

}
