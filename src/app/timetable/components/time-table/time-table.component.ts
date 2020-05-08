import { TimeTableService } from './../../services/time-table.service';
import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.scss']
})
export class TimeTableComponent implements OnInit {
  @Input() courses: Course[] = [];

  constructor(private timeTableService: TimeTableService) { }

  ngOnInit(): void {
    this.timeTableService.message$.subscribe(day => {
      const subscription = this.timeTableService.getTimeTableData(day)
        .subscribe((data: Course[]) => {
          console.log(data);
          this.courses = data;
          subscription.unsubscribe();
        });
    });
  }
}
