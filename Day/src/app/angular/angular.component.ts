import { Component } from '@angular/core';
import { EnrollService } from '../enroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent {
  title = "angular"
  getcourse() {
    const enrollServices = new EnrollService();
    enrollServices.OnEnrollClicked(this.title);
  }
}
