import { Component } from '@angular/core';
import { ShoppingCartService } from './services/shopping-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RebyChallange';

  private selectedPage: string = "ShopAll";
  public numberItemsInCart = 0;

  constructor(public shoppingCartService: ShoppingCartService){
    this.getNumberItemsCart();
  }

  
  isSelected(page: string){
    if(this.selectedPage == page){
      return true;
    }
    else{
      return false;
    }
  }

  changePage(newPage): void{
    if(newPage != this.selectedPage){
      this.selectedPage = newPage;
    }
  }
  
  getNumberItemsCart(): void{
    this.shoppingCartService.numberItemsInCartChange.subscribe((number) => {
      this.numberItemsInCart = number;
    });
  }

  
}
