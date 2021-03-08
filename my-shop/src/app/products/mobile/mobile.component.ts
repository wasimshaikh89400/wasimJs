import { Component, OnInit } from '@angular/core';
import { SharedService } from './../../services/shared.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css'],
})
export class MobileComponent implements OnInit {
  tot = 0;
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.tot = this.sharedService.calcProds(this.mobProds);
    console.log('tot', this.tot);
  }

  mobProds = [
    {
      id: 1001,
      name: 'Mobile Screen',
      inStock: 2340,
      prodColor: 'red',
      isOnline: false,
      backColor: false,
      country: '',
      price: 1200,
      imgPath: '../../../assets/img/1.jpeg',
      qntt: 0,
    },
    {
      id: 1002,
      name: 'headphones',
      inStock: 560,
      prodColor: 'green',
      isOnline: false,
      backColor: false,
      country: 'India',
      price: 1200,
      imgPath: '../../../assets/img/2.jpeg',
      qntt: 0,
    },
    {
      id: 1003,
      name: 'CHARGER',
      inStock: 10,
      prodColor: 'blue',
      isOnline: false,
      backColor: false,
      country: 'India',
      price: 1200,
      imgPath: '../../../assets/img/3.jpeg',
      qntt: 0,
    },
  ];
}
