import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() cartItem?: any;
  @Output()
  item = new EventEmitter<any>();

  visible: boolean = false;

  remove(cardItem: any) {
    this.item.emit(cardItem);
  }
}
