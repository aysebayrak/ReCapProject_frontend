import { Component, Input, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDto } from 'src/app/models/carDto';
import { Customer } from 'src/app/models/customer';
import { Rental } from 'src/app/models/rental';
import { RentalDto } from 'src/app/models/rentalDto';
import { CarService } from 'src/app/services/car.service';
import { CustomerService } from 'src/app/services/customer.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  customers : Customer[] = [];
  cars : CarDto;
  rentals: Rental[] = []; 
  rentaldto: RentalDto[];
  rental: Rental;
  customerId:number;
  carId: number;
  rentDate: Date;
  returnDate: Date;
  isRented:boolean = false; //Arabanın o nkş kıralı olup olmamması 
 
  @Input() carforrental:CarDto;

  constructor(private rentalService: RentalService,
    private customerService: CustomerService,
    private toastrService: ToastrService,
    private carService: CarService) { }

  ngOnInit(): void {
    this.getCustomer();
    this.getRentalDetails();

  }

  getRentalDetails(){
    this.rentalService.getRentalDetails().subscribe(response=>{
     this.rentaldto = response.data
    })
  }
  getRentalByCarId(carId: number){
    this.carService.getCarDetailsByCarId(carId).subscribe(response=>{
      this.cars= response.data[0];
    })

  }
  createRent()
   {
    let rent:Rental = {
      carId: this.carforrental.carId,
      customerId: this.customerId,
      rentDate: this.rentDate,
      returnDate: this.returnDate,
      price: this.carforrental.dailyPrice
   };
    this.rental = rent;
    this.isRented = true;
    this.toastrService.success("Your rental request has been received. You are redirected to the payment page.");
   }


    getCustomer(){
    this.customerService.getCustomer().subscribe(response=>{
      this.customers=response.data
    });
  }
}

 



