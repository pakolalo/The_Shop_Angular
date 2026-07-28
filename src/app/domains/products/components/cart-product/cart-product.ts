import { Component, input } from '@angular/core';
import { ProductModel } from './../../models/product.model'

@Component({
  selector: 'app-cart-product',
  imports: [],
  templateUrl: './cart-product.html',
  styleUrl: './cart-product.css',
})
export class CartProduct {
  product = input.required<ProductModel>();
}
