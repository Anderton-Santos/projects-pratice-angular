import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentapi } from './componentapi';

describe('Componentapi', () => {
  let component: Componentapi;
  let fixture: ComponentFixture<Componentapi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componentapi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componentapi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
