export interface CreditCard{
    cardId?:number;
    paymentId?:number,
    customerId:number;
    nameOnTheCard:string;//kart üzerindeki isim
    cvv:number;
    creditCardNumber:string;
    expirationDate:string; //son kullanma tarihi
    //securityCode?:string;  güvenlik kodu 
}