import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import {HttpClientModule} from '@angular/common/http' //hhttp istekleri için  apiye istekde bulunmak için
import {FormsModule} from "@angular/forms"  //[()]  caloşabilmesi için


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { NaviComponent } from './components/navi/navi.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { BrandFilterPipe } from './pipes/brand-filter.pipe';
import { CarFilterPipe } from './pipes/car-filter.pipe';
import { ColorFilterPipe } from './pipes/color-filter.pipe';
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import { PaymentComponent } from './components/payment/payment.component';
import {ToastrModule} from "ngx-toastr"

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    CarComponent,
    ColorComponent,
    CustomerComponent,
    NaviComponent,
    RentalComponent,
    CarDetailComponent,
    BrandFilterPipe,
    CarFilterPipe,
    ColorFilterPipe,
    CarFilterComponent,
    PaymentComponent
  ],
  imports: [   //dışardan aldıklarım         bundan sonra backendle iletişime geç (cors hatası= backende hata)
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
