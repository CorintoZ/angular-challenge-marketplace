export class Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    description: string;

    constructor(attributes: Product) {
        Object.assign(this, attributes);
    }
}

export class ProductInCart {
    product: Product;
    quantity: number;
    image: any;
}
