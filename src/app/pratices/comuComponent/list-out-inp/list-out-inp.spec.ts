import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOutInp } from './list-out-inp';

describe('ListOutInp', () => {
  let component: ListOutInp;
  let fixture: ComponentFixture<ListOutInp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOutInp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOutInp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
