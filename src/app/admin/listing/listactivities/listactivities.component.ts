import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivityService } from 'src/app/activity.service';

@Component({
  selector: 'app-listactivities',
  templateUrl: './listactivities.component.html',
  styleUrls: ['./listactivities.component.css']
})
export class ListactivitiesComponent implements OnInit {

  constructor(private activityservice:ActivityService,private toastr:ToastrService) { }
  activities: Array<any> = []

  ngOnInit(): void {
    this.activityservice.getAllActivitiesApi().subscribe(resp => {
      this.activities = resp.data;
      console.log(this.activities);
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
