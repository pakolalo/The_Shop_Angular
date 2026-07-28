import { Component, inject, signal } from '@angular/core';
import { CartProduct } from './../cart-product/cart-product'
import { ProductModel } from '../../models/product.model';
import { Header } from '../header/header';

@Component({
  selector: 'app-cart',
  imports: [CartProduct],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {

  private header = inject(Header)

  products = signal<ProductModel[]>([]);
  favorite: boolean = false;

  constructor() {
    const initProducts: ProductModel[] = [
      {
        id: Date.now(),
        title: 'Product 1',
        price: 19.50,
        image: 'https://picsum.photos/270/340?r=22',
        favorite: this.favorite,
        creationAt: new Date().toISOString(),
      },
    ];
    this.products.set(initProducts)
  }

  get isOpen() {
    return this.header.isCartOpen()
  }
}
