import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { EbayProfitComponent } from './components/ebay-profit/ebay-profit.component';
import { BoxWeightPopoverComponent } from './components/box-weight-popover/box-weight-popover.component';
import { NavTabsComponent } from './components/nav-tabs/nav-tabs.component';

import { CalculationService } from './services/calculation.service';

@NgModule({
  declarations: [
    AppComponent,
    BoxWeightPopoverComponent,
    NavTabsComponent,
    EbayProfitComponent
  ],
  imports: [
    BrowserModule, FormsModule, NgbModule.forRoot()
  ],
  providers: [CalculationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
