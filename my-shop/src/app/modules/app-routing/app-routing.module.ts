import { SamComponent } from './../../products/mobile/sam/sam.component';
import { MotoComponent } from './../../products/mobile/moto/moto.component';
import { MobileComponent } from './../../products/mobile/mobile.component';
import { LaptopComponent } from './../../products/laptop/laptop.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MobileComponent },
  {
    path: 'mobile',
    component: MobileComponent,
    children: [
      {
        path: 'moto/:id',
        component: MotoComponent,
      },
      {
        path: 'sam',
        component: SamComponent,
      },
    ],
  },
  { path: 'laptop', component: LaptopComponent },
  { path: '**', component: LaptopComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
