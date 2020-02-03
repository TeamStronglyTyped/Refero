import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CreateGroupComponent } from './create-group.component';
import { HttpClientModule } from '@angular/common/http'; 
import { GroupSideNavComponent } from '../group-side-nav/group-side-nav.component';
import { RouterTestingModule } from '@angular/router/testing';



describe('CreateGroupComponent', () => {
  let component: CreateGroupComponent;
  let fixture: ComponentFixture<CreateGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGroupComponent, GroupSideNavComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([]) ]

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

  describe( 'isInvitedUserEmpty', () => {
    it('should return false because there is an invited user', () => {
      let invitedUser = 'testUser';
      expect( component.isInvitedUserEmpty( invitedUser ) ).toBe( false );
    });
  } );

  describe( 'isGroupNameEmpty', () => {
    it('should return true because there is no group name', () => {
      let groupName = '';
      expect( component.isGroupNameEmpty( groupName ) ).toBe( true );
    });
  } );

  describe( 'isGroupNameEmpty', () => {
    it('should return false because there is a group name provided', () => {
      let groupName = 'Dog';
      expect( component.isGroupNameEmpty( groupName ) ).toBe( false );
    });
  } );


});
