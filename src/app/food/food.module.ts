import { RestaurantByCitiesComponent } from './restaurant-by-cities/restaurant-by-cities.component';
import { NgModule } from '@angular/core';
import { FoodRoutingModule } from 'app/food/food-routing.module';
import { FoodComponent } from 'app/food/food.component';
import { SearchFoodComponent } from 'app/food/search-food/search-food.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { FoodDetailsComponent } from 'app/food/food-details/food-details.component';
import { NgHttpLoaderModule } from "ng-http-loader";
import { FoodByRestaurantComponent } from './food-by-restaurant/food-by-restaurant.component';

@NgModule({
  declarations: [FoodComponent, SearchFoodComponent,FoodDetailsComponent,RestaurantByCitiesComponent, FoodByRestaurantComponent
  ],
  imports: [
    FoodRoutingModule,
    MatInputModule,
    MatCardModule,
    CommonModule,
    MatGridListModule,
    MatToolbarModule,
    MatBadgeModule,
    NgHttpLoaderModule.forRoot(),
  ],
  providers: [
    FoodRoutingModule,
     
  ]

})
export class FoodModule {
   
 }
