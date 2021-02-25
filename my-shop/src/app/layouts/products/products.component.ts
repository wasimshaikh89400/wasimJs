import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  mobParts = [
    {
      id: 1001,
      name: 'CHARGER',
      inStock: 10,
      price: 1200,
    },
    {
      id: 1002,
      name: 'mobile screen',
      inStock: 0,
      price: 1200,
    },
    {
      id: 1003,
      name: 'Headphone',
      inStock: 0,
      price: 1200,
    },
  ];
}
