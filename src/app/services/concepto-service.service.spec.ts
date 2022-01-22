import { TestBed } from '@angular/core/testing';

import { ConceptoServiceService } from './concepto-service.service';

describe('ConceptoServiceService', () => {
  let service: ConceptoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConceptoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
