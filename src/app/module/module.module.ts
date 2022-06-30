import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleRoutingModule } from './module-routing.module';
import { MainComponent } from './pages/main/main.component';
import { SearchComponent } from './components/search/search.component';
import { CardsComponent } from './components/cards/cards.component';
import { PrimengModule } from '../primeng/primeng.module';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from './interceptors/spinner.interceptor';



@NgModule({
  declarations: [
    MainComponent,
    SearchComponent,
    CardsComponent,
    PaginatorComponent,
  ],
  imports: [
    CommonModule,
    ModuleRoutingModule,
    PrimengModule
  ],
  providers:[{provide:HTTP_INTERCEPTORS,useClass:SpinnerInterceptor,multi:true}],

  
  
})
export class ModuleModule { }
