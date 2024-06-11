import { TestBed } from '@angular/core/testing';

import { FiguraCardService } from './figura-card.service';

describe('FiguraCardService', () => {
  let service: FiguraCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiguraCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
