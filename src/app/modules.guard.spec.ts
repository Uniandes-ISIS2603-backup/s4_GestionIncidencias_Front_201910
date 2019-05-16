import { TestBed, async, inject } from '@angular/core/testing';

import { ModulesGuard } from './modules.guard';

describe('ModulesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModulesGuard]
    });
  });

  it('should ...', inject([ModulesGuard], (guard: ModulesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
