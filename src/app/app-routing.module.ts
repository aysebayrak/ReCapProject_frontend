import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { BrandListComponent } from './components/brand/brand-list/brand-list.component';
import { BrandUpdateComponent } from './components/brand/brand-update/brand-update.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarAddComponent } from './components/car/car-add/car-add.component';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { CarListComponent } from './components/car/car-list/car-list.component';
import { CarUpdateComponent } from './components/car/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { ColorListComponent } from './components/color/color-list/color-list.component';
import { ColorUpdateComponent } from './components/color/color-update/color-update.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RentalComponent } from './components/rental/rental.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path: "cars", component: CarComponent},
  {path:"brands",component: BrandComponent},
  {path:"colors",component: ColorComponent},
  {path:"rentals", component:RentalComponent},
  {path:"cars/brand/:brandId", component: CarComponent},
  {path:"cars/color/:colorId", component:CarComponent},
  {path:"cars/filter/:brandId/:colorId",component:CarComponent},
  {path:"cars/details/:carId",component:CarDetailComponent},
  {path:"rentals/:carId", component:RentalComponent},
  {path: "cars/add", component:CarAddComponent,canActivate:[LoginGuard]},
  {path: "brands/add", component:BrandAddComponent},
  {path: "colors/add", component:ColorAddComponent},
  {path: 'cars/list',component:CarListComponent },
  {path: 'cars/update/:carId',component:CarUpdateComponent },
  {path: 'brands/list',component:BrandListComponent },
  {path: "brands/update/:brandId",component:BrandUpdateComponent},
  {path: 'colors/list',component:ColorListComponent},
  {path: "colors/update/:colorId",component:ColorUpdateComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path: "brands/update/",component:BrandUpdateComponent},
 // {path:"profil",component:Profil}
 {path:"customers",component:CustomerComponent},
  {path:"user/edit",component:EditUserComponent},
  

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  

// routing yaptıgımda ben onu backende yazmanmalaım       "carcontrollerde "      getcarbybrandid"   
