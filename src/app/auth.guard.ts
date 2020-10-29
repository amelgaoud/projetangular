import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {



  constructor(private router: Router ){}

  canActivate(activatedroute: ActivatedRouteSnapshot,
     routerstate: RouterStateSnapshot) {


    if(localStorage.getItem('connecte')=== '0'){
      this.router.navigate(['/']);
      return false;
    }
    return true ;
  }


}
