import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDashboardComponent } from 'app/restaurant/restaurant-dashboard/restaurant-dashboard.component';

describe('RestaurantDashboardComponent', () => {
  let component: RestaurantDashboardComponent;
  let fixture: ComponentFixture<RestaurantDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
