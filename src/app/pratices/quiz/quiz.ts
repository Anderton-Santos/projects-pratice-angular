import { AfterViewInit, Component, ElementRef, signal, ViewChild, effect } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-quiz',
  imports: [CommonModule],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css'
})
export class Quiz implements AfterViewInit {

  quiz: { quest: string, res: boolean }[] = [
    {
      quest: "No Angular, um componente pode ter múltiplos templates HTML associados a ele.",
      res: false
    },
    {
      quest: "O Angular usa o conceito de 'Two-way Data Binding' para sincronizar dados entre o componente e a view.",
      res: true
    },
    {
      quest: "O decorator @Injectable é usado para definir serviços que podem ser injetados em componentes ou outros serviços.",
      res: true
    },
    {
      quest: "O *ngFor é usado para criar condicionais dentro do template.",
      res: false
    },
    {
      quest: "O Angular Router é usado para gerenciar navegação entre diferentes views ou componentes da aplicação.",
      res: true
    }
  ]

  count = signal(0)
  score = signal(0)

  fineshed = false


  @ViewChild('btntrue') trueButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('btnfalse') falseButton!: ElementRef<HTMLButtonElement>;

  ngAfterViewInit(): void {
    this.trueButton.nativeElement.addEventListener('click', () => {
      if (this.quiz[this.count()].res == true) {
        this.score.update(s => s + 1)
      }

      if (this.count() >= this.quiz.length - 1) {
        this.fineshed = true
      }

      this.count.update(p => p + 1)

    })

    this.falseButton.nativeElement.addEventListener('click', () => {
      if (this.quiz[this.count()].res == false) {
        this.score.update(s => s + 1)
      }

      if (this.count() >= this.quiz.length - 1) {
        this.fineshed = true
      }

      this.count.update(p => p + 1)

    })



  }

  constructor() {
    effect(() => {
      console.log('Score atualizado:', this.score());
    });

    console.log(this.quiz.length)
  }





}
