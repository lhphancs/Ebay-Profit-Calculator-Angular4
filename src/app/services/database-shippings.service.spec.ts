import { TestBed } from '@angular/core/testing';

import { DatabaseShippingsService } from './database-shippings.service';

describe('DatabaseShippingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatabaseShippingsService = TestBed.get(DatabaseShippingsService);
    expect(service).toBeTruthy();
  });
});
