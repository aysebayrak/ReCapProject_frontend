import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDto } from 'src/app/models/carDto';
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
   cars:Car[]=[];
   
   quantity:number;
   creditCardNumber:string;
   nameOnTheCard: string;
   expirationDate:string;//son kullanma tarihi
   cvv:number;
   carId:number;
   creditCard:CreditCard[]=[];



    creditCardForm:FormGroup;
    imageUrl="https://localhost:44301"
 
  constructor(private rentalService:RentalService, 
    private paymentService:PaymentService, 
    private toastrService: ToastrService,
    private formBuilder:FormBuilder,
    private creditCardService:CreditCardService,
    private carService:CarService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params['rental']){
        this.rental=JSON.parse(params['rental']);
        if(params['carId']){
          this.getCar(params['carId']);
        }
       
        this.getCardByCustomer();
        this.createCreditCardForm();

      }
    })

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
    if(this.quantity> 100){
      let paymentModel:Payment={
        quantity:this.quantity
      }
      this.paymentService.payment(paymentModel).subscribe(response=>{
        this.toastrService.success("Ödeme İşlemi Başarılı");
      },error =>{
        this.toastrService.error(error.error);
        
      })
    }
    
    
  }
  getCardByCustomer(){
    this.creditCardService.getCustomerIdCreditCard(this.rental.customerId).subscribe(response=>{
      this.creditCard=response.data;
      this.creditCard.forEach(response=>{
        this.creditCardNumber=response.creditCardNumber;
        this.nameOnTheCard=response.nameOnTheCard;
        this.expirationDate=response.expirationDate;
        this.cvv=response.cvv;
      });
    });
  }
  setCardInfos(){ //kart bilgilerini ayarlamakk için
    this.createCreditCardForm.patchValue({
      creditCardNumber:this.creditCardNumber,
      nameOnTheCard:this.nameOnTheCard,
      expirationDate:this.expirationDate,
      cvv:this.cvv,
    });
  }
  
  // getCar(){
  //   this.carService.getCarDetailsByCarId(this.rental.carId).subscribe(response=>{
  //     this.cars=response.data;
  //     this.totalPayment();
  //   })
  // }
  getCar(carId: number){
    this.carService.getCarDetailsByCarId(carId).subscribe(response=>{
      this.car= response.data[0];
      this.totalPayment();
    })

  }
  totalPayment(){
    if(this.rental.returnDate!=null){
      let rentDate=new Date(this.rental.returnDate.toString());
      let returnDate=new Date(this.rental.rentDate.toString());
      let difference =(rentDate.getTime()-returnDate.getTime());
      let differenceOfDays = Math.ceil(difference / (1000 * 3600 * 24));
      if(differenceOfDays==0){
        differenceOfDays=1;

      }
      this.quantity=differenceOfDays*(this.car.dailyPrice+(this.car.dailyPrice*8/100)); //kdv hesapla 
    }

  }

}



          
