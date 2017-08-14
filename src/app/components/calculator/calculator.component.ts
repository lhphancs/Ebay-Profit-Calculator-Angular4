import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  sale_value: number;
  ebay_fee_percent: number;
  paypal_fee_percent: number;

  oz_first_class_array: number[];
  first_class_weight: number;
  ship_option_array;
  cost_flat_rate_dict; // stores cost of flat rate, except for first class which will be -1

  cost_product: number;
  cost_shipping: number;

  show_first_class_shipping: boolean;
  show_box_info: boolean;
  constructor() {
    this.ebay_fee_percent = 9.15;
    this.paypal_fee_percent = 3;
    this.oz_first_class_array = Array(16); // [1,2, ... 15, 16]
    for (let i = 1; i <= 16; ++i) {
      this.oz_first_class_array[i - 1] = i;
    }
    this.ship_option_array = ['USPS First class', 'USPS Flat rate padded envelope'
      , 'USPS Flat rate small box', 'USPS Flat rate medium box', 'USPS Flat rate large box'];
    this.cost_flat_rate_dict = {'USPS Flat rate padded envelope': 6.30
      , 'USPS Flat rate small box': 6.25, 'USPS Flat rate medium box': 12.05, 'USPS Flat rate large box': 16.55};
    this.first_class_weight = 8;
    this.first_class_weight_response(this.first_class_weight);

    this.show_first_class_shipping = true;
    this.show_box_info = false;
  }

  ngOnInit() {
  }

  first_class_weight_response(weight) {
    this.first_class_weight = Number(weight); // Converts string to number

    switch (this.first_class_weight) {
      case 1: case 2: case 3: case 4: this.cost_shipping = 2.61; break;
      case 5: case 6: case 7: case 8: this.cost_shipping = 2.77; break;
      case 9:     this.cost_shipping = 3.32; break;
      case 10:    this.cost_shipping = 3.46; break;
      case 11:    this.cost_shipping = 3.60; break;
      case 12:    this.cost_shipping = 3.74; break;
      case 13:    this.cost_shipping = 3.88; break;
      case 14:    this.cost_shipping = 4.02; break;
      case 15:    this.cost_shipping = 4.16; break;
      case 16:    this.cost_shipping = 4.30; break;
      default:
        this.cost_shipping = -1;
        alert('ERROR: get_usps_first_class_cost function...invalid weight for switch/case');
    }
  }

  ship_change_response(ship_option) {
    if (ship_option === this.ship_option_array[0]) {
      this.show_first_class_shipping = true;
      this.first_class_weight_response(this.first_class_weight);
    } else {
      this.show_first_class_shipping = false;
      this.cost_shipping = this.cost_flat_rate_dict[ship_option];
    }
  }

  mult_by_response(number) {
    this.cost_product *= number;
  }

  get_ebay_fee() {
    return this.sale_value * this.ebay_fee_percent * 0.01;
  }

  get_paypal_fee() {
    const PAYPAL_PERCENT = 3;
    return 0.30 + this.sale_value * PAYPAL_PERCENT * 0.01;
  }

  get_final_profit() {
    return this.sale_value - this.get_ebay_fee()
      - this.get_paypal_fee() - this.cost_product
      - this.cost_shipping;
  }

  get_absolute(value) {
    return Math.abs(value);
  }

  toggle_show_box_info() {
    if (this.show_box_info) {
      this.show_box_info = false;
    } else {
      this.show_box_info = true;
    }
  }
}
