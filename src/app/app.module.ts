import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers/customers.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartComponent } from './charts/chart/chart.component';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    ChartComponent,
    SearchPipe
  ],
  imports: [
BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
