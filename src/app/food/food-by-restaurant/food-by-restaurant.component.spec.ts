import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA  } from "@angular/core";
import { FoodByRestaurantComponent } from './food-by-restaurant.component';

describe('FoodByRestaurantComponent', () => {
  let component: FoodByRestaurantComponent;
  let fixture: ComponentFixture<FoodByRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodByRestaurantComponent ],
      imports:[RouterModule, HttpClientTestingModule,RouterTestingModule],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodByRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
