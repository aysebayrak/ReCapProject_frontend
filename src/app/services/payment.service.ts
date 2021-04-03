import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Payment } from '../models/payment';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  apiUrl = "https://localhost:44301/api/";
  constructor(private httpClient: HttpClient) { }

  
 
  payment(payment:Payment):Observable<ResponseModel>{
    let newPath=this.apiUrl+"rentals/payment";
    return this.httpClient.post<ResponseModel>(newPath,payment)
  }
 



}

