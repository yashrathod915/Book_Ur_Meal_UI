import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModuleModule } from './../../material-module/material-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgHttpLoaderModule } from 'ng-http-loader';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfooditemsComponent } from 'app/restaurant/addfooditems/addfooditems.component';

describe('AddfooditemsComponent', () => {
  let component: AddfooditemsComponent;
  let fixture: ComponentFixture<AddfooditemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfooditemsComponent ],
      imports:[NgHttpLoaderModule,MaterialModuleModule,FormsModule,ReactiveFormsModule,HttpClientTestingModule,RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfooditemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
