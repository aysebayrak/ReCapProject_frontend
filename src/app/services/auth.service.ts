import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { SingleResponseModel } from '../models/singleResponseModel';

import { TokenModel } from '../models/tokenModel';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl="https://localhost:44301/api/auth";

  constructor(private httpClient:HttpClient,
    private localStorageService:LocalStorageService,
    private router:Router
    ) { }

  login(loginModel:LoginModel) {
    let newPath=this.apiUrl+'login';
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",loginModel)


  }
  isAuthenticated(){
    return this.localStorageService.isExist("token");
  }
  register(registerModel:RegisterModel){
    let newPath=this.apiUrl+'login';
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"register",registerModel)


  }
  logOut(){
    localStorage.removeItem("token");  //silme
    localStorage.removeItem("user");
    localStorage.removeItem("email");
  }
  



  
}

