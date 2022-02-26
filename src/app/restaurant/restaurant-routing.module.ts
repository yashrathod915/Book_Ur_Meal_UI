import { RestaurantGuardService } from 'app/core/restaurant-guard/restaurant-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { RestaurantComponent } from 'app/restaurant/restaurant.component';
import { AddfooditemsComponent } from 'app/restaurant/addfooditems/addfooditems.component';
import { EditDishesComponent } from 'app/restaurant/edit-dishes/edit-dishes.component';
import { RestaurantDashboardComponent } from 'app/restaurant/restaurant-dashboard/restaurant-dashboard.component';

const routes: Routes = [{
  path: '', component: RestaurantComponent,
  canActivate: [RestaurantGuardService],
  children: [
    { path: 'addfood', component: AddfooditemsComponent },
    { path: 'editfood', component: EditDishesComponent },
    { path: '', component: RestaurantDashboardComponent }
  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
