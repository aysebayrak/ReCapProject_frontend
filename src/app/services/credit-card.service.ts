import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { CreateTracingOptions } from 'node:trace_events';
import { Observable } from 'rxjs';
import { CreditCard } from '../models/creditCard';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  apiUrl="https://localhost:44301/api/";

  constructor(private httpClient:HttpClient,
    private authService:AuthService) { }

  addCreditCard(card:CreditCard):Observable<ResponseModel>{
    let newPath=this.apiUrl+"creditCards/add";
    return this.httpClient.post<ResponseModel>(newPath,card);
    
  }
  getCustomerIdCreditCard(customerId:number):Observable<ListResponseModel<CreditCard>>{
     let newPath=this.apiUrl+"creditCards/getbycustomer?id=+id";
     return this.httpClient.get<ListResponseModel<CreditCard>>(newPath);
  }
  updateCreditCard(card:CreditCard):Observable<ResponseModel>{ 
   let  newPath=this.apiUrl+"creditCards/update";
   return this.httpClient.post<ResponseModel>(newPath,card);

  }
  deleteCreditCard(card:CreditCard):Observable<ResponseModel>{ 
    let  newPath=this.apiUrl+"creditCards/delete";
    return this.httpClient.post<ResponseModel>(newPath,card);
 
   }
  // saveCreditCard(payment:Payment):Observable<ResponseModel>{
  //   let customerCreditCard:CreditCard = {customerId:this.authService.currentUserId,cardId:payment.pa}
  //   let newPath = this.apiUrl +"customercreditcard/add"
  //   return this.httpClient.post<ResponseModel>(newPath,customerCreditCard)
  // }



}
