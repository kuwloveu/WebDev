import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  template: `
    <button class="btn" (click)="addItem()">Add Item</button>
  `,
  styles: [`
    .btn {
      padding: 5px;
    }
  `],
})
export class Child {
  @Output() addItemEvent = new EventEmitter<string>();

  addItem() {
    this.addItemEvent.emit('🐢');
  }
}
