import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }
  date_today:string|undefined;

  ngOnInit(): void {
    this.date_today=new Date().toDateString();
  }

}
