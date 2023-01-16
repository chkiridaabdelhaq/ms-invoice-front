import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
     path: 'invoice',
     loadChildren: () => import('./invoice/invoice.module')
      .then(m => m.InvoiceModule),
    },
    {
      path: 'customers',
      loadChildren: () => import('./customers/customers.module')
       .then(m => m.CustomersModule),
     },
     {
      path: 'products',
      loadChildren: () => import('./products/products.module')
       .then(m => m.ProductsModule),
     },
     {
      path: 'tools',
      loadChildren: () => import('./tools/tools.module')
       .then(m => m.ToolsModule),
     },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
