import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TimeTableService } from '../../services/time-table.service';

@Component({
  selector: 'app-week-days',
  templateUrl: './week-days.component.html',
  styleUrls: ['./week-days.component.scss']
})
export class WeekDaysComponent {
  @Output() selectedDay: EventEmitter<string> = new EventEmitter();

  constructor(private _timetableService: TimeTableService) {}
  updateDay(day) {
    if (document.getElementsByClassName('picked-day').length)
      document
        .getElementsByClassName('picked-day')[0]
        .classList.remove('picked-day');
    document
      .getElementById(day.substring(0, 3).toLowerCase())
       .classList.add('picked-day');
    this._timetableService.sendMessage(day);
    this.sendValue(day);
  }
  sendValue(day: string) {
    this.selectedDay.emit(day);
  }
}
