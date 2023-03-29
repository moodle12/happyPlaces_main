import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/userservice.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  lastName=""
  firstName=""
  email=""
  mobileNo=""
  address=""
  constructor(private userservice:UserserviceService) {
    this.userservice.getUserByIdApi(localStorage.getItem('userID')).subscribe(resp=>{
      this.firstName=resp.data.firstName
      this.lastName=resp.data.lastName
      this.email=resp.data.email
      this.mobileNo=resp.data.mobileNo
      this.address=resp.data.address
    })
  }

  ngOnInit(): void {
  }

}
