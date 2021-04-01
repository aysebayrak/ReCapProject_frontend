export interface Payment {
    paymentId:number,
   // customerName: string;
   customerId:number;
    price: number;
    creditCardNumber:string;
    expirationDate:string;  //son kullanma tarihi
    securityCode:string;//güvenlik kodu 
   // creditCardPassword: string; //şifre
}