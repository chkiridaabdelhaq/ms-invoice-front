import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { ListcustomersComponent } from './listcustomers/listcustomers.component';


@NgModule({
  declarations: [
    CustomersComponent,
    ListcustomersComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
