import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule,  FormsModule } from '@angular/forms';
import { MaterialModuleModule } from './../../material-module/material-module.module';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SignupComponent } from 'app/core/signup/signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupComponent ], 
      imports:[NgHttpLoaderModule, MaterialModuleModule, ReactiveFormsModule, FormsModule,RouterTestingModule,HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
