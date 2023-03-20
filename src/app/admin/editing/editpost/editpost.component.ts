import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit {
  postId="";
  likes:Number=0;
  isVerified:Boolean= false;
  constructor(private router:Router,private ar:ActivatedRoute,private postservice:PostService,private toastr:ToastrService) {
    this.postId = ar.snapshot.params["postId"];
    this.postservice.getpostByIdApi(this.postId).subscribe(resp => {
      if (resp.status == 200) {
        this.likes = resp.data.likes;
        this.isVerified=resp.data.isVerified;
      }
    }, err => {
      console.log(err);
      this.toastr.error("Something went Wrong Please TryAgain!!!","", { timeOut: 3000 })
    })
   }

  ngOnInit(): void {
  }
  updatePost() {

    let data = {"postId":this.postId,"likes":this.likes,"isVerified":this.isVerified}

    this.postservice.editPostApi(data).subscribe(resp => {

      this.toastr.success("Post modified..","",{timeOut:3000})
      this.router.navigateByUrl("/admin/listposts")
    }, err => {

      this.toastr.error("Something went Wrong Please TryAgain!!!","", { timeOut: 3000 })
    })
  }
}
