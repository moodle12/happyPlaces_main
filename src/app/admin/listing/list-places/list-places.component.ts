import { Component, OnInit } from '@angular/core';
import { PlaceserviceService } from 'src/app/placeservice.service';

@Component({
  selector: 'app-list-places',
  templateUrl: './list-places.component.html',
  styleUrls: ['./list-places.component.css']
})
export class ListPlacesComponent implements OnInit {

  constructor(private placeService:PlaceserviceService) { }
  places: Array<any> = []
  activity: Array<any> = []
  dtOptions:any={}
  ngOnInit(): void {
    this.placeService.getAllPlacesApi().subscribe(resp => {
      this.places = resp.data;
      console.log(this.places);
      this.dtOptions = {

        search: {
          return: true,
        },
        dom: 'Bfrtip',
        buttons: [
          'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        export:true
      }
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
