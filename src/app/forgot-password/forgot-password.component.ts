import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  email=""
  constructor(private sessionService:SessionService,private router:Router) { }

  ngOnInit(): void {
  }
  forgetPassword(){
    let user= {"email":this.email}
    this.sessionService.forgetPasswordApi(user).subscribe(resp => {
      if(resp.status == 200){
        alert("OTP SENT");
        //reset password
        //otp email password confirmpassword
        this.router.navigateByUrl("/resetPassword")

      }else{
        alert("Invalid Email")
      }
    })
  }
}
