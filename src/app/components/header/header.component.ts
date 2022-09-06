import { Component, OnInit } from '@angular/core';
import { CartVisibilityService } from 'src/app/services/cart-visibility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showCart: boolean = false;
  constructor(private cartVisibilityService: CartVisibilityService) {}

  ngOnInit(): void {
    this.cartVisibilityService.getVariable().subscribe((bool: boolean | any) => {
      this.showCart = bool;
    });
  }

  openCart() {
    this.showCart = !this.showCart;
  }

  cartItems(items: number) {
    console.log(items);
  }
}
