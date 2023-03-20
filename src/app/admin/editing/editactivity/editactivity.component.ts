import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ActivityService } from 'src/app/activity.service';

@Component({
  selector: 'app-editactivity',
  templateUrl: './editactivity.component.html',
  styleUrls: ['./editactivity.component.css']
})
export class EditactivityComponent implements OnInit {
  activityId:String=""
  actType = ""
  constructor(private ar:ActivatedRoute,private activityservice:ActivityService,private router:Router,private toastr:ToastrService) {
    this.activityId = ar.snapshot.params["activityId"];
    this.activityservice.getActivityByIdApi(this.activityId).subscribe(resp => {
      if (resp.status == 200) {
        this.actType = resp.data.actType;
      }
    }, err => {
      console.log(err);
      this.toastr.error("Something went Wrong Please TryAgain!!!","", { timeOut: 3000 })
    })
  }

  ngOnInit(): void {
  }
  updateActivity() {

    let data = {"activityId":this.activityId,"actType":this.actType}

    this.activityservice.editActivityApi(data).subscribe(resp => {

      this.toastr.success("Activity modified..","",{timeOut:3000})
      this.router.navigateByUrl("/admin/listactivities")
    }, err => {

      this.toastr.error("Something went Wrong Please TryAgain!!!","", { timeOut: 3000 })
    })
  }

}
