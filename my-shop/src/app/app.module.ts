import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { LaptopComponent } from './products/laptop/laptop.component';

import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { MotoComponent } from './products/mobile/moto/moto.component';
import { SamComponent } from './products/mobile/sam/sam.component';

@NgModule({
  declarations: [AppComponent, MobileComponent, LaptopComponent, MotoComponent, SamComponent],
  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
