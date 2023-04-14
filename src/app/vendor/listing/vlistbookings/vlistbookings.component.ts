import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/booking.service';
import { VendorService } from 'src/app/vendor.service';

@Component({
  selector: 'app-vlistbookings',
  templateUrl: './vlistbookings.component.html',
  styleUrls: ['./vlistbookings.component.css']
})
export class VlistbookingsComponent implements OnInit {
  vendors:Array<any>=[]
  bookings:Array<any>=[]
  constructor(private vendor:VendorService,private bookingservice:BookingService) { }

  ngOnInit(): void {
    this.vendor.getAllVendorsApi().subscribe(resp=>{
      this.vendors=resp.data
      console.log(this.vendors);
      for (let index = 0; index < this.vendors.length; index++) {
          if (this.vendors[index].user._id==localStorage.getItem('userID')) {
            this.bookingservice.getBookingByVendorApi(this.vendors[index]._id).subscribe(resp => {
              this.bookings = resp.data;
              console.log(this.bookings);
            })
        }
      }
    })
  }
  deleteBooking(bookingId:any)
  {
    alert("delete" + bookingId);
    this.bookingservice.deleteBookingApi(bookingId).subscribe(resp=>{
      console.log(resp);

    })
  }

}
