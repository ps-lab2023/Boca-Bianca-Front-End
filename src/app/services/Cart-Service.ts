import { Injectable } from '@angular/core';
import { Product } from '../model/Product';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  click:number|undefined;

  constructor() { }

  addToCart(product: Product) {
    this.items.push(product);
  }
  deleteItem(index: number): void {
    this.items.splice(index, 1);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
