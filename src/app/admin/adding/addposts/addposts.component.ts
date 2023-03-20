import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/booking.service';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-addposts',
  templateUrl: './addposts.component.html',
  styleUrls: ['./addposts.component.css']
})
export class AddpostsComponent implements OnInit {
  places: Array<any> = []

  constructor(private router:Router,private bookingservice:BookingService,private postservice:PostService) { }
  place=""
  likes=0
  isVerified=false
  ngOnInit(): void {
    this.bookingservice.getAllPlacesApi().subscribe(resp => {
      this.places = resp.data;
      console.log(this.places);
    })
  }
  addPost()
  {
    let data={
      "place":this.place,
      "likes":this.likes,
      "isVerified":this.isVerified
    }
    this.postservice.PostApi(data).subscribe(res=>{
      console.log("Post response ");
      console.log(res);

   });
  }
}
