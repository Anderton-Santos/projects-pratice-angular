import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterHistory } from "./pratices/counter-history/counter-history";
import { Cronometro } from "./pratices/cronometro/cronometro";
import { Quiz } from "./pratices/quiz/quiz";
import { QuizTwo } from "./pratices/quiz-two/quiz-two";
import { Tables } from "./pratices/tables/tables";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterHistory, Cronometro, Quiz, QuizTwo, Tables],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project-pratice-angular');
}
