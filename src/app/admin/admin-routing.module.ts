
import { RemoveRestaurantComponent } from './remove-restaurant/remove-restaurant.component';
import { ApproveRestaurantComponent } from './approve-restaurant/approve-restaurant.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RestaurantDashboardComponent } from './../restaurant/restaurant-dashboard/restaurant-dashboard.component';

import { AdminStatisticsComponent } from './admin-statistics/admin-statistics.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
const routes: Routes = [{ path: '', component: AdminComponent ,
children: [
{ path: 'request', component: AdminDashboardComponent },
{ path: 'approved', component: ApproveRestaurantComponent },
{ path: 'rejected', component: RemoveRestaurantComponent },
{ path: 'adminStatics', component: AdminStatisticsComponent },
]}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
