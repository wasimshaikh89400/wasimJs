import { Component, NgModule } from '@angular/core';

// decorator, annotation,
@Component({
  // data -> metadata
  selector: 'app-start',
  template: ` <h1>
      <u>{{ title }}</u>
    </h1>
    <mark>hello</mark>`,
  styles: ['h1{color:red}'],
})
export class FirstComponent {
  // document.write(title)
  // {{title}}
  title = 'Angular Welcomes You...!';
}
