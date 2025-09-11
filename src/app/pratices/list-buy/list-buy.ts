import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'

@Component({
  selector: 'app-list-buy',
  imports: [CommonModule, FormsModule],
  templateUrl: './list-buy.html',
  styleUrl: './list-buy.css'
})
export class ListBuy {

  items = signal<{ product: string; price: string; category: string }[]>([])

  listCategory = signal<string[]>([
    "Alimentos",
    "Limpeza",
    "Higiene",
    "Outros"
  ])



  submitForm(form: NgForm) {
    if (form.valid) {
      this.items.update((prev) => [
        ...prev, {
          product: form.value.inputProduct,
          price: form.value.inputPrice,
          category: form.value.selectCategory
        }
      ])

      form.reset()
    }




    console.log(form.value)
  }

}
