import { TestBed } from '@angular/core/testing';

import { LoginServiceService } from './login-service.service';

/**
 * permite la conexión del login con el back
 */
describe('LoginServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginServiceService = TestBed.get(LoginServiceService);
    expect(service).toBeTruthy();
  });
});
