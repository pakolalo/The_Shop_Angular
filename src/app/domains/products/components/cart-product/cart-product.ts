import { Component, inject, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ProductModel } from './../../models/product.model'
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-cart-product',
  imports: [CurrencyPipe],
  templateUrl: './cart-product.html',
  styleUrl: './cart-product.css',
})
export class CartProduct {
  product = input.required<ProductModel>();
  private cartService = inject(CartService);

  get quantity() {
    return this.product().quantity ?? 1;
  };

  get subTotal() {
    return this.product().price * this.quantity;
  }

  increaseQuantity() {
    this.cartService.increaseQuantity(this.product().id);
  }

  decreaseQuantity() {
    this.cartService.decreaseQuantity(this.product().id);
  }

  removeProduct() {
    this.cartService.removeProduct(this.product().id);
  }
}
