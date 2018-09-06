import { TestBed } from '@angular/core/testing';

import { DatabaseUsersService } from './database-users.service';

describe('DatabaseUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatabaseUsersService = TestBed.get(DatabaseUsersService);
    expect(service).toBeTruthy();
  });
});
