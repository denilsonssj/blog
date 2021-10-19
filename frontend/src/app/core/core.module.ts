import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayout } from './layouts/main/main.layout';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    MainLayout
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class CoreModule { }
