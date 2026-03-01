import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {

  @Input() product!: Product;

  @Output() delete = new EventEmitter<number>();

  @Output() like = new EventEmitter<number>();

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

  onLike(): void {
    this.like.emit(this.product.id);
  }

  onDelete(): void {
    this.delete.emit(this.product.id);
  }

  openKaspi(): void {
    window.open(this.product.link, '_blank');
  }

  shareWhatsApp(): void {
    const url = encodeURIComponent(this.product.link);
    window.open(`https://wa.me/?text=Check out this product: ${url}`, '_blank');
  }
}
