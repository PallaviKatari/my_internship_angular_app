import { Component, OnInit } from '@angular/core';
//for designing the form elements
import { FormGroup, FormControl } from '@angular/forms';
//to validate the input in the form element
import { Validators } from '@angular/forms';
import * as data from "../data/courses.json";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  //Event
  onClick() 
  {
        alert("Request Sent")
  }
  //form elements
  //courseTypes - array
  courseTypes = ['Dotnet', 'Java','Python','PHP','Azure','AWS'];
  myForm: FormGroup | any;
  username: FormControl | any;
  password: FormControl | any;
  courseType: FormControl | any;
  ngOnInit() {
    this.username = new FormControl('', [Validators.required, Validators.minLength(3)]);
    this.password = new FormControl('', [Validators.required, Validators.pattern('[0-9a-zA-Z]*'),Validators.minLength(7)]);
    this.courseType = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]);
    this.myForm = new FormGroup({
      'username': this.username, //John
      'password': this.password, //John123
      'courseType': this.courseType //Java
    });
  }

  courseimage:any=(data as any).default;
}
