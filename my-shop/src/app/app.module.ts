import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FirstComponent } from './app.component';
import { NavComponent } from './layouts/nav/nav.component';
import { BannerOneComponent } from './layouts/banner-one/banner-one.component';
import { ProductsComponent } from './layouts/products/products.component';
import { BannerTwoComponent } from './layouts/banner-two/banner-two.component';
import { ContactUsComponent } from './layouts/contact-us/contact-us.component';
import { BannerThreeComponent } from './layouts/banner-three/banner-three.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { OfferPipe } from './pipes/offer.pipe';
import { TextcolorDirective } from './directives/textcolor.directive';
import { MobileComponent } from './products/mobile/mobile.component';
import { LaptopsComponent } from './products/laptops/laptops.component';
import { PlantsComponent } from './products/plants/plants.component';

@NgModule({
  declarations: [
    FirstComponent,
    NavComponent,
    BannerOneComponent,
    ProductsComponent,
    BannerTwoComponent,
    ContactUsComponent,
    BannerThreeComponent,
    FooterComponent,
    OfferPipe,
    TextcolorDirective,
    MobileComponent,
    LaptopsComponent,
    PlantsComponent,
  ], // col of comp(S)
  imports: [BrowserModule], // to disp comp view in brow
  bootstrap: [FirstComponent], // root component
})
export class FirstModule {}

// module = set of logic(s)
