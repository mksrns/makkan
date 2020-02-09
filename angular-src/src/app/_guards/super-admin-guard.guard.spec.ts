import { TestBed, async, inject } from '@angular/core/testing';

import { SuperAdminGuardGuard } from './super-admin-guard.guard';

describe('SuperAdminGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuperAdminGuardGuard]
    });
  });

  it('should ...', inject([SuperAdminGuardGuard], (guard: SuperAdminGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
