import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModuleModule } from 'app/material-module/material-module.module';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CartComponent } from 'app/cart/cart.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      imports:[NgHttpLoaderModule, MaterialModuleModule, HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
