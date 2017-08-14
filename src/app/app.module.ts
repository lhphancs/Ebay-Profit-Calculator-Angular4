import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { CalculatorComponent } from './components/calculator/calculator.component';
import { BoxWeightPopoverComponent } from './components/box-weight-popover/box-weight-popover.component';
import { NavTabsComponent } from './components/nav-tabs/nav-tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    BoxWeightPopoverComponent,
    NavTabsComponent
  ],
  imports: [
    BrowserModule, FormsModule, NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
