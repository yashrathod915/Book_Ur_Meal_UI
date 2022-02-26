import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import { UserRoutingModule } from 'app/user/user-routing.module';
import { UserComponent } from 'app/user/user.component';
import { CartComponent } from 'app/user/cart/cart.component';
import {MaterialModuleModule} from 'app/material-module/material-module.module';

@NgModule({
  declarations: [UserComponent,CartComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModuleModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
