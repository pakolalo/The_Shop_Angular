import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart';
import { Header } from '../header/header';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-favorites-panel',
  imports: [CurrencyPipe],
  templateUrl: './favorites-panel.html',
  styleUrl: './favorites-panel.css',
})
export class FavoritesPanel {
  private header = inject(Header);
  private cartService = inject(CartService);
  favorites = this.cartService.favoriteProducts;
  favoriteCount = this.cartService.favoriteCount;

  get isOpen() {
    return this.header.isFavoritesOpen();
  }

  close() {
    this.header.closeFavorites();
  }

  addToCart(product: ProductModel) {
    this.cartService.addProduct(product)
  };

  removeFavorite(productId: number) {
    this.cartService.removeFavorite(productId);
  }
}
