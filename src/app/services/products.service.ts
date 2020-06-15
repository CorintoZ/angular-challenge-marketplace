import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]> ([]);
  public images = [];
  
  constructor(private apiService: ApiService) { }

  getProducts(): void{
    this.apiService.getProducts().subscribe((prods: any) => {
      this.products.next(prods.products);
      prods.products.forEach(element => {
        this.getImage(element.id);
      })
    });
  }

  private createImageFromBlob(image: Blob, id: number) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.images[id] = reader.result;
    }, false);
    if(image){
      reader.readAsDataURL(image);
    }
  }

  private getImage(id: number){
    this.apiService.getImage(id).subscribe(data => {
      this.createImageFromBlob(data, id);
    })
  }

  getProduct(id: number): Product{
    let product = null;
    this.products.value.forEach(prod =>{
      if(prod.id == id){
        product = prod;
      }
    });
    return product;
  }

  getImageProduct(id: number){
    return this.images[id];
  }
}
