import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { EbayProfitComponent } from './components/ebay-profit/ebay-profit.component';
import { BoxWeightPopoverComponent } from './components/box-weight-popover/box-weight-popover.component';
import { NavTabsComponent } from './components/nav-tabs/nav-tabs.component';

import { CalculationService } from './services/calculation.service';
import { AmazonProfitComponent } from './components/amazon-profit/amazon-profit.component';
import { ShopifyProfitComponent } from './components/shopify-profit/shopify-profit.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxWeightPopoverComponent,
    NavTabsComponent,
    EbayProfitComponent,
    AmazonProfitComponent,
    ShopifyProfitComponent
  ],
  imports: [
    BrowserModule, FormsModule, NgbModule.forRoot(), RouterModule.forRoot([
      {
        path: 'ebay-profit',
        component: EbayProfitComponent
      },
      {
        path: 'amazon-profit',
        component: AmazonProfitComponent
      },
      {
        path: 'shopify-profit',
        component: ShopifyProfitComponent
      },
    ])
  ],
  providers: [CalculationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
