import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private authService:AuthService,  //kişi otantikemi 
    private toastrService:ToastrService,//bilgi vernek için 
    private router:Router){ //logine yönlendirmek için

  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this.authService.isAuthenticated()){
        return true;
      }
      else{
        this.router.navigate(["login"])
        this.toastrService.info("Sisteme Giriş Yapmalısınız")
        return false;
      }
  }
  
}
  //işlemi yapacak kişinin izni(token) varmı varsa devam yoksa ...(car add işlemi ..)
  //izni yoksa logine yönlendir   
  //ve app.routing de cars/add senin   guarden şu de 