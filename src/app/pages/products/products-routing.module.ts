import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [{
  path: '',
  component: ProductsComponent,
  children: [
    {
      path: 'list',
      component: ListProductsComponent,
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
