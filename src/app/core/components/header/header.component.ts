import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { TimeTableService } from '../../../timetable/services/time-table.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  weekDay = 'Monday';

  public subscriptions$ = new Subscription();
  constructor(private timetableService: TimeTableService) {}

  ngOnInit() {
    this.timetableService.message$.subscribe((msg) => {
      this.weekDay = msg;
    });
  }

  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
