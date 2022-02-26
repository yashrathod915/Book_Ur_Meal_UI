import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModuleModule } from './../../material-module/material-module.module';
import { RouterTestingModule } from '@angular/router/testing';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFoodComponent } from 'app/food/search-food/search-food.component';

describe('SearchFoodComponent', () => {
  let component: SearchFoodComponent;
  let fixture: ComponentFixture<SearchFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFoodComponent ],
      imports:[NgHttpLoaderModule,
      RouterTestingModule,HttpClientTestingModule,
    MaterialModuleModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
