import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Information } from '../models/aboutUs';
import { Product } from './../models/product';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  getProducts(): Observable<Product[]>{
      return this.http.get<Product[]>(`${environment.apiUrl}/api/getProducts`);
      
  }

  getImage(id: number): Observable<Blob> {
    return this.http.get(`${environment.apiUrl}/api/getProductImage/${id}`, {responseType: "blob"});
  }

  getAboutUs(): Observable<Information> {
    return this.http.get(`${environment.apiUrl}/api/aboutUs`).pipe(
      map((AboutUsInfo:Information) => {
        return new Information(AboutUsInfo);
      })
    )
  }

  finishCart(cart) {
    return this.http.post(`${environment.apiUrl}/api/finishCart`, cart);
  }

}
