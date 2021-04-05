import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-filter',
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.css']
})
export class CarFilterComponent implements OnInit {

  brands : Brand[] = [];
  colors: Color[] = [];
  brandFilter: number;
  colorFilter: number;
  selectedBrand: number;
  selectedColor: number;
 


  constructor(private brandService: BrandService,
    private colorService: ColorService) { }

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      
    });
  }
  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      
    });
  }
  getSelectedBrand(brandId: Number) {
    if (this.brandFilter == brandId)
      return true;
    else
      return false;
  }
  getSelectedColor(colorId: Number) {
    if (this.colorFilter == colorId)
      return true;
    else
      return false;
  }
  setSelectedColor(colorId: number){
    this.selectedColor = colorId;
  }

  setSelectedBrand(brandId: number){
    this.selectedBrand = brandId;
  }
 

}