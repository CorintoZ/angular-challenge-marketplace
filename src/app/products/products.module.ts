import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { OrderModule } from 'ngx-order-pipe';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppRoutingModule } from '../app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [ProductDetailComponent, ProductsComponent, ProductComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    OrderModule,
  ],
})
export class ProductsModule {}
