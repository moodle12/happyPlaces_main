import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToursService {

  constructor(private http:HttpClient) { }
  ToursApi(data:any):Observable<any>{
    return this.http.post("http://localhost:9909/tour",data)
  }
  getAllToursApi():Observable<any>
  {
    return this.http.get("http://localhost:9909/tour")
  }
  getToursByDate(startDate:any,endDate:any):Observable<any>
  {
    return this.http.get("http://localhost:9909/gettourbydate/"+startDate+"/"+endDate)
  }
}
