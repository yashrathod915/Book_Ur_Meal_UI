import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RestaurantHeaderComponent} from 'app/restaurant/restaurant-header/restaurant-header.component';
import { RestaurantComponent } from 'app/restaurant/restaurant.component';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe('RestaurantComponent', () => {
  let component: RestaurantComponent;
  let fixture: ComponentFixture<RestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantComponent ],
      imports:[NgHttpLoaderModule, RouterTestingModule,HttpClientTestingModule],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
   
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    imports : [
      RestaurantHeaderComponent
    ]
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
