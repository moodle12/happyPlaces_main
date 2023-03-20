import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { BookingService } from 'src/app/booking.service';
import { UserserviceService } from 'src/app/userservice.service';
import { VendorService } from 'src/app/vendor.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private bookingservice:BookingService,private userservice:UserserviceService,private vendorservice:VendorService) { }
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
  ngOnInit(): void {
  //   this.bookingservice.getAllBookingsApi().subscribe(resp => {
  //     this.bookings = resp.data;
  //     console.log(this.bookings);
  // })
    this.bookingservice.getThisMonthBookingApi().subscribe(resp => {
      // for (let index = 0; index < this.bookings.length; index++) {
      //   this.bookingCount = this.bookingCount+1
      // }
      this.bookings=resp.data;
      console.log(this.bookings);

       this.bookingCount = this.bookings.length


       this.chart3= new Chart("chart3",{
        type:"doughnut",
        data:{
          labels:["Total Bookings","This Month Booking"],
          datasets:[{
            label:"Bookings",
            data:[1,this.bookingCount],
            backgroundColor:["#8164fc","magenta"],
        }]
        }
      })
  })
  this.userservice.getAllUsersApi().subscribe(resp =>{
    this.users=resp.data
    this.userCount=this.users.length
  })
  this.vendorservice.getAllVendorsApi().subscribe(resp=>{
    this.vendors=resp.data
    this.vendorCount=this.vendors.length

    this.chart2= new Chart("chart2",{
      type:"pie",
      data:{
        labels:["customers","vendors","admin"],
        datasets:[{
          label:"Total Users",
          data:[5,this.vendorCount,2],
          backgroundColor:["#3b85c0","#fb7b8b","#623337"],
      }]
      }
    })
  })
    this.chart= new Chart("chart",{
      type:"bar",
      data:{
        labels:["jan","feb"],
        datasets:[{
          label:"Expense",
          data:[126,223],
          backgroundColor:"#29B6F6"
      }]
      }

    })

    this.chart4= new Chart("chart4",{
      type:"polarArea",
      data:{
        labels:["Positive Feedback","Negative Feedback"],
        datasets:[{
          label:"Total Feedbacks",
          data:[3,3],
          backgroundColor:["#3b85c0","orange"],
      }]
      }
    })


  }

}
