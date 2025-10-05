import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinamicForm } from './dinamic-form';

describe('DinamicForm', () => {
  let component: DinamicForm;
  let fixture: ComponentFixture<DinamicForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DinamicForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DinamicForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
