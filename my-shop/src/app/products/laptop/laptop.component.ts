import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css'],
})
export class LaptopComponent {
  log(tempVar: any) {
    console.clear();
    console.log(tempVar);
    console.log(tempVar.value);
  }
}
