import { Observable } from 'rxjs';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserGuardService implements CanActivate {
  constructor(private router: Router) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let role = JSON.parse(localStorage.getItem("role"));  
    if(role===null){
      this.router.navigateByUrl('/HomePage');
    }
    if (next.data.roles == role.roleName) {
      return true;
    }
    else
      this.router.navigateByUrl('/HomePage');
  }
}