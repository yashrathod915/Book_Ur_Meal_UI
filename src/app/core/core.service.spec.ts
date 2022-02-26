import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CoreService } from 'app/core/core.service';

describe('CoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: CoreService = TestBed.get(CoreService);
    expect(service).toBeTruthy();
  });
});
