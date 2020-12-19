import { TestBed } from '@angular/core/testing';

import { CartDeleteService } from './cart-delete.service';

describe('CartDeleteService', () => {
  let service: CartDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
