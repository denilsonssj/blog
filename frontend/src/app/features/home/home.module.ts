import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeView } from './views/home/home.view';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    HomeView,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    CoreModule,
  ]
})
export class HomeModule { }
