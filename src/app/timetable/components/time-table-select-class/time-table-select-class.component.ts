import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TimeTableFilters } from '../models/time-table.model';

@Component({
  selector: 'app-time-table-select-class',
  templateUrl: './time-table-select-class.component.html',
  styleUrls: ['./time-table-select-class.component.scss']
})
export class TimeTableSelectClassComponent {
  @Input() timeTableFilters: TimeTableFilters;
  @Output() find = new EventEmitter<any>();
  public form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      faculty: [''],
      year: [''],
      group: ['']
    });

    this.timeTableFilters = {
      faculties: [
        'Faculty 1',
        'Faculty of Computer Science'
      ],
      years: [
        'First year',
        'Second year'
      ],
      groups: [
        'A4',
        'C404'
      ]
    }
  }

  onSubmit() {
    this.find.emit(this.form.value);
  }
}
