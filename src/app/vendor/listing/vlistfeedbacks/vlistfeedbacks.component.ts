import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/feedback.service';
import { VendorService } from 'src/app/vendor.service';

@Component({
  selector: 'app-vlistfeedbacks',
  templateUrl: './vlistfeedbacks.component.html',
  styleUrls: ['./vlistfeedbacks.component.css']
})
export class VlistfeedbacksComponent implements OnInit {
  feedbacks:Array<any>=[]
  vendors:Array<any>=[]
  constructor(private feedback:FeedbackService,private vendor:VendorService) { }

  ngOnInit(): void {
    this.vendor.getAllVendorsApi().subscribe(resp=>{
      this.vendors=resp.data
      console.log(this.vendors);
      for (let index = 0; index < this.vendors.length; index++) {
          if (this.vendors[index].user._id==localStorage.getItem('userID')) {
            this.feedback.getFeedbacksByVendor(this.vendors[index]._id).subscribe(resp => {
              this.feedbacks = resp.data;
              console.log(this.feedbacks);
            })
        }
      }
    })
  }

}
