import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';


import { CreateGroupComponent } from './create-group.component';
import { HttpClientModule } from '@angular/common/http'; 



describe('CreateGroupComponent', () => {
  let component: CreateGroupComponent;
  let fixture: ComponentFixture<CreateGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGroupComponent ],
      schemas : [ NO_ERRORS_SCHEMA ],
      imports: [HttpClientTestingModule]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe( 'isInvitedUserEmpty', () => {
    it('should return true because invited user is empty', () => {
      let invitedUser = '';
      expect( component.isInvitedUserEmpty( invitedUser ) ).toBe( true );
    });
  } );

});
