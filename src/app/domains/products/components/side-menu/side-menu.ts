import { Component, inject } from '@angular/core';
import { Header } from '../header/header';

@Component({
  selector: 'app-side-menu',
  imports: [],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.css',
})
export class SideMenu {
  private header = inject(Header);
  readonly isOpen = this.header.isSideMenuOpen;
  readonly favoriteCount = this.header.favoriteCount;

  close() {
    this.header.closeSideMenu();
  }

  openFavorites() {
    this.header.closeSideMenu();
    this.header.toggleFavorites();
  }
}
