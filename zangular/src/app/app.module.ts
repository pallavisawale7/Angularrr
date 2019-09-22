import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { IPOsComponent } from './ipos/ipos.component';
import { SectorComponent } from './sector/sector.component';
import { StockExchangeComponent } from './stock-exchange/stock-exchange.component';
import { StockPriceComponent } from './stock-price/stock-price.component';
import { CompanyComponent } from './company/company.component';
import { AgGridModule } from 'ag-grid-angular';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    IPOsComponent,
    SectorComponent,
    StockExchangeComponent,
    StockPriceComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,HttpClientModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
