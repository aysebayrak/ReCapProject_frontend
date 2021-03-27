import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [
  {path:"",pathMatch: 'full',component:CarComponent},//ANASAYFAM hiç birşey vermez issem 
  {path:"cars",component:CarComponent},
  {path:"cars/brand/:brandId", component:CarComponent},//markama göre getir
  {path:"cars/color/:colorId", component:CarComponent},
  {path:"cars/cardetail/:carId", component:CarDetailComponent},
  {path:"cars/cars/cardetail/:carId", component:CarDetailComponent},
  {path:"cars/brand/:brandId/cars/cardetail/:carId", component:CarDetailComponent},
  {path:"cars/color/:colorId/cars/cardetail/:carId", component:CarDetailComponent},
  {path:"cars/filter/:brandId/:colorId",component:CarComponent}, {path:"cars/filter/:brandId/:colorId",component:CarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  

// routing yaptıgımda ben onu backende yazmanmalaım       "carcontrollerde "      getcarbybrandid"   
