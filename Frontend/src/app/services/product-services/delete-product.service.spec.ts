import { TestBed } from '@angular/core/testing';

import { DeleteProductService } from './delete-product.service';

describe('DeleteProductService', () => {
  let service: DeleteProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
