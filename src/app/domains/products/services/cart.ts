import { Injectable, computed, signal } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartProducts = signal<ProductModel[]>([]);
  total = computed(() =>
    this.cartProducts().reduce((sum, product) => sum + product.price, 0)
  );

  addProduct(product: ProductModel) {
    this.cartProducts.update(prevState => [...prevState, product]);
  }
}
