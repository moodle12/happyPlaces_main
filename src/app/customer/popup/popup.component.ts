import { Component, OnInit } from '@angular/core';
import { ToursService } from 'src/app/tours.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  tours:Array<any>=[]
  constructor(private tourservice:ToursService) { }

  ngOnInit(): void {
    this.tourservice.getAllToursApi().subscribe(resp=>{
      this.tours=resp.data
      console.log(this.tours);
    })
  }

}
