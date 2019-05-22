import { TestBed, async, inject } from '@angular/core/testing';

import { GuardTecnicoGuard } from './guard-tecnico.guard';

describe('GuardTecnicoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardTecnicoGuard]
    });
  });

  it('should ...', inject([GuardTecnicoGuard], (guard: GuardTecnicoGuard) => {
    expect(guard).toBeTruthy();
  }));
});
