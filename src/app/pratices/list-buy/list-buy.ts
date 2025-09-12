import { CommonModule, JsonPipe } from '@angular/common';
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

  indexEdit = signal<null | number>(null)

  listCategory = signal<string[]>([
    "Alimentos",
    "Limpeza",
    "Higiene",
    "Outros"
  ])



  submitForm(form: NgForm) {
    if (form.valid) {


      if (this.indexEdit() != null) {
        this.items.update(prev => {
          const copy = [...prev]
          copy[this.indexEdit()!] = {
            product: form.value.inputProduct,
            price: form.value.inputPrice,
            category: form.value.selectCategory
          }
          return copy
        })

        this.indexEdit.set(null)
      } else {
        this.items.update((prev) => [
          ...prev, {
            product: form.value.inputProduct,
            price: form.value.inputPrice,
            category: form.value.selectCategory
          }
        ])
      }

      form.reset()
    }

  }

  removeItem(item: string) {
    this.items.update(prev => prev.filter(p => p.product !== item))
  }

  handleEdit(index: number, form: NgForm) {
    this.indexEdit.set(index)

    const item = this.items()[index]
    form.setValue({
      inputProduct: item.product,
      inputPrice: item.price,
      selectCategory: item.category
    })
  }


}
