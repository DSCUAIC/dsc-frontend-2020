import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordRecoveryTwoComponent } from './password-recovery-two.component';

describe('PasswordRecoveryTwoComponent', () => {
  let component: PasswordRecoveryTwoComponent;
  let fixture: ComponentFixture<PasswordRecoveryTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordRecoveryTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordRecoveryTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
