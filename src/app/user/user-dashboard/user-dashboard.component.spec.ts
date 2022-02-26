import { ReactiveFormsModule,  FormsModule } from '@angular/forms';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDashboardComponent } from 'app/user/user-dashboard/user-dashboard.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
describe('UserDashboardComponent', () => {
  let component: UserDashboardComponent;
  let fixture: ComponentFixture<UserDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDashboardComponent ],
      imports:[
        NgHttpLoaderModule, ReactiveFormsModule, FormsModule,
        HttpClientTestingModule 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
