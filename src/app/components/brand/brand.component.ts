import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands: Brand[] = [];
  currentBrand: Brand;//o anki caliştiğim marakyı ,ttutmalk için
  filterText:string = "";
  dataLoaded = false;


  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response)=>{
      this.brands = response.data;
      this.dataLoaded = true;
    })
  }

  setCurrentBrand(brand: Brand){//branda göre getir  marka seç ona göre getireyim  üstüne tıklama 
   this.currentBrand = brand;
  }

  removeCurrentBrand(){
    this.filterText = "";
    this.currentBrand = {brandId:-1,brandName:""};
  }

  getCurrentBrandClass(brand: Brand){ //o anki seçtiğim markam mavi olsım dğer türlü olmasın  o anki seçtğiğni bana söyle
    if(brand == this.currentBrand) {  //
      return "list-group-item active"
    }
    else {
      return "list-group-item cursorPointer" 
    }
  }

  getAllBrandClass(){  //branda göre filtrele
    if(!this.currentBrand){
      return "list-group-item list-group-item-action list-group-item-dark active";
    }else{
      return "list-group-item list-group-item-action list-group-item-dark";
    }
  }
}


//npm install jquery = navbara lınk vernel için istall yap  bunu angular.jsonda belirt