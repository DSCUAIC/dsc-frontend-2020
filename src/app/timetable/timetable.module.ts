import { NgModule } from '@angular/core';
import { TimeTableComponent } from './components/time-table/time-table.component';
import { WeekDaysComponent } from './components/week-days/week-days.component';
import { CourseComponent } from './components/course/course.component';
import { CourseTimeComponent } from './components/course-time/course-time.component';
import { CourseContentComponent } from './components/course-content/course-content.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TimeTableSelectClassComponent } from './components/time-table-select-class/time-table-select-class.component';

@NgModule({
  declarations: [
    TimeTableComponent,
    WeekDaysComponent,
    CourseComponent,
    CourseTimeComponent,
    CourseContentComponent,
    TimeTableSelectClassComponent
  ],

  exports: [
    TimeTableComponent,
    TimeTableSelectClassComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ]
})
export class TimeTableModule { }
