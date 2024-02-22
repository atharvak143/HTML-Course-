import { Component } from '@angular/core';
import { EnrollService } from '../enroll.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
})
export class JavascriptComponent {
  title = 'javascript';
  getcourse() {
    const enrollServices = new EnrollService();
    enrollServices.OnEnrollClicked(this.title);
  }
}
