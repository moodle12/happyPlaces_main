import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import { ToastrService } from 'ngx-toastr'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  firstName:string=""
  lastName:string=""
  address:string=""
  mobileNo:string=""
  dob:string=""
  gender:string=""
  email:string="" //instance variable
  password:string=""

  firstNameError = ""
  emailError = ""
  constructor(private router:Router,private sessionService:SessionService,private toastr:ToastrService) { }

  ngOnInit(): void {
    console.log("signup component");
  }

  signup(){

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
        "userType":"62bc5258605fd384303e7edb"
      }
      this.sessionService.signupApi(data).subscribe(res=>{
        console.log("api response ");
        console.log(res);
        console.log(res.data.userType.userTypeName);

     });
     this.toastr.success("Signed Up Successfully..","",{timeOut:3000})
      this.router.navigateByUrl("/login");

    }
    //validation - format
    //email duplicate

    //db save

    //redirect login
  }


}
