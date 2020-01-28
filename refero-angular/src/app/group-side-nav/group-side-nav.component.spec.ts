import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSideNavComponent } from './group-side-nav.component';

describe('GroupSideNavComponent', () => {
  let component: GroupSideNavComponent;
  let fixture: ComponentFixture<GroupSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
