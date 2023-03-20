import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http:HttpClient) { }
  signupApi(data:any):Observable<any>{
    return this.http.post("http://localhost:9909/user",data)
  }
  loginApi(data:any):Observable<any>{
    return this.http.post("http://localhost:9909/login",data)
  }
  forgetPasswordApi(data:any):Observable<any>{
    return this.http.post("http://localhost:9909/forgetPassword",data)
  }
  resetPasswordApi(data:any):Observable<any>{
    return this.http.put("http://localhost:9909/resetPassword",data)
  }
}
