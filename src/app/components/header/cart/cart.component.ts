import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  @Input()
  showCartContent: boolean | any;

  cartItems: any = [];

  cartTotal: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getMsg().subscribe((product: Product | any) => {
      this.addProductToCart(product);
    });
  }

  addProductToCart(product: Product) {
    this.cartItems.push({
      productName: product.name,
      price: product.price,
      productImage: product.imageUrl,
      productId: product.id,
    });
    this.cartTotal += product.price;
  }

  clearCart() {
    this.cartItems = [];
    this.cartTotal = 0;
  }

  removeCurrentProduct(element: any) {
    this.cartItems = this.cartItems.filter((item: any) => {
      return item != element;
    });
    this.cartTotal -= element.price;
  }
}
