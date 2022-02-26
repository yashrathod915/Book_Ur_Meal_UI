import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'app/app-routing.module';
import { AppComponent } from 'app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from 'app/material-module/material-module.module';
import { CoreModule } from 'app/core/core.module'
import { HeaderComponent } from 'app/core/header/header.component';
import { FooterComponent } from 'app/core/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgHttpLoaderModule } from "ng-http-loader";
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent, HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    CoreModule,
    HttpClientModule,
    FormsModule,
    NgHttpLoaderModule.forRoot()
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
