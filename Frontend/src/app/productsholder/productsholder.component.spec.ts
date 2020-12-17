import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsholderComponent } from './productsholder.component';

describe('ProductsholderComponent', () => {
  let component: ProductsholderComponent;
  let fixture: ComponentFixture<ProductsholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
