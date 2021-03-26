import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({  //bu bir servis 
  providedIn: 'root'
})
  export class CarService {
  apiUrl="https://localhost:44301/api/"

  constructor(private httpClient:HttpClient ) { }   



  getCars():Observable<ListResponseModel<Car>>{
     let newPath=this.apiUrl+"cars/getall";
     return this.httpClient.get<ListResponseModel<Car>>(newPath);  //servisten api isği için 
    

  }
  getCarsByBrandId(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcarsbybrandid?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByColorId(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getbycolorid?colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }


  getCarDetailsByCarId(carId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcardetailbycarid?carId=" + carId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarByColorAndBrand(colorId:number, brandId:number) : Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getbycolorandbrandid?colorId="+colorId+"&brandId="+brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }


}

//arayüzle ilgili genel çagrıları  api cağrılarını buna yazarız 
//open ile   ng g service car 
//kod yazarken direk serviceden başlayacağız