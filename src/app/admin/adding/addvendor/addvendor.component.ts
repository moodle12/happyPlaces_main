import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/userservice.service';
import { VendorService } from 'src/app/vendor.service';

@Component({
  selector: 'app-addvendor',
  templateUrl: './addvendor.component.html',
  styleUrls: ['./addvendor.component.css']
})
export class AddvendorComponent implements OnInit {

  constructor(private userservice:UserserviceService,private router:Router,private vendorservice:VendorService) { }
  users:Array<any> = []
  user=""
  businessName=""
  businessType=""
  businessAddress=""
  businessRating=0
  consumerContact=0
  emailAddress=""

  ngOnInit(): void {
    this.userservice.getAllUsersApi().subscribe(resp => {
      this.users = resp.data;
      this.users=this.users.filter(t=>t.userType.userTypeName=="Vendor")
      console.log(this.users);
    })
  }

  addVendor()
  {
    let data={
      "user":this.user,
      "businessName":this.businessName,
      "businessType":this.businessType,
      "businessAddress":this.businessAddress,
      "businessRating":this.businessRating,
      "consumerContact":this.consumerContact,
      "emailAddress":this.emailAddress
    }
    this.vendorservice.addVendorApi(data).subscribe(resp=>{
      console.log("Vendor Resp");
      console.log(resp);


    })
  }

}
