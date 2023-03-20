import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlaceserviceService } from '../placeservice.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  placeName:String="";
  lat:String="";
  long:String="";
  title:String="";
  description:String="";
  constructor(private router:Router,private placeservice:PlaceserviceService) { }

  ngOnInit(): void {
    console.log("places component");

  }

  places(){
    console.log(this.placeName);
    console.log(this.lat);
    console.log(this.long);
    console.log(this.title);
    console.log(this.description);





    let data= {
      "placeName":this.placeName,
      "lat":this.lat,
      "long":this.long,
      "title":this.title,
      "description":this.description
    }

    this.placeservice.placeApi(data).subscribe(res=>{
      console.log("place response ");
      console.log(res);
   });
  }

}
