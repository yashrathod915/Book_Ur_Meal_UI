import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModuleModule } from './../../material-module/material-module.module';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDetailsComponent } from 'app/food/food-details/food-details.component';

describe('FoodDetailsComponent', () => {
  let component: FoodDetailsComponent;
  let fixture: ComponentFixture<FoodDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodDetailsComponent ],
      imports:[NgHttpLoaderModule, MaterialModuleModule,
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
