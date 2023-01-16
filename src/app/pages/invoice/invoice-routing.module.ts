import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from './invoice.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [{
  path: '',
  component: InvoiceComponent,
  children: [
    {
      path: 'list',
      component: ListComponent,
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
