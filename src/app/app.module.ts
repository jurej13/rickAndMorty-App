import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerComponent } from './module/components/spinner/spinner.component';
import { PrimengModule } from './primeng/primeng.module';
import { SpinnerInterceptor } from './module/interceptors/spinner.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    PrimengModule
  ],
  providers:[{provide:HTTP_INTERCEPTORS,useClass:SpinnerInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
