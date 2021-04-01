import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormControl,Validators,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(private authService:AuthService,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService,private router:Router) { }

  registerForm:FormGroup;
  
  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm(){
    this.registerForm=this.formBuilder.group(
      {
        firstName:["",Validators.required],
        lastName:["",Validators.required],
        password:["",Validators.required,Validators.minLength(4),Validators.maxLength(8)],
        confirmPassword:["",Validators.required] ,//tekrrar gir şifre
        email:["",Validators.required]
      },
      {validator:this.passwordMathcValidator}  //iki şifre uysacak 
    )
  }
  passwordMathcValidator(g:FormGroup){
    return g.get('password')?.value === g.get('confirmPassword')?.value?null:{misMatch:true}
  }


   register(){  //kişi login olduğu zaman 
    if(this.registerForm.valid){
      console.log(this.registerForm.value);
      let registerModel=Object.assign({},this.registerForm.value)

      this.authService.login(registerModel).subscribe(response=>{
        this.toastrService.info(response.message)
        localStorage.setItem("token",response.data.token)
      },responseError=>{
        console.log(responseError)
        this.toastrService.error(responseError.error)
      })
    }
  }

  


}
