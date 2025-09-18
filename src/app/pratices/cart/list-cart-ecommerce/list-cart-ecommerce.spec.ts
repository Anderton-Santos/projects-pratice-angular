import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCartEcommerce } from './list-cart-ecommerce';

describe('ListCartEcommerce', () => {
  let component: ListCartEcommerce;
  let fixture: ComponentFixture<ListCartEcommerce>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCartEcommerce]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCartEcommerce);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
