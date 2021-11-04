import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactView } from './views/contact/contact.view';

@NgModule({
  declarations: [
    ContactView
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    ContactRoutingModule
  ]
})
export class ContactModule { }
