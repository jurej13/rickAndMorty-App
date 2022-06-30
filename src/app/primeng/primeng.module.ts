import { NgModule } from '@angular/core';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {PaginatorModule} from 'primeng/paginator';
@NgModule({
  exports: [    
    ButtonModule,
    CardModule,
    InputTextModule,
    ProgressSpinnerModule,
    PaginatorModule
  ]
})
export class PrimengModule { }
