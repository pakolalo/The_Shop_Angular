import { Component, inject, input, output } from '@angular/core';
import { ProductModel } from './../../models/product.model'
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-product',
  imports: [ ],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  product = input.required<ProductModel>();
  cartService = inject(CartService);

  addToCart = output<ProductModel>();

  addToCartHandler() {
    this.addToCart.emit(this.product());
  }

  toggleFavorite() {
    this.cartService.toggleFavorite(this.product());
  };

  isFavorite() {
    return this.cartService.isFavorite(this.product());
  }
}
