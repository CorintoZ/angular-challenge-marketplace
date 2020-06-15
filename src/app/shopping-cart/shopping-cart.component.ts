import { Component, HostListener, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductInCart } from './../models/product';
import { ShoppingCartService } from './../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
  
})

export class ShoppingCartComponent implements OnInit {

  public items: ProductInCart[] = [];
  constructor(private shoppingCartService: ShoppingCartService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.items = this.shoppingCartService.cart;
  }

  deleteProduct(index: number){
    this.shoppingCartService.deleteProduct(index);
  }

  @HostListener("input", ["$event"])
  public onInput(event: any): void {
    let id = event.target.id;
    let newQuantity = event.target.value;
    this.shoppingCartService.updateProduct(id, newQuantity);
  }

  finishCart(){
    if(this.items.length != 0){
      if(this.shoppingCartService.finishCart()){
        let okMessage = "Thank you for shopping with us. Come back any time!";
        let action = "Close";
        this.openSnackBar(okMessage, action);
        this.shoppingCartService.resetCart();
      }
      else{
        let failureMessage = "There has been a problem with your purchase. Please try again.";
        let action = "Close";
        this.openSnackBar(failureMessage, action);
      }
    } 
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
      panelClass: ['mat-toolbar', 'mat-primary', 'button-class']
    });
  }

}




