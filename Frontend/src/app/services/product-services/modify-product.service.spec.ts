import { TestBed } from '@angular/core/testing';

import { ModifyProductService } from './modify-product.service';

describe('ModifyProductService', () => {
  let service: ModifyProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifyProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
