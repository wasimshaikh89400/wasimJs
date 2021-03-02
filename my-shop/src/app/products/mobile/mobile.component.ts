import { Component, OnInit } from '@angular/core';

import { MOBPARTS } from './../../data/mock';
import { MobParts } from './../../model/mob-parts.model';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styles: [],
})
export class MobileComponent {
  mobParts: MobParts[] = [];
  name: string = '';

  ngOnInit(): void {
    this.name = 'Alex';

    this.mobParts = MOBPARTS; //100MB
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.name = '';

    this.mobParts = []; //100MB
  }

  calcProds() {
    let sum: number = 0;

    for (let mobPart of this.mobParts) {
      sum = sum + mobPart.inStock;
    }

    return sum;
  }
}
