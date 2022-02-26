import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';
import { UserGuardService } from 'app/core/user-guard/user-guard.service';

describe('UserGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      RouterTestingModule
    ]
  }));

  it('should be created', () => {
    const service: UserGuardService = TestBed.get(UserGuardService);
    expect(service).toBeTruthy();
  });
});
