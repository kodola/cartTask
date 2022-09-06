import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    products: Product[] = [
        new Product(1, 'oddworld: stranger\'s wrath', 9.99, 50, false, 'assets/images/games/oddworld.jpg'),
        new Product(2, 'chaos on deponia', 9.99, 0, true, 'assets/images/games/deponia.jpg'),
        new Product(3, 'The settlers 2: gold edition', 5.99, 0, false, 'assets/images/games/settlers.jpg'),
        new Product(4, 'neverwinter nights', 9.99, 50, false, 'assets/images/games/neverwinter.jpg'),
        new Product(5, 'assassin\'s creed: director\'s cut', 9.99, 0, false, 'assets/images/games/assassin.jpg'),
    ]

    constructor() { }

    getProducts(): Product[] {
        return this.products;
    }
}
