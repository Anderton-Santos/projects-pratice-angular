import { Component, signal } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-quiz-two',
  imports: [CommonModule],
  templateUrl: './quiz-two.html',
  styleUrl: './quiz-two.css'
})
export class QuizTwo {

  quiz: { quest: string, res: boolean }[] = [
    {
      quest: "Pelé ganhou 3 Copas do Mundo pela Seleção Brasileira.",
      res: true
    },
    {
      quest: "A Copa do Mundo de 2014 foi realizada na Argentina.",
      res: false
    },
    {
      quest: "Cristiano Ronaldo já jogou no Manchester United.",
      res: true
    },
    {
      quest: "O Brasil possui 7 títulos de Copa do Mundo da FIFA.",
      res: false
    },
    {
      quest: "O gol é válido mesmo que a bola ultrapasse a linha apenas pela metade.",
      res: false
    }
  ];

  count = signal(0)
  score = signal(0)

  finished = false


  QuizRes(item: boolean) {

    if (item === this.quiz[this.count()].res) {
      this.score.update(s => s + 1);
      console.log("score: " + this.score());
    }


    if (this.count() + 1 >= this.quiz.length) {
      this.finished = true;
    } else {
      this.count.update(i => i + 1);
      console.log("count: " + this.count());
    }
  }
}