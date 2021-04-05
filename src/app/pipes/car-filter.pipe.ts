import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {

  transform(value: Car[], filterText: string): Car[] {
    filterText = filterText ? filterText.toLocaleLowerCase()  
    : ""  
    return filterText 
    ? value.filter((c:Car)=> c.description.toLocaleLowerCase().indexOf(filterText)!==-1)
    :value;
  }

}






//open in ...= ng g pipe car
//pipe=elindeki veriyi görsel olarak daha faklı göstermek için kullanılır geeln veriyi html de daha farklı göstermek 
//istersem .
//  | bu simge ile yapılır   .O veriye pipe uygula 
//  uppercase  =hepsini büyük harfle göster
// lowercase  = küçük harafle göster



//value: Car[]=gönderilen veri tipi   "değiştirmwkm istediğim değer"
//filterText: string  = verilen filtre  parametre
//Car[] =dönüş tipi




//js büyük küçük harf duyarlı o yuzden  filret büyük yada küçük yapmmam lazım  
//filterText ?  = filter text varmı
//filterText.toLocaleLowerCase()  =varsa  dönüştür küçük harfe
//filterText ? filterText.toLocaleLowerCase()  
//  : ""  = değilse null


//  return filterText ? = filter text varmı 
//  value.filter((c:Car) =varsa arabaları fitrele   value ile çıkan sonıçları yeni bir [] atıyor 
//filter ile tek tek doolanıyor 
//  description.toLocaleLowerCase =açıklamayı küçük harfe cevir
//  ndexOf =varrmı 
//  filterText)!==- =1  = varsa onu yeni bir [] yap onu döndür
//  :value; = yoksa aynnen döndür


  // vede bunu html de uygula
