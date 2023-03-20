import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/booking.service';

@Component({
  selector: 'app-addbookings',
  templateUrl: './addbookings.component.html',
  styleUrls: ['./addbookings.component.css']
})
export class AddbookingsComponent implements OnInit {
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
    this.bookingservice.getAllUsersApi().subscribe(resp => {
      this.users = resp.data;
      console.log(this.users);
    })
    this.bookingservice.getAllPlacesApi().subscribe(resp => {
      this.places = resp.data;
      console.log(this.places);
    })
    this.bookingservice.getAllActivitiesApi().subscribe(resp => {
      this.activities = resp.data;
      console.log(this.activities);
    })
    this.bookingservice.getAllStatusesApi().subscribe(resp => {
      this.statuses = resp.data;
      console.log(this.statuses);
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
