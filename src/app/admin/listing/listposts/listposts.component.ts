import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/booking.service';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-listposts',
  templateUrl: './listposts.component.html',
  styleUrls: ['./listposts.component.css']
})
export class ListpostsComponent implements OnInit {

  constructor(private postservice:PostService,private bookingservice:BookingService) { }
  posts: Array<any> = []
  places: Array<any> = []
  ngOnInit(): void {
    this.postservice.getAllPostsApi().subscribe(resp => {
      this.posts = resp.data;
      console.log(this.posts);

    })
    this.bookingservice.getAllPlacesApi().subscribe(resp => {
      this.places = resp.data;
      console.log(this.places);
    })
  }
  deletePost(postId:any)
  {
    alert("delete" + postId);
    this.postservice.deletePostApi(postId).subscribe(resp=>{
      console.log(resp);

    })
  }
}
