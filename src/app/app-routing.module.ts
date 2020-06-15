import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  { path: 'ShopAll', component: ProductsComponent },
  { path: 'AboutUs', component: AboutUsComponent },
  { path: 'Product/:id', component: ProductDetailComponent},
  { path: '**', redirectTo: 'ShopAll' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
