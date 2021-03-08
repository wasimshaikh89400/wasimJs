import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  calcProds(prods: any) {
    let sum = 0;
    for (let prod of prods) sum += prod.inStock;
    return sum;
  }
}
