import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder}  from "@angular/forms"
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private authService:AuthService) { }  //servisi kullanabilmem için 

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

      this.authService.login(loginModel).subscribe(data=>{
        console.log(data)
      })
    }
  }


}

