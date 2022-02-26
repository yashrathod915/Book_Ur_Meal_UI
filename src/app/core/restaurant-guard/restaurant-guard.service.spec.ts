import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';

import { RestaurantGuardService } from 'app/core/restaurant-guard/restaurant-guard.service';

describe('RestaurantGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports : [
      RouterTestingModule
    ]
  }
     
  ));

  it('should be created', () => {
    const service: RestaurantGuardService = TestBed.get(RestaurantGuardService);
    expect(service).toBeTruthy();
  });
});
