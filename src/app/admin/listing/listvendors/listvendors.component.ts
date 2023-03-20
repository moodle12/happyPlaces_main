import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/userservice.service';
import { VendorService } from 'src/app/vendor.service';

@Component({
  selector: 'app-listvendors',
  templateUrl: './listvendors.component.html',
  styleUrls: ['./listvendors.component.css']
})
export class ListvendorsComponent implements OnInit {
  vendors: Array<any> = []
  users: Array<any> = []
  dtOptions:any={}
  constructor(private vendorservice:VendorService,private userservice:UserserviceService) { }

  ngOnInit(): void {
    this.vendorservice.getAllVendorsApi().subscribe(resp =>{
      this.vendors=resp.data;
      console.log(this.vendors);
      this.dtOptions = {

        search: {
          return: true,
        },
        dom: 'Bfrtip',
        buttons: [
          'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        export:true
      }

    })
    this.userservice.getAllUsersApi().subscribe(resp => {
      this.users = resp.data;
      console.log(this.users);
    })
  }

  deleteVendor(businessId:any)
  {
    alert("delete" + businessId);
    this.vendorservice.deleteVendorApi(businessId).subscribe(resp=>{
      console.log(resp);

    })
  }

}
