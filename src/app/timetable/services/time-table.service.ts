import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeTableService {
  public message$ = new Subject<string>();
  constructor(private http: HttpClient) {}
  sendMessage(msg: string) {
    this.message$.next(msg);
  }

  public getTimeTableData() {
    return this.http.get('https://api.openbrewerydb.org/breweries');
  }
}
