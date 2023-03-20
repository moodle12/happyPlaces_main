import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from 'src/app/userservice.service';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  userid:String=""
  firstName = ""
  lastName = ""
   mobileNo= ""
  address = ""
  dob= ""
  constructor(private ar:ActivatedRoute, private userService:UserserviceService,private router:Router,private toastr:ToastrService) {
    // this.userid=this.ar.snapshot.params.userid
    this.userid = ar.snapshot.params["userid"];
    this.userService.getUserByIdApi(this.userid).subscribe(resp => {
      if (resp.status == 200) {
        this.firstName = resp.data.firstName;
        this.lastName = resp.data.lastName;
        this.mobileNo=resp.data.mobileNo;
        this.address=resp.data.address;
        this.dob=resp.data.dob;
      }
    }, err => {
      console.log(err);
      this.toastr.error("Something went Wrong Please TryAgain!!!","", { timeOut: 3000 })
    })
   }

   updateUser() {

    let data = {"userid":this.userid,"firstName":this.firstName,"lastName":this.lastName,"mobileNo":this.mobileNo,"address":this.address,"dob":this.dob}

    this.userService.editUserApi(data).subscribe(resp => {

      this.toastr.success("User modified..","",{timeOut:3000})
      this.router.navigateByUrl("/admin/listusers")
    }, err => {

      this.toastr.error("Something went Wrong Please TryAgain!!!","", { timeOut: 3000 })
    })
  }

  ngOnInit(): void {

  }
    // alert(this.userid)
  }


