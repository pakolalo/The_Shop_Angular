import { Component, inject, signal } from '@angular/core';
import { Product } from './../product/product'
import { ProductModel } from './../../models/product.model'
import { CartService } from '../../services/cart';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-products-list',
  imports: [Product],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList {

  private cartService = inject(CartService);
  private productService = inject(ProductService);

  products = signal<ProductModel[]>([]);
  favorite: boolean;

  constructor() {
    this.favorite = false
  }

  ngOnInit() {
    this.productService.getProducts()
    .subscribe({
      next: (products) => {
        this.products.set(products)
      },
      error: () => {}
    })
  }

  addToCart(product: ProductModel) {
    this.cartService.addProduct(product);
  }
}
