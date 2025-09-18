import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CartService } from '../cart-service';
import { CartProps } from '../../types/pratices_types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cat-ecommerce',
  imports: [ReactiveFormsModule, RouterLink,],
  templateUrl: './cat-ecommerce.html',
  styleUrl: './cat-ecommerce.css'
})
export class CatEcommerce {

  private formBuilder = inject(FormBuilder)

  handleForm = signal<number | null>(null)

  cartService = inject(CartService)



  modalForm(item: number) {
    this.handleForm.update(prev => prev = item)
    console.log(this.handleForm())

  }

  formProduct = this.formBuilder.group({
    nameProduct: [''],
    priceProduct: [''],
  })

  totalCart = signal(0);

  constructor() {
    this.cartService.amountCart.subscribe(qtd => {
      this.totalCart.set(qtd);
    });
  }

  amountCart() {
    this.cartService.addProductCart(this.formProduct.value);
    this.formProduct.reset();
  }


  onSubmit() {
    this.cartService.addProduct(this.formProduct.value)

  }
}
