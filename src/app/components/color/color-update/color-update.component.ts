import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {
    color:Color[];
    colorUpdateForm:FormGroup;

  constructor(private colorService:ColorService,
   private toastrService:ToastrService,
   private activatedRoute:ActivatedRoute,
   private formBuilder:FormBuilder ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"]){
        this.getByColorId(params["colorId"]);
        this.createColorUpdateForm();
      }
    })
  }
  getByColorId(colorId:number){
    this.colorService.getByColorId(colorId).subscribe((response)=>{
      this.color=response.data
    })


  }
 createColorUpdateForm(){
  this.colorUpdateForm=this.formBuilder.group({
    colorId:["",Validators.required],
    colorName:["",Validators.required]
  })
 }
 
 updateColor() {
  if (this. colorUpdateForm.valid) {
    let colorModel = Object.assign({}, this.colorUpdateForm.value);
    colorModel.brandId = Number(colorModel.id);
    this.colorService.update(colorModel).subscribe(
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
