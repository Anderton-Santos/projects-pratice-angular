import { Component, signal } from '@angular/core';

interface array {
  num: number;
  mes: string;
}

@Component({
  selector: 'app-counter-history',
  imports: [],
  styleUrl: './counter-history.css',
  template: `
  <h1 class="font-bold text-2xl">Counter History</h1>

  <div class="text-2xl flex gap-4 p-4">
    <button class="cursor-pointer" (click)="Increament()">+</button>
    <button class="cursor-pointer" (click)="Decreament()">-</button>
  </div>

  <div>
    <ul>
      @for (item of array(); track $index) {
        <li>
          <span>{{item.num}}</span> -
          <span>{{item.mes}}</span>
        </li>
      }
    
    </ul>
  </div>
  `,
})

export class CounterHistory {

  count = signal(0)
  array = signal<array[]>([])

  message(text: string) {
    return text


  }

  Increament() {
    this.count.update(count => count + 1)
    this.array.update(array => [...array, { num: this.count(), mes: "Adicionou" }])
    console.log(this.array())




  }

  Decreament() {
    this.count.update(i => i - 1)
    this.array.update(array => [...array, { num: this.count(), mes: "Removeu" }])
    console.log(this.array())

  }






}
