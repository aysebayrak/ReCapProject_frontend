import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  constructor(private authService:AuthService,
    private localStorageService:LocalStorageService,
    private toastr:ToastrService
    ) { }
  
  loginUser:any=[];
  ngOnInit(): void {

  }
  login(){
    this.authService.login(this.loginUser);
  }
  logOut(){
    this.authService.logOut();
    this.toastr.info("Çıkış Başarılı ");
  
  }

}
