import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  
  editProfileForm:FormGroup;
  password:FormControl;
  email:string;
  user:User;

  constructor(
    private userService:UserService,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  createProfileAddForm(){
    this.editProfileForm=this.formBuilder.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }
  getUser(){
    this.userService.getByEmail(localStorage.getItem('email')!).subscribe(response=>{
      this.user=response.data;
      this.editProfileForm.setValue({
        firstName:this.user.firstName,
        lastName:this.user.lastName,
        email:this.user.email,
        password:""
      })
    },responseError=>{
      this.toastrService.error(responseError.console.error);
      
    })
 }
 editProfile(){//düzenle 
   if(this.editProfileForm.valid){
     let profilModel=Object.assign({},this.editProfileForm.value)
     console.log(this.user)
     profilModel.userId=this.user.userId;
     console.log(profilModel)
     this.userService.userUpdate(profilModel).subscribe(response=>{
       this.toastrService.success("Tekrar Giriş Lütfen");
       this.router.navigate(["/home"]);
       this.authService.logOut();

     },
     responseError=>{
       this.toastrService.error(responseError.error);
     });
   }else{
     this.toastrService.error("HATA")
   }
 }

}


