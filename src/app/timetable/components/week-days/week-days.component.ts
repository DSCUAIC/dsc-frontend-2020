import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { TimeTableService } from '../../services/time-table.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-week-days',
  templateUrl: './week-days.component.html',
  styleUrls: ['./week-days.component.scss']
})
export class WeekDaysComponent implements OnInit, OnDestroy {
  public days = this.timetableService.days;

  private subscription$: Subscription = new Subscription();

  constructor(private timetableService: TimeTableService) {}

  ngOnInit() {
    this.subscription$.add(
      this.timetableService.message$.subscribe(sentDay => {
        const weekDay = this.days.find(day => day.name === sentDay);
        if (weekDay) {
          this.days.map(day => day.selected = false);
          weekDay.selected = true;
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

  updateDay(day) {
    this.timetableService.sendMessage(day);
  }
}
