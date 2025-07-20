// products.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/shared/models/product.model';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  addToCart(product: Product) {
    if (!product.quantity || product.quantity < 1) {
      alert('Please enter a valid quantity.');
      return;
    }
    this.cartService.addToCart(product);
    alert('Added to cart!');
  }
}
