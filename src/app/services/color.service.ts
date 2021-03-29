import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl="https://localhost:44301/api/colors/getall"

  constructor(private httpClient:HttpClient ) { }
  
  getColors():Observable<ListResponseModel<Color>> {
    return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl);
  }


  add(color:Color):Observable<ResponseModel>{  //ekleme 
    return this.httpClient.post<ResponseModel>(this.apiUrl+"colors/add",color)

  }
}
