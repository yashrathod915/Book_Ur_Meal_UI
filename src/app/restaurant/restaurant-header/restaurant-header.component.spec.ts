import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantHeaderComponent } from 'app/restaurant/restaurant-header/restaurant-header.component';

describe('RestaurantHeaderComponent', () => {
  let component: RestaurantHeaderComponent;
  let fixture: ComponentFixture<RestaurantHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
