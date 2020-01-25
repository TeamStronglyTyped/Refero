import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingGroupsComponent } from './pending-groups.component';

describe('PendingGroupsComponent', () => {
  let component: PendingGroupsComponent;
  let fixture: ComponentFixture<PendingGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
