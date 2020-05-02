import { Component, OnInit } from '@angular/core';
import { TimeTableService } from '../../services/time-table.service';

@Component({
  selector: 'app-week-days',
  templateUrl: './week-days.component.html',
  styleUrls: ['./week-days.component.scss']
})
export class WeekDaysComponent {
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
  }
}
