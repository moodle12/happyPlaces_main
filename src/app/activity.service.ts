import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http:HttpClient) { }
  getAllActivitiesApi():Observable<any>
  {
    return this.http.get("http://localhost:9909/activity")
  }
  activityApi(data:any):Observable<any>{
    return this.http.post("http://localhost:9909/activity",data)
  }
  deleteActivityApi(activityId:any):Observable<any>
  {
    return this.http.delete("http://localhost:9909/activity/"+activityId)
  }
  getActivityByIdApi(activityId:any):Observable<any>{
    return this.http.get("http://localhost:9909/getactivitybyid/"+activityId);
  }
  editActivityApi(data:any):Observable<any>
  {
    return this.http.put("http://localhost:9909/activity",data)
  }
}
