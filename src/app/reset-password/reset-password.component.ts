import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  email = ""
  password = ""
  confirmPassword = ""
  otp =""
  constructor(private sessionService:SessionService,private router:Router) { }

  ngOnInit(): void {
  }
  resetPassword(){
    //password == confirm password
    //db password update ? if otp is correct
    //whom ? email

    let user = {"email":this.email,"otp":this.otp,"password":this.password}
    this.sessionService.resetPasswordApi(user).subscribe(resp=>{
        if(resp.status == -1){
          alert(resp.msg);
        }else{
          alert(resp.msg);
          this.router.navigateByUrl("/login")
        }
    })
  }

}
