import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import {HttpClientModule} from '@angular/common/http' //hhttp istekleri için  apiye istekde bulunmak için
import {FormsModule,ReactiveFormsModule} from "@angular/forms"  //[()]  caloşabilmesi için
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
import {ToastrModule} from "ngx-toastr";
import { CarAddComponent } from './components/car-add/car-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component'

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
    PaymentComponent,
    CarAddComponent,
    BrandAddComponent,
    ColorAddComponent,
    BrandListComponent,
    BrandUpdateComponent,
    CarListComponent,
    CarUpdateComponent,
    ColorListComponent,
    ColorUpdateComponent
  ],
  imports: [   //dışardan aldıklarım         bundan sonra backendle iletişime geç (cors hatası= backende hata)
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
