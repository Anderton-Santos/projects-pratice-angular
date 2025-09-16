import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBuyTrello } from './list-buy-trello';

describe('ListBuyTrello', () => {
  let component: ListBuyTrello;
  let fixture: ComponentFixture<ListBuyTrello>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListBuyTrello]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBuyTrello);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
