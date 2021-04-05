import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {
  brands : Brand[] =[];
  brand : Brand
  constructor(private brandService: BrandService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data   ;
      this.brand=response.data[0]
    });
  }

  deleteBrand(brand:Brand){
    this.brandService.delete(brand).subscribe((response=>{
      this.toastrService.success("Araç ismi silindi")
      setTimeout(function(){
        location.reload()
      },400)
    }),errorResponse=>{
      if(errorResponse.error.error.length>0){
        for (let i = 0; i < errorResponse.error.error.length; i++) {
          this.toastrService.error(errorResponse.error.error[i].ErrorMessage,"Doğrulama hatası")
          
        }
      }
    })
  }
}
