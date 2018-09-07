import { Component, OnInit } from '@angular/core';
import { DatabaseUsersService } from '../../services/database-users.service';
import { DatabaseShippingsService } from '../../services/database-shippings.service';
import { getProcessedShipMethods } from '../getProcessedShipMethods';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  multiplierArray = [2,3,5];

  objectKeys = Object.keys;
  mode = "calcProfit";

  saleValue:number;
  productCost:number;
  miscCost:number;
  shippingCost:number;
  ebayPercentageFromSaleFee:number;
  paypalPercentageFromSaleFee:number;
  paypalFlatFee:number;
  totalEbayFee:number;
  totalPaypalFee:number;

  totalProfit:number;

  shipCompanies:object;

  selectedCompanyIndex;
  selectedMethodIndex;
  selectedOzPriceIndex;

  constructor(private databaseUsersService:DatabaseUsersService
    , private databaseShippingsService:DatabaseShippingsService) {
      this.miscCost = 0;
  }

  loadAvailableShippings(){
    let shipMethods = this.databaseShippingsService.getShipMethods();
    this.shipCompanies = getProcessedShipMethods(shipMethods);
    this.companySelect(0);
  }

  ngOnInit() {
    let data = this.databaseUsersService.getProfile();
    
    this.ebayPercentageFromSaleFee = data['ebayPercentageFromSaleFee'];
    this.paypalPercentageFromSaleFee = data['paypalPercentageFromSaleFee'];
    this.paypalFlatFee = data['paypalFlatFee'];
    this.loadAvailableShippings();
  }
  
  updateFees(){
    this.totalEbayFee= Math.round((this.ebayPercentageFromSaleFee*0.01
        * this.saleValue)*100)/100;
    this.totalPaypalFee = Math.round((this.paypalFlatFee
        + this.paypalPercentageFromSaleFee*0.01
        * this.saleValue)*100)/100;
  }

  updateTotalOrSaleValue(){
    if(this.mode=="calcProfit")
      this.totalProfit = Math.round((this.saleValue - this.productCost - this.miscCost
        - this.shippingCost - this.totalEbayFee - this.totalPaypalFee)*100)/100;
    else{
      this.saleValue = Math.round((this.totalProfit+this.paypalFlatFee
        + this.productCost + this.miscCost + this.shippingCost)
        / (1-this.paypalPercentageFromSaleFee*0.01 - this.ebayPercentageFromSaleFee*0.01)*100)/100;
      this.updateFees();
    }
  }

  weightSelect(ozPriceIndex){
    this.selectedOzPriceIndex = ozPriceIndex;
    this.shippingCost = this.shipCompanies[this.selectedCompanyIndex]['shipMethods']
      [this.selectedMethodIndex]['ozPrice'][this.selectedOzPriceIndex]['price'];
    this.updateTotalOrSaleValue();
  }

  methodSelect(methodIndex){
    this.selectedMethodIndex = methodIndex;
    this.weightSelect(0);
  }

  companySelect(companyIndex){
    this.selectedCompanyIndex = companyIndex;
    this.methodSelect(0);
  }

  multiplyProductCost(multiplier){
    this.productCost = Math.round(this.productCost*multiplier*100)/100;
    this.updateTotalOrSaleValue();
  }

  onCalcNeededSaleClick(){
    this.totalProfit = 1;
    this.updateTotalOrSaleValue();
  }
}
