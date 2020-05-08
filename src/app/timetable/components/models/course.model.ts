/*export class Course {

  startTime: Date;
  endTime: Date;
  title: string;
  room: string;

  constructor(startTime: Date, endTime: Date, title: string, room: string) {
    this.startTime = startTime;
    this.endTime = endTime;
    this.title = title;
    this.room = room;
  }
}*/

export class Course {
  startTime: Date;
  endTime: Date;
  group: string;
  title: string;
  type: string;
  teacher: string;
  room: string;

  constructor(subject: string) {
    this.title = subject;
  }

  public setTime(start: Date, end: Date) {
    this.startTime = start;
    this.endTime = end;
  }

  public setTypeAndGroup( group: string, type: string, ) {
   this.group = group;
   this.type = type;
  }

  public setTeacherAndRoom(teacher: string, room: string){
    this.teacher = teacher;
    this.room = room;
  }
}
