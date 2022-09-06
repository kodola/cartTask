import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartVisibilityService } from 'src/app/services/cart-visibility.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() productItem?: Product;
  isAdded: boolean = false;

  product: Product | any;
  cartProducts: any = [];

  constructor(
    private cartService: CartService,
    private cartVisibilityService: CartVisibilityService
  ) {}

  ngOnInit(): void {}

  addToCart() {
    this.cartService.sendMsg(this.productItem);
    this.cartVisibilityService.sendVariable(true);
    this.isAdded = true;
  }
}
