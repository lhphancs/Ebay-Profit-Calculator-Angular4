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

  show_first_class_shipping: boolean;
  show_box_info: boolean;
  costDataService;
  constructor(private service: CalculationService) {
    this.costDataService = service;
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
    this.cost_shipping = this.costDataService.get_first_class_shipping_cost(this.first_class_weight);
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

  get_absolute(value) {
    return Math.abs(value);
  }
}