import { MaterialModuleModule } from './../../material-module/material-module.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from 'app/core/footer/footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ],
      imports:[MaterialModuleModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
