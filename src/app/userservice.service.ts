import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private httpClient:HttpClient) { }
  getAllUsersApi():Observable<any>
  {
    return this.httpClient.get("http://localhost:9909/user")
  }
  getAllUserTypeApi():Observable<any>
  {
    return this.httpClient.get("http://localhost:9909/userType")
  }
  deleteUserApi(userId:any):Observable<any>
  {
    return this.httpClient.delete("http://localhost:9909/user/"+userId)
  }
  getUserByIdApi(userid:any):Observable<any>{
    return this.httpClient.get("http://localhost:9909/getuserbyid/"+userid);
  }
  editUserApi(data:any):Observable<any>
  {
    return this.httpClient.put("http://localhost:9909/user",data)
  }
}
