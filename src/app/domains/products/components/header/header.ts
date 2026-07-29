import { Component, inject, signal } from '@angular/core';
import { SideMenu } from '../side-menu/side-menu';
import { Cart } from './../cart/cart';
import { FavoritesPanel } from '../favorites-panel/favorites-panel';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-header',
  imports: [SideMenu, Cart, FavoritesPanel],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isSideMenuOpen = signal(false);
  isCartOpen = signal(false);
  isFavoritesOpen = signal(false);
  Number = Number;

  private cartService = inject(CartService);

  toggleSideMenu() {
    this.isSideMenuOpen.update((value) => {
      const newVal = !value;
      if (newVal) this.isCartOpen.set(false);
      return newVal;
    });
  }

  toggleCart() {
    this.isCartOpen.update((value) => {
      const newVal = !value;
      if (newVal) {
        this.isSideMenuOpen.set(false);
        this.isFavoritesOpen.set(false);
      }
      return newVal;
    });
  }

  toggleFavorites() {
    this.isFavoritesOpen.update((value) => {
      const newVal = !value;
      if (newVal) {
        this.isSideMenuOpen.set(false);
        this.isCartOpen.set(false);
      }
      return newVal;
    });
  }

  closeSideMenu() {
    this.isSideMenuOpen.set(false);
  }

  closeCart() {
    this.isCartOpen.set(false);
  }

  closeFavorites() {
    this.isFavoritesOpen.set(false);
  }
}
