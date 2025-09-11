import { Component, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tables',
  imports: [CommonModule],
  templateUrl: './tables.html',
  styleUrl: './tables.css'
})
export class Tables {

  tablesList: { id: number, label: string, content: unknown }[] = [
    {
      id: 1,
      label: "Home",
      content: "Esta é a página inicial, onde você encontra as principais novidades e destaques do nosso site."
    },
    {
      id: 2,
      label: "Contatos",
      content: "Na página de contatos, você pode nos enviar mensagens, solicitar informações ou falar com nossa equipe."
    },
    {
      id: 3,
      label: "Sobre",
      content: "Aqui você conhece nossa história, valores, missão e toda a equipe por trás do projeto."
    },
  ]

  tableIndex = signal<number | null>(null);

  mapBtn(item: number) {
    this.tableIndex.set(item)


  }

}






