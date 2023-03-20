import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient) { }
  getAllFeedbacksApi():Observable<any>
  {
    return this.http.get("http://localhost:9909/customerFeedback")
  }
  FeedbackApi(data:any):Observable<any>{
    return this.http.post("http://localhost:9909/customerFeedback",data)
  }
}
