import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactView } from './views/contact/contact.view';

const routes: Routes = [
  { path: '', component: ContactView }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
