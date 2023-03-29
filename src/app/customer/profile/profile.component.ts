import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/userservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  lastName=""
  firstName=""
  email=""
  mobileNo=""
  address=""
  src=""
  profileImg=""
  user=""
  profileDescription=""
  constructor(private userservice:UserserviceService) {
    // this.userservice.getUserByIdApi(localStorage.getItem('userID')).subscribe(resp=>{
    //   this.firstName=resp.data.firstName
    //   this.lastName=resp.data.lastName
    //   this.email=resp.data.email
    //   this.mobileNo=resp.data.mobileNo
    //   this.address=resp.data.address
    // })

    this.userservice.getProfileByIdApi(localStorage.getItem('userID')).subscribe(resp=>{
      console.log(resp.data);

      this.firstName=resp.data.user.firstName
      this.lastName=resp.data.user.lastName
      this.email=resp.data.user.email
      this.mobileNo=resp.data.user.mobileNo
      this.address=resp.data.user.address
      this.src=resp.data.profileImg
    })
   }
   selectImage(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.src= file;
    }
  }
  addprofile()
  {
    const formData=new FormData()
    // this.user=JSON.parse(localStorage.getItem('userID') || '{}');

     formData.append('user','6420483f35da97d1e8c45b5f')
    formData.append('profileImg', this.src);
    formData.append('profileDescription',this.profileDescription);
    this.userservice.addProfileApi(formData).subscribe(resp=>{
      console.log(resp);

    })
  }
  ngOnInit(): void {
  }

}
