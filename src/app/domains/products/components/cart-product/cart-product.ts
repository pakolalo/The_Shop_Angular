import { Component, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ProductModel } from './../../models/product.model'

@Component({
  selector: 'app-cart-product',
  imports: [CurrencyPipe],
  templateUrl: './cart-product.html',
  styleUrl: './cart-product.css',
})
export class CartProduct {
  product = input.required<ProductModel>();
}
