import { Component, OnInit } from '@angular/core';
//import the courses.json from data folder
import * as data from '../data/courses.json';
//access the API https://fakestoreapi.com/users
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  var1: any|undefined;
 //Dependency Injection
  constructor(public httpClient: HttpClient)
  {

  }
  //function
  //httpClient - 4 main functions 
  //get - read data
  //put - update data
  //post - add data
  //delete - delete data
  readData(){
  this.httpClient.get('https://fakestoreapi.com/users').subscribe((resp)=>{
  this.var1 = resp;
  });
  }

  ngOnInit(): void {
  }
  //Completed only the below
  course: any = (data as any).default;
  //Toggle effect to show and hide the customer details
  courseDetail = false;
  //Event for Show and Hide
  showUserDetailsToggle() {
    this.courseDetail = !this.courseDetail;//!false
  }
  //class to show the change in + and - in the button
  getClass() {
    var classList = '';
    if (this.courseDetail) {
      //font-awesome
      classList = 'fa fa-plus';
    } else {
      classList = 'fa fa-minus';
    }
    return classList;
  }
  //property mycolor
  mycolor:any|undefined="aqua";
  
}
