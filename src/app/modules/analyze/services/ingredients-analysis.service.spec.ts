/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IngredientsAnalysisService } from './ingredients-analysis.service';

describe('Service: IngredientsAnalysis', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IngredientsAnalysisService]
    });
  });

  it('should ...', inject([IngredientsAnalysisService], (service: IngredientsAnalysisService) => {
    expect(service).toBeTruthy();
  }));
});
