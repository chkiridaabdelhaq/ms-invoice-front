import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { ListcustomersComponent } from './listcustomers/listcustomers.component';

const routes: Routes = [{
  path: '',
  component: CustomersComponent,
  children: [
    {
      path: 'list',
      component: ListcustomersComponent,
    },
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
