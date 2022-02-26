import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from 'app/cart/cart.component';
import { UserGuardService } from 'app/core/user-guard/user-guard.service';

const routes: Routes = 
[{
  // canActivate:[UserGuardService],
  path: '', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
