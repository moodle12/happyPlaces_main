import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivityService } from 'src/app/activity.service';
import { VendorService } from 'src/app/vendor.service';
@Component({
  selector: 'app-vlistactivities',
  templateUrl: './vlistactivities.component.html',
  styleUrls: ['./vlistactivities.component.css']
})
export class VlistactivitiesComponent implements OnInit {
  activities: Array<any> = []
  vendors:Array<any>=[]
  constructor(private activityservice:ActivityService,private toastr:ToastrService,private vendor:VendorService) { }

  ngOnInit(): void {
  //   this.activityservice.getAllActivitiesApi().subscribe(resp => {
  //     this.activities = resp.data;
  //     console.log(this.activities);
  // })
  this.vendor.getAllVendorsApi().subscribe(resp=>{
    this.vendors=resp.data
    console.log(this.vendors);
    for (let index = 0; index < this.vendors.length; index++) {
        if (this.vendors[index].user._id==localStorage.getItem('userID')) {
          this.activityservice.getActivityByVendorApi(this.vendors[index]._id).subscribe(resp => {
            this.activities = resp.data;
            console.log(this.activities);
          })
      }
    }
  })
  }
  deleteActivity(activityId:any)
  {
    this.toastr.success("Activity Deleted","Warning",{timeOut:3000})
    this.activityservice.deleteActivityApi(activityId).subscribe(resp=>{
      console.log(resp);
    })
  }
}
