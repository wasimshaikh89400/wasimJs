import { Component, NgModule } from '@angular/core';

// decorator, annotation,
@Component({
  // data -> metadata
  selector: 'app-start',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class FirstComponent {
  // document.write(title)
  // {{title}}
  title = 'Angular Welcomes You...!';

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
