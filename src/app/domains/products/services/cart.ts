import { Injectable, provideStabilityDebugging, signal } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartProducts = signal<ProductModel[]>([]);

  addProduct(product: ProductModel) {
    this.cartProducts.update(prevState => [...prevState, product]);
  };
}
