import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart';
import { Header } from '../header/header';

@Component({
  selector: 'app-favorites-panel',
  imports: [CurrencyPipe],
  templateUrl: './favorites-panel.html',
  styleUrl: './favorites-panel.css',
})
export class FavoritesPanel {
  private header = inject(Header);
  cartService = inject(CartService);

  get isOpen() {
    return this.header.isFavoritesOpen();
  }

  close() {
    this.header.closeFavorites();
  }
}
