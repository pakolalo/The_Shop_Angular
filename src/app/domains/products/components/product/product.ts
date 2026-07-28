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

  addToCart = output<string>();

  addToCartHandler() {
    console.log('click from child')
    this.addToCart.emit('hola este es un mensaje desde el hijo');
  }
}
