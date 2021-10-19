import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundView } from './views/not-found/not-found.view';

@NgModule({
  declarations: [
    NotFoundView
  ],
  imports: [
    CommonModule,
    RouterModule,

    NotFoundRoutingModule
  ]
})
export class NotFoundModule { }
