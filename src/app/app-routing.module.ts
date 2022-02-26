import { Role } from './role';
import { UserGuardService } from 'app/core/user-guard/user-guard.service';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantGuardService } from 'app/core/restaurant-guard/restaurant-guard.service';

const coreroutes: Routes = [
  {
    canActivate: [UserGuardService],
    data: { roles: [Role.User] },
    path: 'userModule', loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    canActivate: [UserGuardService],
    data: { roles: [Role.Admin] },
    path: 'AdminModule', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    canActivate: [RestaurantGuardService],
    path: 'Restaurant', loadChildren: () => import('./restaurant/restaurant.module').then(m => m.RestaurantModule)
  },
  { path: 'FoodModule', loadChildren: () => import('./food/food.module').then(m => m.FoodModule) },
  { path: 'CartModule', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  { path: '', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) }];

@NgModule({
  imports: [RouterModule.forRoot(coreroutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
