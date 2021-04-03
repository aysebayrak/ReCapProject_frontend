import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl="https://localhost:44301/api/";

  constructor(private httpClient:HttpClient) { }

   getUserId(userId:number){
     let newPath=this.apiUrl+'getbyid?id='+userId;
     return this.httpClient.get<SingleResponseModel<User>>(newPath);
   }

   userUpdate(user:User):Observable<ResponseModel>{
     let newPath=this.apiUrl+"user/edit";
     return this.httpClient.post<ResponseModel>(newPath,user);

   }

}
