import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantByCitiesComponent } from 'app/food/restaurant-by-cities/restaurant-by-cities.component';
import { NgHttpLoaderModule } from 'ng-http-loader';

describe('RestaurantByCitiesComponent', () => {
  let component: RestaurantByCitiesComponent;
  let fixture: ComponentFixture<RestaurantByCitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantByCitiesComponent ],
      imports:[NgHttpLoaderModule,HttpClientTestingModule,
      RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantByCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
