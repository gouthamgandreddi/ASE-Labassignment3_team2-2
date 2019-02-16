import { TestBed } from '@angular/core/testing';

import { NutritiondataService } from './nutritiondata.service';

describe('NutritiondataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NutritiondataService = TestBed.get(NutritiondataService);
    expect(service).toBeTruthy();
  });
});
