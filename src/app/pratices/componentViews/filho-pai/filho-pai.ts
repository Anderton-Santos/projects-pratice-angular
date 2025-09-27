import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Filho } from "../filho/filho";
import { Pai } from "../pai/pai";

@Component({
  selector: 'app-filho-pai',
  imports: [Filho, Pai],
  templateUrl: './filho-pai.html',
  styleUrl: './filho-pai.css'
})
export class FilhoPai {
  @ViewChild(Filho) filho!: Filho
  @ViewChildren(Pai) itemPai!: QueryList<Pai>


  usarFilho(){
    console.log(this.filho.mensagem);
    this.filho.falar()
  }

  chamarTodos(){
    this.itemPai.forEach(prev => {
      prev.falar()
    })

  }


}
