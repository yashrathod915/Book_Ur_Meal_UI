import { MaterialModuleModule } from 'app/material-module/material-module.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { AdminComponent } from './admin.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComponent ],
      imports:[NgHttpLoaderModule,
        MaterialModuleModule,
        RouterTestingModule,
        ChartsModule,
        NoopAnimationsModule

      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
