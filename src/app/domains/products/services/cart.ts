import { Injectable, computed, signal } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartProducts = signal<ProductModel[]>([]);
  favoriteProducts = signal<ProductModel[]>([]);

  total = computed(() =>
    this.cartProducts().reduce((sum, product) => {
      const quantity = product.quantity ?? 1;
      return sum + product.price * quantity;
    }, 0)
  );

  favoriteCount = computed(() => this.favoriteProducts().length);

  addProduct(product: ProductModel) {
    const currentProducts = this.cartProducts();
    const productInCart = currentProducts.find(item => item.id === product.id);

    if (!productInCart) {
      this.addNewProduct(product, currentProducts);
      return;
    }

    this.updateProductQuantity(product.id, currentProducts, 1);
  }

  private addNewProduct(product: ProductModel, currentProducts: ProductModel[]) {
    this.cartProducts.set([...currentProducts, { ...product, quantity: 1 }]);
  }

  private updateProductQuantity(productId: number, currentProducts: ProductModel[], delta: number) {
    this.cartProducts.set(
      currentProducts
        .map(item =>
          item.id === productId
            ? { ...item, quantity: (item.quantity ?? 1) + delta }
            : item
        )
        .filter(item => (item.quantity ?? 1) > 0)
    );
  }

  increaseQuantity(productId: number) {
    this.cartProducts.update(products =>
      products.map(product =>
        product.id === productId
        ? {...product, quantity: (product.quantity ?? 1) + 1 }
        : product
      )
    );
  }

  decreaseQuantity(productId: number) {
    this.cartProducts.update(products =>
      products
        .map(product =>
          product.id === productId
            ? { ...product, quantity: (product.quantity ?? 1) - 1 }
            : product
        )
        .filter(product => (product.quantity ?? 1) > 0)
    );
  }

  removeProduct(productId: number) {
    this.cartProducts.update(products =>
      products.filter(product => product.id !== productId)
    );
  }

  toggleFavorite(product: ProductModel) {
    const currentFavorites = this.favoriteProducts();
    const exists = currentFavorites.some(favoriteProduct => favoriteProduct.id === product.id);

    if (exists) {
      this.removeFavoriteProduct(product.id, currentFavorites);
      return;
    }

    this.addFavoriteProduct(product, currentFavorites);
  }

  private addFavoriteProduct(product: ProductModel, currentFavorites: ProductModel[]) {
    this.favoriteProducts.set([...currentFavorites, product]);
  }

  private removeFavoriteProduct(productId: number, currentFavorites: ProductModel[]) {
    this.favoriteProducts.set(
      currentFavorites.filter(favoriteProduct => favoriteProduct.id !== productId)
    );
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
