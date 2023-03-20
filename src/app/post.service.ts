import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }
  getAllPostsApi():Observable<any>
  {
    return this.http.get("http://localhost:9909/post")
  }
  PostApi(data:any):Observable<any>{
    return this.http.post("http://localhost:9909/post",data)
  }
  deletePostApi(postId:any):Observable<any>
  {
    return this.http.delete("http://localhost:9909/post/"+postId)
  }
  getpostByIdApi(postId:any):Observable<any>{
    return this.http.get("http://localhost:9909/getpostbyid/"+postId);
  }
  editPostApi(data:any):Observable<any>
  {
    return this.http.put("http://localhost:9909/post",data)
  }

}
