import { Injectable } from '@angular/core';

@Injectable()
export class CalculationService {

  constructor() { }

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
    const PAYPAL_PERCENT = 3;
    return 0.30 + sale_value * PAYPAL_PERCENT * 0.01;
  }

  get_final_profit(sale_value, cost_ebay_fee, cost_paypal_fee, cost_product, cost_shipping) {
    return sale_value - cost_ebay_fee - cost_paypal_fee - cost_product - cost_shipping;
  }


}
