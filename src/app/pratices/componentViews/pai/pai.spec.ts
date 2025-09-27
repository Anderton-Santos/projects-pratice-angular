import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pai } from './pai';

describe('Pai', () => {
  let component: Pai;
  let fixture: ComponentFixture<Pai>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pai]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pai);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
