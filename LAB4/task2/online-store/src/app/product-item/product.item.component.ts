import { Component, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { NgFor, NgIf, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [NgFor, NgIf, DecimalPipe],
  template: `
    <div class="product-card">
      <a [href]="product.link" target="_blank">
        <img [src]="product.image" [alt]="product.name" />
        <h3>{{ product.name }}</h3>
      </a>
      <p>{{ product.description }}</p>
      <p>Цена: {{ product.price | number }} KZT</p>
      <p>
        Рейтинг:
        <span *ngFor="let star of starsArray; let i = index">
          <ng-container *ngIf="i < product.rating; else empty">&#9733;</ng-container>
          <ng-template #empty>&#9734;</ng-template>
        </span>
        ({{ product.rating }})
      </p>

      <div class="share-buttons">
        <a
          [href]="whatsappShareLink()"
          target="_blank"
          class="share-btn wa"
          >WhatsApp</a
        >
        <a
          [href]="telegramShareLink()"
          target="_blank"
          class="share-btn tg"
          >Telegram</a
        >
      </div>
    </div>
  `,
  styles: [`
    .product-card {
      border: 1px solid #ddd;
      padding: 10px;
      margin: 10px;
      width: 250px;
      flex: 1 1 250px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
      border-radius: 8px;
    }
    img {
      max-width: 100%;
      height: auto;
      border-radius: 4px;
    }
    span {
      color: gold;
      font-size: 1.1rem;
    }
    .share-buttons {
      margin-top: 10px;
      display: flex;
      gap: 10px;
    }
    .share-btn {
      padding: 5px 10px;
      text-decoration: none;
      border-radius: 5px;
      color: white;
      font-weight: 500;
      font-size: 0.9rem;
      text-align: center;
    }
    .wa { background-color: #25D366; }
    .tg { background-color: #0088cc; }
  `]
})
export class ProductItemComponent {
  @Input() product!: Product;

  starsArray = [1, 2, 3, 4, 5];

  whatsappShareLink(): string {
    const text = encodeURIComponent(`Check out this product: ${this.product.link}`);
    return `https://wa.me/?text=${text}`;
  }

  telegramShareLink(): string {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    return `https://t.me/share/url?url=${url}&text=${text}`;
  }
}
