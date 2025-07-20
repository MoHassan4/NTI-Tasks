// core/services/cart.service.ts
import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cart: Product[] = [];

  getCart() {
    return this.cart;
  }

  addToCart(product: Product) {
    const existing = this.cart.find(p => p.id === product.id);
    if (existing) {
      existing.quantity! += product.quantity!;
    } else {
      this.cart.push({ ...product });
    }
  }

  updateQuantity(id: string, quantity: number) {
    const item = this.cart.find(p => p.id === id);
    if (item) item.quantity = quantity;
  }

  removeFromCart(id: string) {
    this.cart = this.cart.filter(p => p.id !== id);
  }

  clearCart() {
    this.cart = [];
  }
}
