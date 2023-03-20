import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }
  BookingApi(data:any):Observable<any>{
    return this.http.post("http://localhost:9909/booking",data)
  }
  getAllBookingsApi():Observable<any>
  {
    return this.http.get("http://localhost:9909/booking")
  }
  getAllStatusesApi():Observable<any>
  {
    return this.http.get("http://localhost:9909/status")
  }
  getAllPlacesApi():Observable<any>
  {
    return this.http.get("http://localhost:9909/place")
  }
  getAllActivitiesApi():Observable<any>{
    return this.http.get("http://localhost:9909/activity")
  }
  getAllUsersApi():Observable<any>
  {
    return this.http.get("http://localhost:9909/user")
  }
  deleteBookingApi(bookingId:any):Observable<any>
  {
    return this.http.delete("http://localhost:9909/booking/"+bookingId)
  }
  getBookingByIdApi(bookingid:any):Observable<any>{
    return this.http.get("http://localhost:9909/getbookingbyid/"+bookingid);
  }
  getThisMonthBookingApi():Observable<any>
  {
    return this.http.get("http://localhost:9909/getthismonthbooking")
  }
  getBookingByStatusApi(statusid:any):Observable<any>{
    return this.http.get("http://localhost:9909/getbookingbystatus/"+statusid);
  }
  editBookingApi(data:any):Observable<any>
  {
    return this.http.put("http://localhost:9909/booking",data)
  }
}
