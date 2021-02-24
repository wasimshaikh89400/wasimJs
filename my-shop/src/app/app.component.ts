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
}
