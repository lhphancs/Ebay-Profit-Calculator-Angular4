import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseUsersService {

  constructor() { }

  getProfile(){
    return {
      ebayPercentageFromSaleFee: 9.15,
      paypalPercentageFromSaleFee: 2.9,
      paypalFlatFee: 0.30
    }
  }
}
