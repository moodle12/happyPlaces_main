import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PlaceserviceService } from 'src/app/placeservice.service';

@Component({
  selector: 'app-editplace',
  templateUrl: './editplace.component.html',
  styleUrls: ['./editplace.component.css']
})
export class EditplaceComponent implements OnInit {
  placeid:String=""
  placeName:String="";
  lat:String="";
  long:String="";
  title:String="";
  description:String="";
  totalSeats:Number=0;
  totalPrice:Number=0;
  totalDay:Number=0;
  totalNight:Number=0;
  specialInstruction:String="";

  constructor(private ar:ActivatedRoute,private placeService:PlaceserviceService,private toastr:ToastrService,private router:Router) {
    this.placeid = ar.snapshot.params["placeid"];
    this.placeService.getplaceByIdApi(this.placeid).subscribe(resp => {
      if (resp.status == 200) {
        this.placeName = resp.data.placeName;
        this.lat= resp.data.lat;
        this.long=resp.data.long;
        this.title=resp.data.title;
        this.description=resp.data.description;
        this.totalSeats=resp.data.totalSeats;
        this.totalPrice=resp.data.totalPrice;
        this.totalDay=resp.data.totalDay;
        this.totalNight=resp.data.totalNight;
        this.specialInstruction=resp.data.specialInstruction;
      }
    }, err => {
      console.log(err);
      this.toastr.error("Something went Wrong Please TryAgain!!!","", { timeOut: 3000 })
    })
   }
   updatePlace() {

    let data = {"placeid":this.placeid,"placeName":this.placeName,"lat":this.lat,"long":this.long,"title":this.title,"description":this.description,"totalSeats":this.totalSeats,"totalPrice":this.totalPrice,"totalDay":this.totalDay,"totalNight":this.totalNight,"specialInstruction":this.specialInstruction}

    this.placeService.editPlaceApi(data).subscribe(resp => {

      this.toastr.success("Place modified..","",{timeOut:3000})
      this.router.navigateByUrl("/admin/listplaces")
    }, err => {

      this.toastr.error("Something went Wrong Please TryAgain!!!","", { timeOut: 3000 })
    })
  }

  ngOnInit(): void {
  }

}
