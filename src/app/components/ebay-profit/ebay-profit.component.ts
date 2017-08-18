import { Component, OnInit } from '@angular/core';
import { CalculationService} from '../../services/calculation.service';

@Component({
  selector: 'app-ebay-profit',
  templateUrl: './ebay-profit.component.html',
  styleUrls: ['./ebay-profit.component.css'],
})
export class EbayProfitComponent implements OnInit {
  sale_value: number;
  ebay_fee_percent: number;
  paypal_fee_percent: number;

  oz_first_class_array: number[];
  first_class_weight: number;
  ship_option_array;
  cost_flat_rate_dict; // stores cost of flat rate, except for first class which will be -1

  cost_product: number;
  cost_shipping: number;
  cost_ebay_fee: number;
  cost_paypal_fee: number;
  final_profit: number;

  show_first_class_shipping: boolean;
  show_box_info: boolean;
  cost_data_service;
  is_profit_mode: boolean;
  constructor(private service: CalculationService) {
    this.cost_data_service = service;
    this.ebay_fee_percent = 9.15;
    this.paypal_fee_percent = 3;
    this.cost_ebay_fee = NaN;
    this.cost_paypal_fee = NaN;
    this.sale_value = NaN;
    this.cost_product = NaN;
    this.oz_first_class_array = Array(16); // [1,2, ... 15, 16]
    for (let i = 1; i <= 16; ++i) {
      this.oz_first_class_array[i - 1] = i;
    }
    this.ship_option_array = ['USPS First class', 'USPS Flat rate padded envelope'
      , 'USPS Flat rate small box', 'USPS Flat rate medium box', 'USPS Flat rate large box'];
    this.cost_flat_rate_dict = {'USPS Flat rate padded envelope': 6.30
      , 'USPS Flat rate small box': 6.25, 'USPS Flat rate medium box': 12.05, 'USPS Flat rate large box': 16.55};
    this.first_class_weight = 8;
    this.response_first_class_weight(this.first_class_weight);

    this.show_first_class_shipping = true;
    this.show_box_info = false;
    this.is_profit_mode = true;
  }

  ngOnInit() {
  }

  response_first_class_weight(weight) {
    this.first_class_weight = Number(weight); // Converts string to number
    this.cost_shipping = this.cost_data_service.get_first_class_shipping_cost(this.first_class_weight);
  }

  response_ship_change(ship_option) {
    if (ship_option === this.ship_option_array[0]) {
      this.show_first_class_shipping = true;
      this.response_first_class_weight(this.first_class_weight);
    } else {
      this.show_first_class_shipping = false;
      this.cost_shipping = this.cost_flat_rate_dict[ship_option];
    }
  }

  response_mult_by(number) {
    this.cost_product *= number;
  }

  get_absolute(value) {
    return Math.abs(value);
  }
  response_update_calculations() {
    // Order of execution matters depending on is_profit_mode
    if (this.is_profit_mode) {
      this.cost_ebay_fee = this.cost_data_service.get_ebay_fee(this.sale_value, this.ebay_fee_percent);
      this.cost_paypal_fee = this.cost_data_service.get_paypal_fee(this.sale_value);
      this.final_profit = this.cost_data_service.get_final_profit(this.sale_value
        , this.cost_ebay_fee, this.cost_paypal_fee, this.cost_product, this.cost_shipping);
    } else {
      this.sale_value = this.cost_data_service.get_sale_value(this.ebay_fee_percent
        , this.cost_product, this.cost_shipping, this.final_profit);
      this.cost_ebay_fee = this.cost_data_service.get_ebay_fee(this.sale_value, this.ebay_fee_percent);
      this.cost_paypal_fee = this.cost_data_service.get_paypal_fee(this.sale_value);
    }
  }
  toggle_mode() {
    this.is_profit_mode = !this.is_profit_mode;
    this.final_profit = 1.00;
    this.response_update_calculations(); // Needed to properly calculate needed sale value at start
  }
}
