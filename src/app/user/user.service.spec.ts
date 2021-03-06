import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';
import { UserService } from 'app/user/user.service';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[RouterTestingModule, HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
