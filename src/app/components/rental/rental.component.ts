import { Component, Input, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
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
  cars : Car[] = [];
  rentals: Rental[] = []; 
  rentaldto: RentalDto[];
  rental: Rental;
  customerId:number;
  carId: number;
  rentDate: Date;
  returnDate: Date;
  isAdded : boolean=false;
 
  @Input() carForRent: Car

  constructor(private rentalService: RentalService,
    private customerService: CustomerService,
    private toastrService: ToastrService,
    private carService: CarService) { }

  ngOnInit(): void {
    this.getCustomers();
    this.getRentalDetails();

  }

  getRentalDetails(){
    this.rentalService.getRentalDetails().subscribe(response=>{
     this.rentaldto = response.data
    })
  }
  getRentalByCarId(carId: number){
    this.carService.getCarDetailsByCarId(carId).subscribe(response=>{
      this.cars= response.data;
    })

  }
  AddRental(){
    let newRental:Rental = {
      rentDate: this.rentDate,
      returnDate: this.returnDate,
      carId: this.carForRent.carId,
      customerId: this.customerId
    }
  

    this.rental = newRental
    this.isAdded=true
    this.toastrService.success("Araç kiralama işleminiz başarıyla gerçekleşti");
  }


    getCustomers(){
    this.customerService.getCustomers().subscribe(response=>{
      this.customers=response.data
    });
  }
}

 



