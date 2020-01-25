import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavValuesService {

  private navOneUrlChange = new BehaviorSubject('');
  navOneUrl: Observable<string> = this.navOneUrlChange.asObservable();

  private navTwoUrlChange = new BehaviorSubject('');
  navTwoUrl: Observable<string> = this.navTwoUrlChange.asObservable();

  private navOneChange = new BehaviorSubject('');
  navOne: Observable<string> = this.navOneChange.asObservable();

  private navTwoChange = new BehaviorSubject('');
  navTwo: Observable<string> = this.navTwoChange.asObservable();

  constructor() { }

  setNavOne(navOne: string) {
    this.navOneChange.next(navOne);
  }

  setNavTwo(navTwo: string) {
    this.navTwoChange.next(navTwo);
  }

  setNavOneUrl(navOneUrl: string) {
    this.navOneUrlChange.next(navOneUrl);
  }

  setNavTwoUrl(navTwoUrl: string) {
    this.navTwoUrlChange.next(navTwoUrl);
  }
}
