import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //String Interpolation
  title = 'my_internship_angular_app';
  duration = '10hrs';
  //Property Binding
  image="../assets/images/img3.jpg";
  //Event Binding
  onclick()
  {
    alert("I am an event binding");
  }
  //Two-Way Binding
  name="John";

}
