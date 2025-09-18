import { Injectable, signal } from '@angular/core';
import { CartProps } from '../types/pratices_types';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  product = signal<CartProps[]>([])
  productCart = signal<CartProps[]>([])
  amountCart = new Subject<number>()




  addProduct(item: any) {
    this.product.update(prev => [...prev, {
      ...item
    }])
  }

  updateAmount() {
    const total = this.product.length
    this.amountCart.next(total)
  }


  addProductCart(item: any) {
    if (!item.nameProduct || item.priceProduct === undefined) return;

    const exist = this.productCart().some(
      cartItem => cartItem.nameProduct === item.nameProduct && cartItem.priceProduct === item.priceProduct
    );

    if (exist) return;
    this.productCart.update(prev => [...prev, {
      ...item,
      amount: 1
    }])
    this.amountCart.next(this.productCart().length);
    console.log(this.productCart())
  }


  increaseAmount(item: CartProps) {
    this.productCart.update(prev =>
      prev.map(prev =>
        prev.nameProduct === item.nameProduct
          ? { ...prev, amount: (prev.amount ?? 1) + 1 }
          : prev
      )
    );
  }

  decreaseAmount(item: CartProps) {
    this.productCart.update(prev =>
      prev
        .map(prev =>
          prev.nameProduct === item.nameProduct
            ? { ...prev, amount: (prev.amount ?? 1) - 1 }
            : prev
        )
        .filter(p => (p.amount ?? 0) > 0)
    );
  }



}
