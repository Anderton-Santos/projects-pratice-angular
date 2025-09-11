import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizTwo } from './quiz-two';

describe('QuizTwo', () => {
  let component: QuizTwo;
  let fixture: ComponentFixture<QuizTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
