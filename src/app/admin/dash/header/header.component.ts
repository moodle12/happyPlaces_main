import { Component, OnInit } from '@angular/core';
import {formatDate } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  date=new Date()
  day= this.date.getDate()
  month=this.date.getUTCMonth()+1
  year=this.date.getFullYear()
  ngOnInit(): void {
  }


}
