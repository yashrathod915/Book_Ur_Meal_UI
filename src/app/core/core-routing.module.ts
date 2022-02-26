import { LogoutComponent } from 'app/core/logout/logout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from 'app/core/core.component';
import { SignupComponent } from 'app/core/signup/signup.component'
import { LoginComponent } from 'app/core/login/login.component';
import { HomepageComponent } from 'app/core/homepage/homepage.component';
import { RestaurantSignupComponent } from 'app/core/restaurant-signup/restaurant-signup.component';
import { ErrorPageComponent } from 'app/core/error-page/error-page.component';
import { UserDashboardComponent } from 'app/user/user-dashboard/user-dashboard.component';
const routes: Routes = [
  { path: '', component: CoreComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'HomePage', component: HomepageComponent },
  { path: 'searchfood/:searchedValue', loadChildren: () => import('app/food/food.module').then(m => m.FoodModule) },
  { path: 'restaurantRegistration', loadChildren: () => import('app/restaurant/restaurant.module').then(m => m.RestaurantModule) },
  { path: 'logout', component: LogoutComponent },
  { path: 'signup/restaurant', component: RestaurantSignupComponent },
  { path: 'HomePage', component: HomepageComponent },
  { path: 'searchfood', loadChildren: () => import('app/food/food.module').then(m => m.FoodModule) },
  { path: 'restaurantRegistration', loadChildren: () => import('app/restaurant/restaurant.module').then(m => m.RestaurantModule) },
  { path: 'userDashboard', component: UserDashboardComponent },
  { path: 'restaurantBycity', loadChildren: () => import('app/food/food.module').then(m => m.FoodModule) },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
