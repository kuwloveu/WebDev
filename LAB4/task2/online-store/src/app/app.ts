import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  template: `
    <div class="app-container">
      <h1>Kaspi.kz Khassanov</h1>
      <app-product-list></app-product-list>
    </div>
  `,
  styles: [`
    .app-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      font-family: Arial, sans-serif;
    }
    h1 {
      text-align: center;
      font-family: 'Josefin Sans', sans-serif;
      margin-bottom: 30px;
    }
  `]
})
export class App {}
