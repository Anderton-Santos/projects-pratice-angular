import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPai } from './list-pai';

describe('ListPai', () => {
  let component: ListPai;
  let fixture: ComponentFixture<ListPai>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPai]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPai);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
