export class Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    description: string;
    on_sale: boolean;
    on_sale_price: number

    constructor(attributes: Product) {
        Object.assign(this, attributes);
    }
}

export class ProductInCart {
    product: Product;
    quantity: number;
    image: any;
}
