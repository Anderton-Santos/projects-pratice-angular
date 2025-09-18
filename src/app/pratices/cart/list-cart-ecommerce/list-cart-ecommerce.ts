import { Component, inject, signal } from '@angular/core';
import { CartService } from '../cart-service';
import { CommonModule } from '@angular/common';
import { CartProps } from '../../types/pratices_types';

@Component({
  selector: 'app-list-cart-ecommerce',
  imports: [CommonModule],
  templateUrl: './list-cart-ecommerce.html',
  styleUrl: './list-cart-ecommerce.css'
})
export class ListCartEcommerce {

  listcart = inject(CartService)

  addAmont(item: CartProps) {
    this.listcart.increaseAmount(item)

  }

  remAmount(item: CartProps) {
    this.listcart.decreaseAmount(item)
  }





}
