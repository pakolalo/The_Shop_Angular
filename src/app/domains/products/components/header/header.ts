import { Component, signal } from '@angular/core';
import { SideMenu } from '../side-menu/side-menu';
import { Cart } from './../cart/cart'

@Component({
  selector: 'app-header',
  imports: [SideMenu, Cart],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isSideMenuOpen = signal(false);
  isCartOpen =signal(false)

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
      if (newVal) this.isSideMenuOpen.set(false);
      return newVal;
    });
  };

  closeSideMenu() {
    this.isSideMenuOpen.set(false);
  }

  closeCart() {
    this.isCartOpen.set(false);
  }
}
