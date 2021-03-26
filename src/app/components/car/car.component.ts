import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  currentCar:Car;
  filterText:string;
  dataLoaded=false;
  imageUrl="https://localhost:44301"
  
//constructor= carComponent bellekte olusşturmaK  NEW lemek 
  constructor(private carService:CarService,  //servisi kullanabilmek için
    private activatedRoute: ActivatedRoute,
    private toastrService:ToastrService) { }

  ngOnInit(): void {    //componenr ilk açıldığnda çalışan kısım 
    this.activatedRoute.params.subscribe(params=>{
       console.log(params["brandId"])
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
  getCars(){  //arabaları getir   
    this.carService.getCars().subscribe(response=>{   //gelen yanıt  için 
      this.cars=response.data
      this.dataLoaded=true;//yükleniyor
      console.log(response.data);
      console.log(this.cars);
    })
     
   

  }
  
  setCurrentCar(car: Car) {
    this.currentCar = car;
  }

  getCarsByBrandId(brandId:number){
    this.carService.getCarsByBrandId(brandId).subscribe(response=>{
      this.cars=response.data;
      console.log(this.cars,response)
      this.dataLoaded=true;
    })
  }
  getCarsByColorId(colorId:number){
    this.carService.getCarsByColorId(colorId).subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }
  
  getCarByColorAndBrand(colorId: number, brandId: number) {
    this.carService.getCarByColorAndBrand(colorId, brandId).subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
      if (this.cars.length == 0) {
        this.toastrService.warning("Araç yok.", "Hata");
      }
    })

}
  

}
//data koy ve yönet
