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
      name: 'Charger',
      inStock: 10,
    },
    {
      id: 1002,
      name: 'Mobile Screen',
      inStock: 0,
    },
    {
      id: 1003,
      name: 'Headphone',
      inStock: 0,
    },
  ];
}
