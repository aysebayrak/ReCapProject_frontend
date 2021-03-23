import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';


@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl="https://localhost:44301/api/rentals/getrentaldetail"


  constructor(private httpClient:HttpClient) { }
  
  getRentals(): Observable<ListResponseModel<Rental>> {
    return this.httpClient.get<ListResponseModel<Rental>> (this.apiUrl);
  }
  getRentalByCarId(carId: number): Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl +"rentals/getbycarid?id="+carId;
    return this.httpClient.get<ListResponseModel<Rental>> (newPath);
  }
}
