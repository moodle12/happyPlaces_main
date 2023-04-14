import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/booking.service';
import { ToursService } from 'src/app/tours.service';
import { ToastrService } from 'ngx-toastr';
import {MatDialog} from '@angular/material/dialog';
import { ToursComponent } from '../tours/tours.component';
import { PopupComponent } from '../popup/popup.component';
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

  startDate:String="";
  endDate:String="";
  user="-1"
  place="-1"
  act="-1"
  status="-1"
  noOfPerson=0
  dateOfBooking=""
  constructor(private bookingservice:BookingService,private router:Router,private tourservice:ToursService,private toastr:ToastrService,private dialogref:MatDialog) { }

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

    // this.startDate=this.startDate
    // console.log(this.startDate);

       this.tourservice.getToursByDate(this.startDate,this.endDate).subscribe(resp=>{
      this.tours=resp.data
      if(this.tours.length!=0)
      {
        this.toastr.success("There are tours available","Success",{timeOut:1000})
        this.dialogref.open(PopupComponent)
      }
      else
      {
        this.toastr.error("There are no tours available","Error",{timeOut:1000})
      }
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
