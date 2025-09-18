import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatEcommerce } from './cat-ecommerce';

describe('CatEcommerce', () => {
  let component: CatEcommerce;
  let fixture: ComponentFixture<CatEcommerce>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatEcommerce]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatEcommerce);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
