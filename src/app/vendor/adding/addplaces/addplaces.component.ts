import { Component, OnInit } from '@angular/core';
import { PlaceserviceService } from 'src/app/placeservice.service';

@Component({
  selector: 'app-addplaces',
  templateUrl: './addplaces.component.html',
  styleUrls: ['./addplaces.component.css']
})
export class AddplacesComponent implements OnInit {
  placeName:string="";
  lat:string="";
  long:string="";
  title:string="";
  description:string="";
  totalSeats:any=0;
  totalPrice:any=0;
  totalDay:any=0;
  totalNight:any=0;
  specialInstruction:string="";
  placeImage:string="";
  activity:string="-1";
  user:any=""
  activities: Array<any> = []
  constructor(private placeservice:PlaceserviceService) { }

  ngOnInit(): void {
    this.placeservice.getAllActivitiesApi().subscribe(resp=>{
      this.activities = resp.data;
      console.log(this.activities);

    })
    this.user=localStorage.getItem('userID')
  }
  selectImage(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.placeImage = file;
    }
  }
 addplace()
  {
    const formData = new FormData();
    formData.append('placeImage', this.placeImage);
    formData.append('user',this.user)
    formData.append('placeName', this.placeName);
    formData.append('lat', this.lat);
    formData.append('long', this.long);
    formData.append('title', this.title);
    formData.append('description', this.description);
    formData.append('totalSeats', this.totalSeats);
    formData.append('totalPrice', this.totalPrice);
    formData.append('totalDay', this.totalDay);
    formData.append('totalNight', this.totalNight);
    formData.append('specialInstruction', this.specialInstruction);
    formData.append('activity', this.activity);
    let data= {
      "placeName":this.placeName,
      "placeImage":formData,
      "lat":this.lat,
      "long":this.long,
      "title":this.title,
      "description":this.description,
      "totalSeats":this.totalSeats,
      "totalPrice":this.totalPrice,
      "totalDay":this.totalDay,
      "totalNight":this.totalNight,
      "specialInstruction":this.specialInstruction,
      "activity":this.activity
    }

    this.placeservice.placeApi(formData).subscribe(res=>{
      console.log("place response ");
      console.log(res);
   });
  }
}
