import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  imports: [CommonModule],
  standalone: true,
  template: `
  <div class="w-full h-screen flex flex-col items-center justify-center text-center gap-8">
    <h1 class="text-2xl">Cronometro</h1>
    
    <div class="flex flex-col gap-4 justify-center items-center">
      <span>{{count()}}</span>

      <button class="cursor-pointer font-black" (click)="PlayCounter()">Play</button>
      <button class="cursor-pointer font-black" (click)="PauseCounter()">Pause</button>
    </div>
  </div>
  `
})
export class Cronometro {
  count = signal(0);
  intr: any = null
  running = false

  PlayCounter() {
    if (this.running) return
    this.running = true

    this.intr = setInterval(() => {
      this.count.update(c => c + 1);
    }, 1000)
  }

  PauseCounter() {
    clearInterval(this.intr)
    this.intr = null
    this.running = false


  }

}


