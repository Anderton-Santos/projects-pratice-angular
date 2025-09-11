import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterHistory } from './counter-history';

describe('CounterHistory', () => {
  let component: CounterHistory;
  let fixture: ComponentFixture<CounterHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterHistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
