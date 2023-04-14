import { Component, OnInit } from '@angular/core';
import { ToursService } from 'src/app/tours.service';
import { VendorService } from 'src/app/vendor.service';

@Component({
  selector: 'app-listtours',
  templateUrl: './listtours.component.html',
  styleUrls: ['./listtours.component.css']
})
export class ListtoursComponent implements OnInit {

  constructor(private tourservice:ToursService,private vendor:VendorService) { }
  tours:Array<any>=[]
  vendors:Array<any>=[]
  ngOnInit(): void {
    this.vendor.getAllVendorsApi().subscribe(resp=>{
      this.vendors=resp.data
      console.log(this.vendors);
      for (let index = 0; index < this.vendors.length; index++) {
          if (this.vendors[index].user._id==localStorage.getItem('userID')) {
            this.tourservice.getToursByVendor(this.vendors[index]._id).subscribe(resp => {
              this.tours = resp.data;
              console.log(this.tours);
            })
        }
      }
    })
  }

}
