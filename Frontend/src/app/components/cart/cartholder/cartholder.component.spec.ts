import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartholderComponent } from './cartholder.component';

describe('CartholderComponent', () => {
  let component: CartholderComponent;
  let fixture: ComponentFixture<CartholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
