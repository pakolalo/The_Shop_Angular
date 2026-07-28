import { Component, signal } from '@angular/core';
import { SideMenu } from '../side-menu/side-menu';

@Component({
  selector: 'app-header',
  imports: [SideMenu],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isSideMenuOpen = signal(false);

  toggleSideMenu() {
    this.isSideMenuOpen.update((value) => !value);
  }

  closeSideMenu() {
    this.isSideMenuOpen.set(false);
  }
}
