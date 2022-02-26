import { Role } from './../../role';
import { Observable } from 'rxjs';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RestaurantGuardService implements CanActivate {

  constructor(private router: Router) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem("restaurant")) {
      console.log(localStorage.getItem("restaurant"));
      return true;
    }
    else {
      this.router.navigateByUrl('/HomePage');
    }
  }
}