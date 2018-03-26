import { Injectable } from '@angular/core';

@Injectable()
export class CalculationService {
  PAYPAL_PERCENT;
  constructor() {
    this.PAYPAL_PERCENT = 3;
  }

  get_first_class_shipping_cost(weight: Number) {
    switch (weight) {
      case 1: case 2: case 3: case 4: return 2.66;
      case 5:     return 2.79;
      case 6:     return 2.92;
      case 7:     return 3.05;
      case 8:     return 3.18;
      case 9:     return 3.34;
      case 10:    return 3.50;
      case 11:    return 3.66;
      case 12:    return 3.82;
      case 13:    return 4.10;
      case 14:    return 4.38;
      case 15:    return 4.66;
      case 16:    return 4.94;
      default:
        alert('ERROR: get_usps_first_class_cost function...invalid weight for switch/case');
        return -1;
    }
  }

  get_ebay_fee(sale_value, ebay_fee_percent) {
    return sale_value * ebay_fee_percent * 0.01;
  }

  get_paypal_fee(sale_value) {
    return 0.30 + sale_value * this.PAYPAL_PERCENT * 0.01;
  }

  get_final_profit(sale_value, cost_ebay_fee, cost_paypal_fee, cost_product, cost_misc, cost_shipping) {
    return sale_value - cost_ebay_fee - cost_paypal_fee - cost_product - cost_shipping - cost_misc;
  }

  get_sale_value(ebay_fee_percent, cost_product, cost_misc, cost_shipping, final_profit) {
    return (final_profit + cost_shipping + cost_product + cost_misc + 0.30)
      / (1 - 0.01 * (ebay_fee_percent + this.PAYPAL_PERCENT) );
  }
}
