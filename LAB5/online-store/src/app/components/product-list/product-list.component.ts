import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent, NgFor, NgIf],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  @Input() products: Product[] = [];

  onLike(productId: number): void {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.likes++;
    }
  }

  onDelete(productId: number): void {
    this.products = this.products.filter(p => p.id !== productId);
  }
}
