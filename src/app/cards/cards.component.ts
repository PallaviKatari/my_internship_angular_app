import { Component, OnInit } from '@angular/core';
//import the courses.json from data folder
import * as data from '../data/courses.json';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  var1: any|undefined;

  constructor(public httpClient: HttpClient)
  {

  }
  readData(){
  this.httpClient.get('https://fakestoreapi.com/users').subscribe((resp)=>{
  this.var1 = resp;
  });
  }

  ngOnInit(): void {
  }
  //Completed only the below
  course: any = (data as any).default;
  
}
