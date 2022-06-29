import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleRoutingModule } from './module-routing.module';
import { MainComponent } from './pages/main/main.component';
import { DetailComponent } from './pages/detail/detail.component';
import { SearchComponent } from './components/search/search.component';
import { CardsComponent } from './components/cards/cards.component';
import { PrimengModule } from '../primeng/primeng.module';


@NgModule({
  declarations: [
    MainComponent,
    DetailComponent,
    SearchComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    ModuleRoutingModule,
    PrimengModule
  ]
})
export class ModuleModule { }
