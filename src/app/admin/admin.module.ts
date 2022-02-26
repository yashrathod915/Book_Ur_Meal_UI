import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RemoveRestaurantComponent } from './remove-restaurant/remove-restaurant.component';
import { ApproveRestaurantComponent } from './approve-restaurant/approve-restaurant.component';
import { RemoveUserComponent } from './remove-user/remove-user.component';
import { MaterialModuleModule } from 'app/material-module/material-module.module';
import { HttpClientModule } from '@angular/common/http';
import { AdminStatisticsComponent } from './admin-statistics/admin-statistics.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [AdminComponent, AdminDashboardComponent, RemoveRestaurantComponent, ApproveRestaurantComponent, RemoveUserComponent, AdminStatisticsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,HttpClientModule,MaterialModuleModule, ChartsModule, NgHttpLoaderModule.forRoot(),
    RouterModule,
   
  ]
})
export class AdminModule { }
