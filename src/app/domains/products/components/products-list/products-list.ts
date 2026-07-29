import { Component, inject, signal } from '@angular/core';
import { Product } from './../product/product'
import { ProductModel } from './../../models/product.model'
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-products-list',
  imports: [Product],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList {

  private cartService = inject(CartService);

  products = signal<ProductModel[]>([]);
  favorite: boolean;

  constructor() {

    this.favorite = false

    const initProducts: ProductModel[] = [
      {
        title: 'Product 1',
        price: 19.50,
        image: 'https://picsum.photos/270/340?r=22',
        favorite: this.favorite,
        creationAt: new Date().toISOString(),
      },
      {
        title: 'Product 2',
        price: 19.50,
        image: 'https://picsum.photos/270/340?r=23',
        favorite: this.favorite,
        creationAt: new Date().toISOString(),
      },
      {
        title: 'Product 3',
        price: 19.50,
        image: 'https://picsum.photos/270/340?r=24',
        favorite: this.favorite,
        creationAt: new Date().toISOString(),
      },
      {
        title: 'Product 4',
        price: 19.50,
        image: 'https://picsum.photos/270/340?r=25',
        favorite: this.favorite,
        creationAt: new Date().toISOString(),
      },
      {
        title: 'Product 5',
        price: 19.50,
        image: 'https://picsum.photos/270/340?r=26',
        favorite: this.favorite,
        creationAt: new Date().toISOString(),
      },
    ].map((product, index) => ({
      ...product,
      id: Date.now() + index,
    }));

    this.products.set(initProducts);
  }

  addToCart(product: ProductModel) {
    this.cartService.addProduct(product);
  }
}
