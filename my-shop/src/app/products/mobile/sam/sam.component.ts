import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  templateUrl: './sam.component.html',
})
export class SamComponent {
  formObj = new FormGroup({
    uNameObj: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    passObj: new FormControl('', Validators.required),
  });

  get uName() {
    return this.formObj.get('uNameObj');
  }
}
