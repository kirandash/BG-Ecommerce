import { TestBed } from '@angular/core/testing';

import { SellerAuthRouteGuardService } from './seller-auth-route-guard.service';

describe('SellerAuthRouteGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SellerAuthRouteGuardService = TestBed.get(SellerAuthRouteGuardService);
    expect(service).toBeTruthy();
  });
});
