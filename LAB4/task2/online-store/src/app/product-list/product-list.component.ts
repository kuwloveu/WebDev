import { Component } from '@angular/core';
import { ProductItemComponent } from '../product-item/product.item.component';
import { PRODUCTS } from '../models/product';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent, NgFor],
  template: `
    <h2>Products</h2>
    <div class="product-grid">
      <app-product-item
        *ngFor="let product of products"
        [product]="product">
      </app-product-item>
    </div>
  `,
  styles: [`
    .product-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
    }

    h2 {
      text-align: center;
      margin-bottom: 20px;
    }
  `]
})
export class ProductListComponent {
  products = PRODUCTS;
}
