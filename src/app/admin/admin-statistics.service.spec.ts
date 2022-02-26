import { ChartsModule } from 'ng2-charts';
import { MaterialModuleModule } from 'app/material-module/material-module.module';
import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { AdminStatisticsService } from './admin-statistics.service';

describe('AdminStatisticsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports : [
      HttpClientTestingModule,
      MaterialModuleModule,
      ChartsModule
    ]
  }));

  it('should be created', () => {
    const service: AdminStatisticsService = TestBed.get(AdminStatisticsService);
    expect(service).toBeTruthy();
  });
});
