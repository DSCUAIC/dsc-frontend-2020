import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTableSelectClassComponent } from './time-table-select-class.component';

describe('TimeTableSelectClassComponent', () => {
  let component: TimeTableSelectClassComponent;
  let fixture: ComponentFixture<TimeTableSelectClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeTableSelectClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTableSelectClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
