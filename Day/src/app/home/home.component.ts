import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  v = {
    name: "AngularCourse",
    price: 888,
    available: true,
    color:"yellow"
}
}
