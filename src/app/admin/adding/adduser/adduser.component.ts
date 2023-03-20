import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/session.service';
import { UserserviceService } from 'src/app/userservice.service';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  firstName:string=""
  lastName:string=""
  address:string=""
  mobileNo:string=""
  dob:string=""
  gender:string=""
  email:string="" //instance variable
  password:string=""
  userType:string=""
  firstNameError = ""
  emailError = ""

  userTypes:Array<any> =[]
  constructor(private sessionService:SessionService,private userService:UserserviceService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.userService.getAllUserTypeApi().subscribe(resp => {
      this.userTypes = resp.data; // roleid rolename
      console.log(this.userTypes);

    })
  }
  saveUser(){

    console.log(this.email);//this -> email
    console.log(this.firstName);
    console.log(this.address);
    console.log(this.lastName);
    console.log(this.password);


    //validation - required
    let isError  = false
    if(this.firstName == "" || this.firstName.trim().length == 0 ){
      isError = true;
      this.firstNameError  = "Please Enter FirstName"
    }else{
      this.firstNameError = ""
    }

    //XX@XX.XXX
    if(this.email == "" || this.email.trim().length == 0 ){
      isError = true;
      this.emailError = "Please Enter Email"
    }else{
      this.emailError = ""
    }

    if(isError == true ){
      console.log("Error ");

    }else{
      //login
      let data= {
        "firstName":this.firstName,
        "email":this.email,
        "address":this.address,
        "mobileNo":this.mobileNo,
        "dob":this.dob,
        "gender":this.gender,
        "password":this.password,
        "lastName":this.lastName,
        "userType":this.userType
      }
      this.sessionService.signupApi(data).subscribe(res=>{
        console.log("api response ");
        console.log(res);
        console.log(res.data.userType.userTypeName);

     });
     this.toastr.success("User Added..","",{timeOut:3000})
      this.router.navigateByUrl("/admin/listusers");

    }
  }
}
