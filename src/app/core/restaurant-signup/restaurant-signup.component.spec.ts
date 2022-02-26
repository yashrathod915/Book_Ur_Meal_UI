import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModuleModule } from './../../material-module/material-module.module';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantSignupComponent } from 'app/core/restaurant-signup/restaurant-signup.component';

describe('RestaurantSignupComponent', () => {
  let component: RestaurantSignupComponent;
  let fixture: ComponentFixture<RestaurantSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantSignupComponent ],
      imports:[NgHttpLoaderModule, MaterialModuleModule, ReactiveFormsModule, FormsModule,RouterTestingModule,HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
