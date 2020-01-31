import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavValuesService {
  
  navGroup : NavGroup[]=new Array<NavGroup>();
  numLinks: number=0;

  invokeUpdate = new EventEmitter();
  subscriptionVar: Subscription;

  constructor() { 
    
  }

  addNav(url:string, nav:string){
    this.navGroup.push(new NavGroup());
    this.navGroup[this.numLinks].navUrlChange = new BehaviorSubject('');
    this.navGroup[this.numLinks].navChange = new BehaviorSubject('');
    this.navGroup[this.numLinks].navUrl = this.navGroup[this.numLinks].navUrlChange.asObservable();
    this.navGroup[this.numLinks].nav = this.navGroup[this.numLinks].navChange.asObservable();
    this.navGroup[this.numLinks].navUrlChange.next(url);
    this.navGroup[this.numLinks].navChange.next(nav);
    
    this.numLinks++;
  }

  purgeNav(){
    if(this.navGroup.length>0){
      this.navGroup=new Array<NavGroup>();
      this.numLinks=0;
    }
  }

  publish(){
    this.invokeUpdate.emit();
  }
  /********************************
  DELETE next 4 functions after all components are up to date with new nav bar update method
  *********************************/
  setNavOne(navOne: string) {
    return;
  }
  setNavTwo(navTwo: string) {
    return;
  }
  setNavOneUrl(navOneUrl: string) {
    return;
  }
  setNavTwoUrl(navTwoUrl: string) {
    return;
  }
}

class NavGroup  {
  navUrlChange: BehaviorSubject<string>;
  navUrl: Observable<string>;
  navChange: BehaviorSubject<string>;
  nav: Observable<string>;

  NavGroup(){
    
  }
}