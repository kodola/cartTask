export class Product {
    id: number;
    name: string;
    price: number;
    discount: number;
    isOwned: boolean;
    imageUrl: string;

    constructor(id: number, name: string, price = 0, discount: number, isOwned: boolean, imageUrl: string) {
        this.id = id, 
        this.name = name, 
        this.price = price, 
        this.discount = discount,
        this.isOwned = isOwned, 
        this.imageUrl = imageUrl
    }
}
