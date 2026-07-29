import { Component, input, output } from '@angular/core';
import { ProductModel } from './../../models/product.model'

@Component({
  selector: 'app-product',
  imports: [ ],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  product = input.required<ProductModel>();

  addToCart = output<ProductModel>();

  addToCartHandler() {
    this.addToCart.emit(this.product());
  }
}
