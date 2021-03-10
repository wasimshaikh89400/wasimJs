import { SharedService } from './services/shared.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { LaptopComponent } from './products/laptop/laptop.component';

import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { MotoComponent } from './products/mobile/moto/moto.component';
import { SamComponent } from './products/mobile/sam/sam.component';
import { AdminComponent } from './auth/admin/admin.component';
import { LoginComponent } from './auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
  ],
  bootstrap: [AppComponent],
  providers: [SharedService],
})
export class AppModule {}
