import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModuleModule } from 'app/material-module/material-module.module';
import { ReactiveFormsModule,  FormsModule } from '@angular/forms';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from 'app/core/login/login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[NgHttpLoaderModule, ReactiveFormsModule, FormsModule, MaterialModuleModule,RouterTestingModule,HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
