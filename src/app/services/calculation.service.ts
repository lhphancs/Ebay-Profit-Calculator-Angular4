import { Injectable } from '@angular/core';

@Injectable()
export class CalculationService {
  PAYPAL_PERCENT;
  constructor() {
    this.PAYPAL_PERCENT = 3;
  }

  get_first_class_shipping_cost(weight: Number) {
    switch (weight) {
      case 1: case 2: case 3: case 4: return 2.61;
      case 5: case 6: case 7: case 8: return 2.77;
      case 9:     return 3.32;
      case 10:    return 3.46;
      case 11:    return 3.60;
      case 12:    return 3.74;
      case 13:    return 3.88;
      case 14:    return 4.02;
      case 15:    return 4.16;
      case 16:    return 4.30;
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

  get_final_profit(sale_value, cost_ebay_fee, cost_paypal_fee, cost_product, cost_shipping) {
    return sale_value - cost_ebay_fee - cost_paypal_fee - cost_product - cost_shipping;
  }

  get_sale_value(ebay_fee_percent, cost_product, cost_shipping, final_profit) {
    return (final_profit + cost_shipping + cost_product + 0.30)
      / (1 - 0.01 * (ebay_fee_percent + this.PAYPAL_PERCENT) );
  }
}
