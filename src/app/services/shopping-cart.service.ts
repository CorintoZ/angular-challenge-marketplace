import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product, ProductInCart } from './../models/product';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  public numberItemsInCart: number = 0;
  numberItemsInCartChange: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public cart: ProductInCart[] = [];
  

  constructor(private apiService: ApiService) { 

  }

  addProductToCart(product: Product, image: any, quantity: number){
    
    let newProduct = new ProductInCart();
    newProduct.product = product;
    newProduct.image = image;
    newProduct.quantity = quantity;

    this.cart.push(newProduct);
    this.numberItemsInCartChange.next(this.cart.length);
    console.log(this.numberItemsInCart);
  }

  updateProduct(id: number, newQuantity: number){
    this.cart[id].quantity = newQuantity;
  }

  
  deleteProduct(index: number){
    this.cart.splice(index, 1);
    this.numberItemsInCartChange.next(this.cart.length);
  }

  finishCart(): boolean{
    let response = this.apiService.finishCart(this.cart);
    if(response){
      return true;
    }
    else{
      return false;
    }
  }

  resetCart(){
    this.cart.splice(0, this.cart.length);
    this.numberItemsInCartChange.next(this.cart.length)
  }
}
