import { Component, OnInit } from '@angular/core';
import { PlaceserviceService } from 'src/app/placeservice.service';
import { ToursService } from 'src/app/tours.service';
import { UserserviceService } from 'src/app/userservice.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
   styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {


  constructor(private placeservice:PlaceserviceService,private tourservice:ToursService,private userservice:UserserviceService) { }
  commonplaces:Array<any>=[]
  places:Array<any>=[]
  uniqueplaces:Array<any>=[]
  hidden=false
  tours:Array<any>=[]
  src=""
  ngOnInit(): void {
    this.userservice.getProfileByIdApi(localStorage.getItem('userID')).subscribe(resp=>{
      this.src=resp.data.profileImg
    })
    this.placeservice.getAllCommonPlacesApi().subscribe(resp => {
      this.commonplaces = resp.data;
      console.log(this.commonplaces);
      this.placeservice.getAllPlacesApi().subscribe(resp => {
        this.places = resp.data;
        console.log(this.places);
        for (let index = 0; index < this.commonplaces.length; index++) {
          var cplat = this.commonplaces[index].lat;
          var cplong=this.commonplaces[index].long;
          console.log("Latitude:"+cplat + "Longitude:" +cplong);
        }
        for (let index = 0; index < this.places.length; index++) {
          var plat = this.places[index].lat;
          var plong=this.places[index].long;
          console.log("Latitude:"+plat + "Longitude:" +plong);
          if (cplat==plat && cplong==plong) {
            console.log("matched");
          }
          else
          {
            this.uniqueplaces[index]=this.places[index]
            console.log(this.uniqueplaces);
            console.log("not matched");
          }
        }
      })
    })
    this.tourservice.getAllToursApi().subscribe(resp=>{
      this.tours=resp.data
      console.log(this.tours);
    })
  }
  execute(){
    this.hidden=!this.hidden
  }



}


