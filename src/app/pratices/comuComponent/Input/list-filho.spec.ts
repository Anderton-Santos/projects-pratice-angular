import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFilho } from './list-filho';

describe('ListFilho', () => {
  let component: ListFilho;
  let fixture: ComponentFixture<ListFilho>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListFilho]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFilho);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
