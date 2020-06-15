import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from './../models/product';
import { ProductsService } from './../services/products.service';
import { ShoppingCartService } from './../services/shopping-cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public product: Product = null;
  public productImage;
  value: number = 0;
  
  constructor(private activatedRoute: ActivatedRoute,
              private productsService: ProductsService,
              private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = parseInt(params.get('id'), 10);
      this.product = this.productsService.getProduct(id);
      this.productImage = this.productsService.getImageProduct(id);
    })
  }

  @HostListener("input", ["$event"])
  public onInput(event: any): void {
      this.value = event.target.value;
  }
  
  addOneItem(){
    this.value = this.value + 1;
  }

  removeOneItem(){
    this.value = this.value - 1;
  }

  addToCart(){
    if(this.value != 0){
      this.shoppingCartService.addProductToCart(this.product, this.productImage, this.value);
    }
  }

}
