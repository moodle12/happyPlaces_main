import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/booking.service';
import { ToursService } from 'src/app/tours.service';
import {formatDate } from '@angular/common';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  users: Array<any> = []
  places: Array<any> = []
  activities: Array<any> = []
  statuses: Array<any> = []
  tours:Array<any>=[]

  startDate:Date=new Date();
  endDate:Date=new Date();
  user="-1"
  place="-1"
  act="-1"
  status="-1"
  noOfPerson=0
  dateOfBooking=""
  constructor(private bookingservice:BookingService,private router:Router,private tourservice:ToursService) { }

  ngOnInit(): void {
    this.tourservice.getAllToursApi().subscribe(resp=>{
      this.tours=resp.data
      console.log(this.tours);
    })
    // console.log(formatDate(this.startDate,'yyyy-MM-dd', 'en-US', '+0530'));
    // console.log(ISODate(this.startDate));

  }
  // change()
  // {
  //   console.log(this.startDate);

  // }
  getTours()
  {
    // console.log(this.startDate);
    // let startDate={
    //   "startDate":this.startDate
    // }

    this.startDate=this.startDate
    console.log(this.startDate);

       this.tourservice.getToursByDate(this.startDate,this.endDate).subscribe(resp=>{
      this.tours=resp.data
      console.log(this.tours);
    })
  }
  addbooking()
  {
    let data={
      "user":this.user,
      "place":this.place,
      "act":this.act,
      "status":this.status,
      "noOfPerson":this.noOfPerson,
      "dateOfBooking":this.dateOfBooking
    }

    this.bookingservice.BookingApi(data).subscribe(res=>{
      console.log("Booking response ");
      console.log(res);

   });
  }
}
