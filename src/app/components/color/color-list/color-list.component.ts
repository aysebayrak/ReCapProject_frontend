import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {
  colors : Color[] ;
  constructor(
    private colorService: ColorService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getColors();
  }

  
  getColors() {
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data   
    });
  }

  delete(color: Color){
    this.colorService.delete(color).subscribe(response=>{
      this.toastrService.success(color.colorName+" markası silindi","Başarılı");
      this.getColors()
    })
  }


}
