import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css'],
})
export class BrandUpdateComponent implements OnInit {
  brandUpdateForm: FormGroup;
  brandId: number;
  brands: Brand[] = [];

  constructor(
    private brandService: BrandService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if ([params['brandId']]) {
        this.brandId = parseInt(params['brandId']);
        this.getByBrandId, params['brandId'];
      }
    });
    this.createBrandFrom();
  }

  createBrandFrom() {
    this.brandUpdateForm = this.formBuilder.group({
      id: [this.brandId, Validators.required],
      brandName: ["", Validators.required],
    });
  }

  getByBrandId(brandId: number) {
    this.brandService.getByBrandId(brandId).subscribe((response) => {
      this.brands = response.data;
    });
  }

  update() {
    if (this.brandUpdateForm.valid) {
      let brandModel = Object.assign({}, this.brandUpdateForm.value);
      brandModel.brandId = Number(brandModel.id);
      this.brandService.update(brandModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
        },
        (responseError) => {
          if (responseError.error.Errors.length > 0) {
           
            for (
              let i = 0;
              i < responseError.errorErrors.length;
              i++
            ) {
              this.toastrService.error(
                responseError.error.Errors[i].ErrorMessage,
                'Doğrulama hatası'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.warning(
        'Lütfen marka bilgilerini eksiksiz doldurunuz.'
      );
    }
  }
}
