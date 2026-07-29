import { Injectable, computed, signal } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartProducts = signal<ProductModel[]>([]);
  favoriteProducts = signal<ProductModel[]>([]);

  total = computed(() =>
    this.cartProducts().reduce((sum, product) => sum + product.price, 0)
  );

  favoriteCount = computed(() => this.favoriteProducts().length);

  addProduct(product: ProductModel) {
    this.cartProducts.update(prevState => [...prevState, product]);
  }

  toggleFavorite(product: ProductModel) {
    const currentFavorites = this.favoriteProducts();

    const exists = currentFavorites.some(
      favoriteProduct => favoriteProduct.id === product.id
    );

    if (exists) {
      this.favoriteProducts.set(
        currentFavorites.filter(favoriteProduct => favoriteProduct.id !== product.id)
      );
    } else {
      this.favoriteProducts.set([...currentFavorites, product]);
    }
  }

  removeFavorite(productId: number) {
    this.favoriteProducts.update(currentFavorites =>
      currentFavorites.filter(favoriteProduct => favoriteProduct.id !== productId)
    );
  }

  isFavorite(product: ProductModel) {
    return this.favoriteProducts().some(
      favoriteProduct => favoriteProduct.id === product.id
    );
  }
}
