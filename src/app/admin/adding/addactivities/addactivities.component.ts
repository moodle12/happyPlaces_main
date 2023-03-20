import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ActivityService } from 'src/app/activity.service';

@Component({
  selector: 'app-addactivities',
  templateUrl: './addactivities.component.html',
  styleUrls: ['./addactivities.component.css']
})
export class AddactivitiesComponent implements OnInit {

  constructor(private activityservice:ActivityService,private router:Router,private toastr:ToastrService) { }
  actType=""
  ngOnInit(): void {
  }
  addActivity(){
    let data= {
      "actType":this.actType
    }
    this.activityservice.activityApi(data).subscribe(res=>{
      console.log("api response ");
      console.log(res);
   });
   this.toastr.success("Activity Added..","",{timeOut:3000})
   this.router.navigateByUrl("/admin/listactivities");
  }
}
