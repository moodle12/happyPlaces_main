import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import { ToastrService } from 'ngx-toastr'
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string =""
  password:string=""
  emailError=""
  passwordError=""
  constructor(private router:Router,private sessionService:SessionService,private toastr:ToastrService,private userservice:UserserviceService) { }

  ngOnInit(): void {
    console.log("login component");

  }

  login()
  {
    console.log(this.email);
    console.log(this.password);
    let isError=false
    if(this.email == "" || this.email.trim().length == 0 ){
      isError = true;
      this.emailError = "Please Enter Email"
    }else{
      this.emailError = ""
    }
    if(this.password == "" || this.password.trim().length == 0 ){
      isError = true;
      this.passwordError  = "Please Enter Password"
    }else{
      this.passwordError = ""
    }

    if(isError == true ){
      this.toastr.error("Please Enter Valid Credentials!!","Error",{timeOut:0})

    }else{
      //login
      let data= {
        "email":this.email,
        "password":this.password,
        "userType":"62bc524c605fd384303e7ed9"
      }

      this.sessionService.loginApi(data).subscribe(res => {
        if (res.status == -1) {
          this.toastr.error("Invalid Credentials!!","Error",{timeOut:100})
        }
        else{
          this.toastr.success("Logged In Successfully..","Success",{timeOut:100})
        console.log("api resp");
        console.log(res);
        //console.log(res.data.userType.userTypeName);
        if (res.data.userType.userTypeName=="Admin") {
          this.toastr.success("Logged In Successfully..","Success",{timeOut:100})
          this.router.navigateByUrl("/admin/dashboard")
        }
        else if(res.data.userType.userTypeName=="Vendor"){
          this.toastr.success("Logged In Successfully..","Success",{timeOut:100})
            this.router.navigateByUrl("/vendor/dashboard")
        }
        else if(res.data.userType.userTypeName=="Customer" || res.data.userType.userTypeName=="User1" ){
          localStorage.setItem('userID', res.data._id);
          console.log(localStorage.getItem('userID'));
          this.toastr.success("Logged In Successfully..","Success",{timeOut:100})
          this.router.navigateByUrl("/customer/tours")
        }
      }
      });

  }

}
}
