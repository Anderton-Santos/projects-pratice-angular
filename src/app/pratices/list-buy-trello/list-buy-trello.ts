import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

import { ListTrelloProps } from '../types/pratices_types';

@Component({
  selector: 'app-list-buy-trello',
  imports: [CommonModule, FormsModule],
  templateUrl: './list-buy-trello.html',
  styleUrl: './list-buy-trello.css'
})
export class ListBuyTrello {

  listProduct = signal<ListTrelloProps[]>([])




  listCategory = [
    "Higiene", "Limpeza", "Alimentos", "Outros",
  ]

  submitForm(form: NgForm) {
    this.listProduct.update(prev => [...prev, {
      ...form.value
    }])
    form.reset()
    console.log(this.listProduct())

  }



}
