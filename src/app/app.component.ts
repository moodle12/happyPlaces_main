import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { UserserviceService } from './userservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'happyPlaces-angular';
  route: string="";
  isHome=false;
  lastName=""
  firstName=""
  hidden=false
  constructor(location: Location, router: Router,private userservice:UserserviceService) {
    this.userservice.getUserByIdApi(localStorage.getItem('userID')).subscribe(resp=>{
      this.firstName=resp.data.firstName
      this.lastName=resp.data.lastName
    })
    router.events.subscribe((val) => {
      if(location.path() != ''){
        this.route = location.path();
        if(this.route=="/customer/home" || this.route=="/customer/tours")
    {
      this.isHome=false
    }
    else{
      this.isHome=true
    }
      } else {
        this.route = 'Home'
      }
    });
  }
  execute(){
    this.hidden=!this.hidden
  }
}
