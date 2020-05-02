import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordRecoveryNewPasswordComponent } from './password-recovery-new-password.component';

describe('PasswordRecoveryNewPasswordComponent', () => {
  let component: PasswordRecoveryNewPasswordComponent;
  let fixture: ComponentFixture<PasswordRecoveryNewPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordRecoveryNewPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordRecoveryNewPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
