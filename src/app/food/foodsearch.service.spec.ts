import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FoodsearchService } from 'app/food/foodsearch.service';

describe('FoodsearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule

    ]
  }));

  it('should be created', () => {
    const service: FoodsearchService = TestBed.get(FoodsearchService);
    expect(service).toBeTruthy();
  });
});
