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

  addPayment(payment: Payment): Observable<ResponseModel> {
    let newPath = this.apiUrl + "creditcards/add"
    return this.httpClient.post<ResponseModel>(newPath,payment);
  }

  getPayments(): Observable<ListResponseModel<Payment>> {
    let newPath = this.apiUrl + "creditcards/getall"
    return this.httpClient.get<ListResponseModel<Payment>>(newPath);
  }
}

