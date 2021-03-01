import { Component, OnInit } from '@angular/core';

import { MOBPARTS } from './../../data/mock';
import { MobParts } from './../../model/mob-parts.model';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styles: [],
})
export class MobileComponent implements OnInit {
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
