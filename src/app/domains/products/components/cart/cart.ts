import { Component, inject, signal } from '@angular/core';
import { CartProduct } from './../cart-product/cart-product'
import { Header } from '../header/header';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-cart',
  imports: [CartProduct],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {

  private header = inject(Header)

  cartService = inject(CartService);
  favorite: boolean = false;

  get isOpen() {
    return this.header.isCartOpen()
  }
}
