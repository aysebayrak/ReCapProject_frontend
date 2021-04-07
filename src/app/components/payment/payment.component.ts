import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CreditCard } from 'src/app/models/creditCard';
import { Payment } from 'src/app/models/payment';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';
import { CreditCardService } from 'src/app/services/credit-card.service';
import { PaymentService } from 'src/app/services/payment.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  
  apiUrl=""
   rental:Rental;
   car:Car;
   quantity:number;
   creditCardNumber:string;
   nameOnTheCard: string;
   expirationDate:string;//son kullanma tarihi
   cvv:number;
   carId:number;
   creditCard:CreditCard[]=[];



    creditCardForm:FormGroup;
 
  constructor(private rentalService:RentalService, 
    private paymentService:PaymentService, 
    private toastrService: ToastrService,
    private formBuilder:FormBuilder,
    private creditCardService:CreditCardService,
    private carService:CarService) { }

  ngOnInit(): void {

  }

  createCreditCardForm(){
    this.creditCardForm=this.formBuilder.group({
      customerCards:["",Validators .required],
      nameOnTheCard:["",Validators.required],
      cardNumber:["",Validators.required,Validators.maxLength(20)],
      cvv:["",Validators.required,Validators.maxLength(3)],
      expirationDate:["",Validators.required]



    });
  }
  
   record(){  //kayıt
     let cardModel:CreditCard={
       creditCardNumber:this.creditCardNumber,
       nameOnTheCard: this.nameOnTheCard,
       expirationDate: this.expirationDate,
       cvv: this.cvv,
       customerId:this.rental.customerId,

     };
     this.creditCardService.addCreditCard(cardModel).subscribe((response)=>{
       this.toastrService.success("Kayıt Başarılı");
       this.addPayment();
     },responseError=>{
       this.toastrService.error("Hata",responseError.error);
       
     }
     );
   }


  addPayment(){
    
  }

}

