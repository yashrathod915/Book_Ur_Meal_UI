// import { RestaurantByCitiesComponent } from 'app/food/restaurant-by-cities/restaurant-by-cities.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from 'app/material-module/material-module.module';
import { CoreRoutingModule } from 'app/core/core-routing.module';
import { CoreComponent } from 'app/core/core.component';
import { SignupComponent } from 'app/core/signup/signup.component';
import { LoginComponent } from 'app/core/login/login.component';
import { LogoutComponent } from 'app/core/logout/logout.component';
import { HomepageComponent } from 'app/core/homepage/homepage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GoogleLoginProvider, SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { RestaurantSignupComponent } from 'app/core/restaurant-signup/restaurant-signup.component';
import { ErrorPageComponent } from 'app/core/error-page/error-page.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { UserDashboardComponent } from 'app/user/user-dashboard/user-dashboard.component';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("886013790757-itil2ab63uhk74futvfvk05mvoga6f1v.apps.googleusercontent.com")
  }
]);
export function provideConfig() {
  return config;
}
@NgModule({
  declarations: [CoreComponent, SignupComponent, LoginComponent, LogoutComponent, HomepageComponent, RestaurantSignupComponent, ErrorPageComponent, UserDashboardComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModuleModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocialLoginModule, NgHttpLoaderModule.forRoot()
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: provideConfig,
  }]

})
export class CoreModule {

}
