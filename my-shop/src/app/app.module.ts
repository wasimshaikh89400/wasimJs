import { SharedService } from './services/shared.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { LaptopComponent } from './products/laptop/laptop.component';

import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { MotoComponent } from './products/mobile/moto/moto.component';
import { SamComponent } from './products/mobile/sam/sam.component';
import { AdminComponent } from './auth/admin/admin.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileComponent,
    LaptopComponent,
    MotoComponent,
    SamComponent,
    AdminComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent],
  providers: [SharedService],
})
export class AppModule {}
