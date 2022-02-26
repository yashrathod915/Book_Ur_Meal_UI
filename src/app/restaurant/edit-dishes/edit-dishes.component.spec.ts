import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDishesComponent } from 'app/restaurant/edit-dishes/edit-dishes.component';

describe('EditDishesComponent', () => {
  let component: EditDishesComponent;
  let fixture: ComponentFixture<EditDishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDishesComponent ],
      imports:[NgHttpLoaderModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
