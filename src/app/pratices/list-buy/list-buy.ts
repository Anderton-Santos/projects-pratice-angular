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

  list = signal<{ name: string, price: number, category: string }[]>([])
  isEditing = signal<number | null>(null)

  optionCategory: string[] = [
    "Higiene", "Limpeza", "Alimentos", "Outros",]


  onSubmit(form: NgForm) {
    if (this.isEditing() !== null) {
      this.list.update(item => {
        const copy = [...item]
        copy[this.isEditing()!] = {
          name: form.value.name,
          price: form.value.price,
          category: form.value.category,
        }
        return copy;
      })

      this.isEditing.set(null)
    } else {
      this.list.update(prev => [...prev, { ...form.value }])
    }

    form.reset()
  }

  handleDelete(item: number) {
    this.list().splice(item, 1)

  }

  handleEdit(item: number, form: NgForm) {
    this.isEditing.set(item)
    const edit = this.list()[item]
    form.setValue({
      name: edit.name,
      price: edit.price,
      category: edit.category,
    })

  }

}
