import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/booking.service';

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

  user="-1"
  place="-1"
  act="-1"
  status="-1"
  noOfPerson=0
  dateOfBooking=""
  constructor(private bookingservice:BookingService,private router:Router) { }

  ngOnInit(): void {
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
