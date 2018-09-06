import { Injectable } from '@angular/core';
import { getDefaultShipMethods } from './default-shippings.js'
@Injectable({
  providedIn: 'root'
})
export class DatabaseShippingsService {

  constructor() { }

  getShipMethods(){
    return getDefaultShipMethods();
  }
}
