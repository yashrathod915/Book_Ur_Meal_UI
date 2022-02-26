import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { NgHttpLoaderModule } from "ng-http-loader";
import { CartRoutingModule } from 'app/cart/cart-routing.module';
import { CartComponent } from 'app/cart/cart.component';
import { MaterialModuleModule } from "../material-module/material-module.module";


@NgModule({
  declarations: [CartComponent],
  imports: [
    CartRoutingModule,
   MatIconModule,
   CommonModule,
   NgHttpLoaderModule,
   MatIconModule,
   MaterialModuleModule
    ]
})
export class CartModule { }
