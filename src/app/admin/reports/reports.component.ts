import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  currentdate= new Date().getDate()
  currentmonth=new Date().getUTCMonth()
  currentyear=new Date().getFullYear()
  constructor() { }

  ngOnInit(): void {
  }

}
