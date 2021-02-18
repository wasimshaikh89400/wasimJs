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
    },
    {
      id: 1002,
      name: 'Mobile Screen',
    },
    {
      id: 1003,
      name: 'Headphone',
    },
  ];
}
