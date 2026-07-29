import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CartProduct } from './../cart-product/cart-product'
import { Header } from '../header/header';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-cart',
  imports: [CartProduct, CurrencyPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  private header = inject(Header);

  private cartService = inject(CartService);
  cartProducts = this.cartService.cartProducts;
  subtotal = this.cartService.total;
  favorite: boolean = false;

  get isOpen() {
    return this.header.isCartOpen();
  }
}
