import { Component, OnInit } from '@angular/core';

import { MobParts } from './../../model/mob-parts.model';
import { MOBPARTS } from './../../data/mock';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  name: string = 'Alex';

  mobParts: MobParts[] = MOBPARTS;

  calcProds() {
    let sum: number = 0;

    for (let mobPart of this.mobParts) {
      sum = sum + mobPart.inStock;
    }

    return sum;
  }
}
