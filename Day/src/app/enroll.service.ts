import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {
  OnEnrollClicked(title: string) {
    alert("Thank You for Enrolling To " + title + "course .");
  }

  constructor() { }
}
