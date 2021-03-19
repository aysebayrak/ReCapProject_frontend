import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';


import { CarService } from 'src/app/services/car.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  
  carImages:CarImage[]=[]; 
  cars:Car[]=[];
  dataLoaded=false;
  imageUrl="https://localhost:44301/"
  

  constructor(private carService:CarService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      
      if(params["brandId"]){
        this.getCarsByBrandId(params["brandId"]);
      }
      else if(params["colorId"]){
        this.getCarsByColorId(params["colorId"]);
      }
      else{
        this.getCars();
      }
    })
    
    
  }
  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
      console.log(response.data);
      console.log(this.cars);
    })
   

  }
  getCarsByBrandId(brandId:number){
    this.carService.getCarsByBrandId(brandId).subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    })
  }
  getCarsByColorId(colorId:number){
    this.carService.getCarsByColorId(colorId).subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }
 
  

}
