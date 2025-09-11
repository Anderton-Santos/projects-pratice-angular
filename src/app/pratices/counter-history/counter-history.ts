import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-history',
  imports: [],
  styleUrl: './counter-history.css',
  template: `
  <h1 class="font-bold text-2xl">Counter History</h1>

  <div class="text-2xl flex gap-4 p-4">
    <button class="cursor-pointer" (click)="increment()">+</button>
    <button class="cursor-pointer" (click)="decreament()">-</button>
  </div>

  <div>
    <ul>
      @for (item of arra; track $index) {
        <li>
          <span>{{item.messa}} {{item.value}}</span>
        </li>
      }
    </ul>
  </div>
  `,
})
export class CounterHistory {

  arra: { value: number, messa: string }[] = [{ value: 0, messa: "inicial" }]
  mess = ""

  handleMessage(text: string) {
    this.mess = text
  }



  get lastCount(): number {
    return this.arra[this.arra.length - 1].value

  }



  increment() {
    this.arra.push({ value: this.lastCount + 1, messa: "Adiciounou" })
    this.handleMessage(`Você adicounou`)
  }

  decreament() {
    this.arra.push({ value: this.lastCount - 1, messa: "Removeu" })
    this.handleMessage(`Você Removeu`)
  }







}
