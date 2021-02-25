import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  name: string = 'Alex';

  mobParts: MobParts[] = [
    {
      id: 1001,
      name: 'CHARGER',
      inStock: 10,
      price: 1200,
    },
    {
      id: 1002,
      name: 'mobile screen',
      inStock: 20,
      price: 1200,
    },
    {
      id: 1003,
      name: 'Headphone',
      inStock: 33,
      price: 1200,
    },
  ];

  calcProds() {
    let sum: number = 0;

    for (let mobPart of this.mobParts) {
      sum = sum + mobPart.inStock;
    }

    return sum;
  }
}

interface MobParts {
  id: number;
  name: string;
  inStock: number;
  price: number;
}
