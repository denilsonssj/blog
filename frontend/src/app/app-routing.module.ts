import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayout } from './core/layouts/main/main.layout';
import { AboutView } from './features/home/views/about/about.view';
import { ContactView } from './features/home/views/contact/contact.view';
import { HomeView } from './features/home/views/home/home.view';

const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        component: HomeView,
      },
      {
        path: 'about',
        component: AboutView,
      },
      {
        path: 'contact',
        component: ContactView,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
