import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBuy } from './list-buy';

describe('ListBuy', () => {
  let component: ListBuy;
  let fixture: ComponentFixture<ListBuy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListBuy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBuy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
