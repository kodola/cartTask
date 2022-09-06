import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartComponent } from './components/header/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/main/banner/banner.component';
import { MainComponent } from './components/main/main.component';
import { ProductComponent } from './components/main/products/product/product.component';
import { ProductsComponent } from './components/main/products/products.component';
import { CartItemComponent } from './components/header/cart/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    BannerComponent,
    ProductsComponent,
    CartComponent,
    ProductComponent,
    CartItemComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
