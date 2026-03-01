import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() product!: Product;

  currentImageIndex = 0;


  get allImages(): string[] {
    if (!this.product.images || this.product.images.length === 0) {
      return [this.product.image];
    }
    return [this.product.image, ...this.product.images];
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.allImages.length;
  }

  prevImage(): void {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.allImages.length) % this.allImages.length;
  }

  openKaspi(): void {
    window.open(this.product.link, '_blank');
  }

  shareWhatsApp(): void {
    const url = encodeURIComponent(this.product.link);
    window.open(`https://wa.me/?text=Check out this product: ${url}`, '_blank');
  }
}







