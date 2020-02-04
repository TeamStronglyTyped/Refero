import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationComponent ],
      imports: [FormsModule, HttpClientModule,RouterTestingModule.withRoutes([])  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('validatePasswordExecute', () => {
    it('should return true. valid format.', () => {
      let password: string ="fred11!!";
      expect(component.validatePasswordExecute(password)).toBe(true);
    });
  });

  describe('validatePasswordExecute', () => {
    it('should return false. too short.', () => {
      let password: string ="frd11!!";
      expect(component.validatePasswordExecute(password)).toBe(false);
    });
  });

  describe('validatePasswordExecute', () => {
    it('should return false. too long.', () => {
      let password: string ="frasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfd11!!";
      expect(component.validatePasswordExecute(password)).toBe(false);
    });
  });

  describe('validatePasswordExecute', () => {
    it('should return false. no special.', () => {
      let password: string ="frd1111";
      expect(component.validatePasswordExecute(password)).toBe(false);
    });
  });

  describe('validatePasswordExecute', () => {
    it('should return false. no number.', () => {
      let password: string ="frdaa!!";
      expect(component.validatePasswordExecute(password)).toBe(false);
    });
  });

  describe('validatePasswordExecute', () => {
    it('should return false. no letter.', () => {
      let password: string ="111111!!";
      expect(component.validatePasswordExecute(password)).toBe(false);
    });
  });

  describe('validateUsernameExecute', () => {
    it('should return true. correct format.', () => {
      let username: string ="freddy";
      expect(component.validateUsernameExecute(username)).toBe(true);
    });
  });

  describe('validateUsernameExecute', () => {
    it('should return false. too short.', () => {
      let username: string ="fredd";
      expect(component.validateUsernameExecute(username)).toBe(false);
    });
  });

  describe('validateUsernameExecute', () => {
    it('should return false. too long.', () => {
      let username: string ="freasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfdd";
      expect(component.validateUsernameExecute(username)).toBe(false);
    });
  });

  describe('validateUsernameExecute', () => {
    it('should return false. invalid characters.', () => {
      let username: string ="fr!#$edd";
      expect(component.validateUsernameExecute(username)).toBe(false);
    });
  });
  
  describe('validatePasswordConfirmExecute', () => {
    it('should return true. they match.', () => {
      let password1: string ="freddy11!!";
      let password2: string ="freddy11!!";
      expect(component.validatePasswordConfirmExecute(password1, password2)).toBe(true);
    });
  });

  describe('validatePasswordConfirmExecute', () => {
    it('should return false. they are different.', () => {
      let password1: string ="freddy11!!";
      let password2: string ="fredddy11!!";
      expect(component.validatePasswordConfirmExecute(password1, password2)).toBe(false);
    });
  });

  
  describe('validateEmailExecute', () => {
    it('should return true. good format.', () => {
      let email: string ="fred@gmail.com";
      expect(component.validateEmailExecute(email)).toBe(true);
    });
  });

  describe('validateEmailExecute', () => {
    it('should return true. bad format.', () => {
      let email: string ="fredgmail.com";
      expect(component.validateEmailExecute(email)).toBe(false);
    });
  });

});
