import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FirstComponent } from './app.component';

@NgModule({
  declarations: [FirstComponent], // col of comp(S)
  imports: [BrowserModule], // to disp comp view in brow
  bootstrap: [FirstComponent], // root component
})
export class FirstModule {}

// module = set of logic(s)
