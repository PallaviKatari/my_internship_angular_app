import { Component, OnInit } from '@angular/core';
import * as data from '../data/courses.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // //String Interpolation
  // title = 'my_internship_angular_app';
  // duration = '10hrs';
  // //Property Binding
  // image="../assets/images/img3.jpg";
  // //Event Binding
  // onclick()
  // {
  //   alert("I am an event binding");
  // }
  // //Two-Way Binding
  // name="John";

  course: any = (data as any).default;
  //*ngFor and *ngSwitch
  CourseDetails = [
    {
      "CourseName": "Dotnet",
      "CourseDescription": "Dotnet Full Stack - .NET MVC,.NET CORE,SQL SERVER",
      "Status":"InActive",
      "img": "https://th.bing.com/th/id/OIP._w4kEUAb7-YMEOc46aFcWQHaHD?w=171&h=180&c=7&r=0&o=5&dpr=1.56&pid=1.7"
    },
    {
      "CourseName": "Java",
      "CourseDescription": "Dotnet Full Stack - .NET MVC,.NET CORE,SQL SERVER",
      "Status":"InActive",
      "img":"https://th.bing.com/th/id/R.4f3b37b37b55aed0c11c64cc915cf0b7?rik=jkCsmuSEw1YE2Q&riu=http%3a%2f%2fzeptosystems.com%2fwp-content%2fuploads%2f2018%2f10%2fjava-1.jpg&ehk=HovaxzZAqHPCIjSELmwew9GO%2b5dvz2XtBgAezfMtUzA%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      "CourseName": "Python",
      "CourseDescription": "Dotnet Full Stack - .NET MVC,.NET CORE,SQL SERVER",
      "Status":"Active",
      "img":"https://dash.ps/wp-content/uploads/2020/08/php-framework-laravel-768x341.jpg"
    },
    {
      "CourseName": "PHP",
      "CourseDescription": "Dotnet Full Stack - .NET MVC,.NET CORE,SQL SERVER",
      "Status":"InActive",
      "img":"https://dash.ps/wp-content/uploads/2020/08/php-framework-laravel-768x341.jpg"
    },
    {
      "CourseName": "Testing",
      "CourseDescription": "Dotnet Full Stack - .NET MVC,.NET CORE,SQL SERVER",
      "Status":"Active",
      "img":"https://dash.ps/wp-content/uploads/2020/08/php-framework-laravel-768x341.jpg"
    },
  ]



}
