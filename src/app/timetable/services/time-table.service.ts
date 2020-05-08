import { Course } from './../components/models/course.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TimeTableService {
  public readonly days = [
    { name: 'Monday', display: 'MON', selected: false },
    { name: 'Tuesday', display: 'TUE', selected: false },
    { name: 'Wednesday', display: 'WED', selected: false },
    { name: 'Thursday', display: 'THU', selected: false },
    { name: 'Friday', display: 'FRI', selected: false },
    { name: 'Saturday', display: 'SAT', selected: false },
    { name: 'Sunday', display: 'SUN', selected: false },
  ];

  public message$ = new BehaviorSubject<string>(this.getCurrentDay());
  private token = localStorage.getItem('token');

  constructor(private http: HttpClient) {}

  sendMessage(msg: string) {
    this.message$.next(msg);
  }

  private extractData(res: any, selectedDay: string) {
    const days = {
      Monday: 'Luni',
      Tuesday: 'Marti',
      Wednesday: 'Miercuri',
      Thursday: 'Joi',
      Friday: 'Vineri',
      Saturday: 'Luni',
      Sunday: 'Luni'
    };

    const body = res.schedule[days[selectedDay]];

    return body.map(item => {
      const course = new Course(item.Disciplina);
      course.setTime(item['De la'], item['Pana la']);
      course.setTypeAndGroup( item.Grupa, item.Tip);
      course.setTeacherAndRoom( item.Profesor, item.Sala);
      return course;
    });
  }

  public getTimeTableData(selectedDay: string): Observable<Course[]> {
    this.token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });

    const urlValue = `${environment.url}/schedule/year/1/semester/1`;
    return this.http.get<any>(urlValue, { headers }).pipe(
      map(data => this.extractData(data, selectedDay))
    );
  }

  private getCurrentDay(): string {
    console.log((new Date()).getDay());
    const currentDay = ((new Date()).getDay() + 6) % 7;
    return this.days[currentDay].name;
  }
}
