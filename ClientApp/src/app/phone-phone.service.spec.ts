import { TestBed } from '@angular/core/testing';

import { PhonePhoneService } from './phone-phone.service';

describe('PhonePhoneService', () => {
  let service: PhonePhoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhonePhoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
