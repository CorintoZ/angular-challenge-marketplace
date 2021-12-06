import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../../models/product';
import { ProductsService } from './../../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductsComponent implements OnInit {
  public products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(
    []
  );
  public images = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts();
    this.products = this.productsService.products;
    this.images = this.productsService.images;
  }
}
