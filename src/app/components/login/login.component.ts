import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder}  from "@angular/forms"
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
   loginForm:FormGroup;
  

  constructor(private formBuilder:FormBuilder,
    private authService:AuthService,
    private toastrService:ToastrService,
    private localStorage:LocalStorageService,
    private router: Router) { }  //servisi kullanabilmem için 

  ngOnInit(): void {
    this.createLoginForm();
  }
  createLoginForm(){
    this.loginForm=this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })

  }

  login(){  //kişi login olduğu zaman 
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      let loginModel=Object.assign({},this.loginForm.value)
      this.authService.login(loginModel).subscribe(response=>{
        this.toastrService.success("Giriş Başarılı","Başarılı")
        this.localStorage.setItem("token",response.data.token)
        this.router.navigateByUrl("/");
      },responseError=>{
        console.log(responseError)
        this.toastrService.error(responseError.error)
      })
    }
  }



}

