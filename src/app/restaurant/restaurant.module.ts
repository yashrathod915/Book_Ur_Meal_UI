import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgHttpLoaderModule } from "ng-http-loader";
import { RestaurantRoutingModule } from 'app/restaurant/restaurant-routing.module';
import { RestaurantComponent } from 'app/restaurant/restaurant.component';
import { OrdersComponent } from 'app/restaurant/orders/orders.component';
import { MaterialModuleModule } from 'app/material-module/material-module.module';

import { EditDishesComponent } from 'app/restaurant/edit-dishes/edit-dishes.component';
import { RestaurantDashboardComponent } from 'app/restaurant/restaurant-dashboard/restaurant-dashboard.component';
import { AddfooditemsComponent } from 'app/restaurant/addfooditems/addfooditems.component';
import { RestaurantHeaderComponent } from 'app/restaurant/restaurant-header/restaurant-header.component';



@NgModule({
  declarations: [RestaurantComponent,OrdersComponent, EditDishesComponent, RestaurantDashboardComponent, AddfooditemsComponent, RestaurantHeaderComponent],
  imports: [
    CommonModule,
    RestaurantRoutingModule,MaterialModuleModule,ReactiveFormsModule,NgHttpLoaderModule
  ]
})
export class RestaurantModule { }
