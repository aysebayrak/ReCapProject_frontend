import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
      
    })
  }

}
