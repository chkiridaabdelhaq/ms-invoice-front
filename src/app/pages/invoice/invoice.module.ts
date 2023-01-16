import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceComponent } from './invoice.component';
import { ListComponent } from './list/list.component';
import { NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [
    InvoiceComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    NbCardModule
  ]
})
export class InvoiceModule { }
