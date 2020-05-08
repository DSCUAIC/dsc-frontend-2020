import { Course } from './../components/models/course.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimeTableService {
  public message$ = new Subject<string>();
  private readonly api = 'https://dsc-schedule.herokuapp.com/schedule';
  private readonly token = localStorage.getItem('token');
  constructor(private http: HttpClient) {
  }
  sendMessage(msg: string) {
    this.message$.next(msg);
  }

  private extractData(res: Response, selectedDay) {
    const courses: Course[] = [];
    const days = {
      Monday: 'Luni',
      Tuesday: 'Marti',
      Wednesday: 'Miercuri',
      Thursday: 'Joi',
      Friday: 'Vineri',
      Saturday: 'Luni',
      Sunday: 'Luni'
    };
    /*Un dictionar deoarece zilele in front erau in engleza si cele din back in romana, pt Sunday si
    Saturday am pus sa imi arate orarul tot pentru ziua de luni */
    let i;
    const body = res['schedule'][days[selectedDay]];
    for ( i = 0; i < body.length; i++) {
      const course = new Course( body[i]['Disciplina']);
      course.setTime(body[i]['De la'], body[i]['Pana la']);
      course.setTypeAndGroup( body[i]['Grupa'], body[i]['Tip']);
      course.setTeacherAndRoom( body[i]['Profesor'], body[i]['Sala']);
      courses[i] = course;
  }
    return courses;
  }
  public getTimeTableData(selectedDay: string): Observable<Course[]> {
   const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
    /* */
   const urlValue = `${this.api}/year/1/semester/1`;
   return this.http.get<any>(urlValue, {headers}).pipe(
     map(data => this.extractData(data, selectedDay))
   );
  }
}
