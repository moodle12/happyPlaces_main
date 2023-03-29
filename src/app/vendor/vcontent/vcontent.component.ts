import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vcontent',
  templateUrl: './vcontent.component.html',
  styleUrls: ['./vcontent.component.css']
})
export class VcontentComponent implements OnInit {
  chart:any
  chart2:any
  chart3:any
  chart4:any
  bookings: Array<any> = []
  users:Array<any> = []
  vendors:Array<any> = []
  vendorCount=0
  userCount=0
  bookingCount=0
  constructor() { }

  ngOnInit(): void {
  }

}
