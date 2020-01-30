import { Component, OnInit } from '@angular/core';
import { NavValuesService } from '../nav-values.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private service: NavValuesService) { }

  ngOnInit() {
  }

}
