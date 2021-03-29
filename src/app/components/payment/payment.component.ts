import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Customer } from 'src/app/models/customer';
import { Payment } from 'src/app/models/payment';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';
import { CustomerService } from 'src/app/services/customer.service';
import { PaymentService } from 'src/app/services/payment.service';
import { RentalService } from 'src/app/services/rental.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  car : Car;
  customers: Customer[] = [];
  payments : Payment[] = [];
  customerName: string;
  creditCardNumber: string;
  expirationDate:string;
  price: number;
  securityCode:string;
  creditCardPassword: string;
  isCheck: boolean=false;

  @Input() rent: Rental

  @Input() carForRent: Car
  constructor(
    private paymentService: PaymentService,
    private rentalService: RentalService,
    private carService: CarService,
    private toastrService: ToastrService,
    private customerService: CustomerService,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarDetails(params["carId"])
        this.getCustomers()
      }else{
        
      }
    })
  }

  addPayment(){
      let newPayment: Payment = {
      creditCardNumber: this.creditCardNumber,
      expirationDate : this.expirationDate,
      securityCode : this.securityCode,
      price : this.price,
      customerName: this.customerName

    };
    this.paymentService.addPayment(newPayment).subscribe(response =>{
      this.isCheck = true;
      this.toastrService.success("Ödeme işleminiz başarıyla tamamlandı");
    }) 
    
    this.rentalService.AddRental(this.rent).subscribe(response =>{
   
    })
  }

  getCarDetails(carId:number)
  {
    this.carService.getCarDetails(carId).subscribe(response => {
      this.car = response.data[0];
      console.log(response);
    })
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe(response=>{
      this.customers = response.data;
  
    })
}
}
