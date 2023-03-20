import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http:HttpClient) { }
  getAllVendorsApi():Observable<any>
  {
    return this.http.get("http://localhost:9909/business")
  }
  addVendorApi(data:any):Observable<any>{
    return this.http.post("http://localhost:9909/business",data)
  }
  deleteVendorApi(businessId:any):Observable<any>
  {
    return this.http.delete("http://localhost:9909/business/"+businessId)
  }
}
