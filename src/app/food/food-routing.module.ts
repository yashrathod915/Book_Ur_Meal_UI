import { RestaurantByCitiesComponent } from 'app/food/restaurant-by-cities/restaurant-by-cities.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodComponent } from 'app/food/food.component';
import { FoodDetailsComponent } from 'app/food/food-details/food-details.component';
import { SearchFoodComponent } from 'app/food/search-food/search-food.component';
import {FoodByRestaurantComponent} from 'app/food/food-by-restaurant/food-by-restaurant.component';

const routes: Routes = [
  { path: '', component: FoodComponent },
  { path: 'food-details/:foodId', pathMatch: 'full', component: FoodDetailsComponent },
  { path: 'food-search', component: SearchFoodComponent},
  { path: ':city', component: RestaurantByCitiesComponent },
  { path: ':city/:restaurantId',component:  FoodByRestaurantComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule { }
