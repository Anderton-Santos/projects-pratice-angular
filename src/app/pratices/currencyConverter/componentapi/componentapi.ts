
import { Component, inject } from '@angular/core';
import { Serviceapi } from '../serviceapi';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componentapi',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <h1>Conversor de Moedas</h1>

    <div class="flex gap-2 items-center">
      <label>De:</label>
      <select [formControl]="rateControl" class="border p-1">
         @for (item of apiService.infoCoin; track $index) {
       <option  value={{item.coin}}>{{item.coin}}</option>
     }

      </select>

      <label>Valor:</label>
      <input type="number" [formControl]="amountCoin" class="border p-1 w-20">
      
      <button (click)="convertApi()" class="bg-blue-500 text-white p-1 rounded">Converter</button>
    </div>

    @if(convertedAmount !== null){
      <p>Valor convertido: {{ convertedAmount | number:'1.2-2' }}</p>
    }
  `,
  styles: [`
    h1 { font-size: 1.5rem; margin-bottom: 1rem; }
    div { margin-bottom: 1rem; }
  `]
})
export class Componentapi {
  apiService = inject(Serviceapi);

  amountCoin = new FormControl<number>(0);
  rateControl = new FormControl<string>('BRL');

  convertedAmount: number | null = null;

  convertApi() {
    const coin = this.apiService.infoCoin.find(c => c.coin === this.rateControl.value);
    if (!coin) {
      this.convertedAmount = null;
      return;
    }

    this.convertedAmount = (this.amountCoin.value || 0) * coin.rate;
  }

  constructor() {
    this.apiService.getApi();
  }
}
