import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BookingService } from 'src/app/booking.service';

@Component({
  selector: 'app-editbooking',
  templateUrl: './editbooking.component.html',
  styleUrls: ['./editbooking.component.css']
})
export class EditbookingComponent implements OnInit {
  bookingid=""
  dateOfBooking=""
  noOfPerson=0
  place=""
  act=""
  places: Array<any> = []
  activities: Array<any> = []
  constructor(private ar:ActivatedRoute,private bookingservice:BookingService,private router:Router,private toastr:ToastrService) {
    this.bookingid = ar.snapshot.params["bookingid"];
    this.bookingservice.getBookingByIdApi(this.bookingid).subscribe(resp => {
      if (resp.status == 200) {
        this.noOfPerson = resp.data.noOfPerson;
        this.act=resp.data.activities.act;
        this.place=resp.data.places.place;
        this.dateOfBooking=resp.data.dateOfBooking
      }
    }, err => {
      console.log(err);
      this.toastr.error("Something went Wrong Please TryAgain!!!","", { timeOut: 3000 })
    })
  }
  ngOnInit(): void {
    this.bookingservice.getAllPlacesApi().subscribe(resp => {
      this.places = resp.data;
      console.log(this.places);
    })
    this.bookingservice.getAllActivitiesApi().subscribe(resp => {
      this.activities = resp.data;
      console.log(this.activities);
    })
  }
  updateBooking() {

    let data = {"bookingid":this.bookingid, "place":this.place, "act":this.act,"noOfPerson":this.noOfPerson,"dateOfBooking":this.dateOfBooking}

    this.bookingservice.editBookingApi(data).subscribe(resp => {

      this.toastr.success("Booking modified..","",{timeOut:3000})
      this.router.navigateByUrl("/admin/listbookings")
    }, err => {

      this.toastr.error("Something went Wrong Please TryAgain!!!","", { timeOut: 3000 })
    })
  }
}
