import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/userservice.service';

@Component({
  selector: 'app-vheader',
  templateUrl: './vheader.component.html',
  styleUrls: ['./vheader.component.css']
})
export class VheaderComponent implements OnInit {

  constructor(private userservice:UserserviceService) { }
  date=new Date()
  firstName=""
  hidden=false
  src="assets/images/mount.jpg"
  lastName=""
  day= this.date.getDate()
  month=this.date.getUTCMonth()+1
  year=this.date.getFullYear()
  ngOnInit(): void {
    this.userservice.getUserByIdApi(localStorage.getItem('userID')).subscribe(resp=>{
      console.log(resp.data);
      this.firstName=resp.data.firstName
      this.lastName=resp.data.lastName
    })
  }
  execute(){
    this.hidden=!this.hidden
  }
}
