import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDto } from 'src/app/models/carDto';
import { Customer } from 'src/app/models/customer';
import { Rental } from 'src/app/models/rental';
import { RentalDto } from 'src/app/models/rentalDto';
import { AuthService } from 'src/app/services/auth.service';
import { CarService } from 'src/app/services/car.service';
import { CustomerService } from 'src/app/services/customer.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})

export class RentalComponent implements OnInit {

  customers: Customer[] = [];
  cars: Car;
  rentals: Rental[] = [];
  rentaldto: RentalDto[];
  rental: Rental;
  customerId: number;
  carId: number;
  rentDate: Date;
  returnDate: Date;
  // isRented:boolean = false; //Arabanın o nkş kıralı olup olmamması 

  @Input() car: CarDto;

  constructor(private rentalService: RentalService,
    private customerService: CustomerService,
    private toastrService: ToastrService,
    private carService: CarService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCustomer();
    this.getDate(2);
  }

  isLogOK() {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.toastrService.error("Must be Login or Register")
      this.router.navigate(['/'])
      return false;
    }
  }

  getCustomer() {
    this.customerService.getCustomer().subscribe(response => {
      this.customers = response.data
    });
  }

  getDate(day: number) { //tarih al
    var today = new Date();
    today.setDate(Number(today.getDay()) + day);
    return today.toISOString().slice(0, 10)
  }


  create() {
    let rental: Rental = {
      carId: this.car.carId,
      customerId: this.customerId,
      rentDate: this.rentDate,
      returnDate: this.returnDate
    }

    rental.carId = Number(rental.carId);
    rental.customerId = Number(rental.customerId);

    this.rentalService.addRental(rental).subscribe(response => {
      this.toastrService.info("Ödeme Sayfasına Git");
      this.toastrService.success("Kiralama İşlemi Başarılı");
      this.router.navigate(['/payment', JSON.stringify(rental)]);
    }, error => {
      console.info(error)
      this.toastrService.error(error.error)
      this.toastrService.error(error.error.message)
    })
  }









  // getRentalDetails(){
  //   this.rentalService.getRentalDetails().subscribe(response=>{
  //    this.rentaldto = response.data
  //   })
  // }

  // getRentalByCarId(carId: number){
  //   this.carService.getCarDetailsByCarId(carId).subscribe(response=>{
  //     this.cars= response.data[0];
  //   })

  // }




}





