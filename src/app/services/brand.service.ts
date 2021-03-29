import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';




@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl="https://localhost:44301/api/brands/getall"

  constructor(private httpClient: HttpClient ) { }
  
  getBrands(): Observable<ListResponseModel<Brand>> {
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl);
  }

  add(brand:Brand):Observable<ResponseModel>{  //ekleme 
    return this.httpClient.post<ResponseModel>(this.apiUrl+"brands/add",brand)

  }

}
