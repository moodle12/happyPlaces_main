import { Component, OnInit } from '@angular/core';
import { PlaceserviceService } from 'src/app/placeservice.service';

@Component({
  selector: 'app-listplaces',
  templateUrl: './listplaces.component.html',
  styleUrls: ['./listplaces.component.css']
})
export class ListplacesComponent implements OnInit {
  vplaces: Array<any> = []
  placeName=""
  activity: Array<any> = []
  dtOptions:any={}
  constructor(private placeService:PlaceserviceService) { }

  ngOnInit(): void {
    this.placeService.getplaceByIdApi(localStorage.getItem('userID')).subscribe(resp => {
      this.vplaces = resp.data;
      this.placeName=resp.data.placeName
      console.log(this.vplaces);
      console.log(this.placeName);

      // this.dtOptions = {

      //   search: {
      //     return: true,
      //   },
      //   dom: 'Bfrtip',
      //   buttons: [
      //     'copy', 'csv', 'excel', 'pdf', 'print'
      //   ],
      //   export:true
      // }
    })
    this.placeService.getAllActivitiesApi().subscribe(resp=>{
      this.activity = resp.data;
      console.log(this.activity);

    })
  }
  deletePlace(placeId:any)
  {
    alert("delete" + placeId);
    this.placeService.deletePlaceApi(placeId).subscribe(resp=>{
      console.log(resp);

    })
  }
}
