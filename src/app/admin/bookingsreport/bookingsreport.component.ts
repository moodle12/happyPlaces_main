import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BookingService } from 'src/app/booking.service';

@Component({
  selector: 'app-bookingsreport',
  templateUrl: './bookingsreport.component.html',
  styleUrls: ['./bookingsreport.component.css']
})
export class BookingsreportComponent implements OnInit {
  statuses: Array<any> = []
  bookings: Array<any> = []
  users: Array<any> = []
  places: Array<any> = []
  activity: Array<any> = []
  status="-1"
  dateOfBooking=""
  noOfPerson=0
  place=""
  act=""
  dtOptions:any={}
  constructor(private bookingservice:BookingService,private toastr:ToastrService) {
    // this.bookingservice.getAllUsersApi().subscribe(resp => {
    //   this.users = resp.data;
    //   console.log(this.users);
    // })
    // this.bookingservice.getAllPlacesApi().subscribe(resp => {
    //   this.places = resp.data;
    //   console.log(this.places);
    // })
    // this.bookingservice.getAllActivitiesApi().subscribe(resp => {
    //   this.activity = resp.data;
    //   console.log(this.activity);
    // })
    this.bookingservice.getAllStatusesApi().subscribe(resp => {
      this.statuses = resp.data;
      console.log(this.statuses);
    })
   }

  ngOnInit(): void {
  }
  getstatus()
  {
    this.bookingservice.getBookingByStatusApi(this.status).subscribe(resp=>{
      if (resp.status == 200) {
        this.users=resp.data;
        console.log(this.users);
        this.dtOptions = {
          search: {
            return: true,
          },
          dom: 'Bfrtip',
          buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
          ],
          export:true
        }
      }
    }, err => {
      console.log(err);
      this.toastr.error("Something went Wrong Please TryAgain!!!","", { timeOut: 3000 })
    })
  }

}
