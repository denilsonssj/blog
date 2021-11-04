import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayout } from './core/layouts/main/main.layout';

const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        loadChildren: () => import('./features/home/home.module')
          .then(m => m.HomeModule),
      },
      {
        path: 'contact',
        loadChildren: () => import('./features/contact/contact.module')
          .then(m => m.ContactModule),
      },
      {
        path: 'team',
        loadChildren: () => import('./features/team/team.module')
          .then(m => m.TeamModule),
      },
    ]
  },
  {
    path: '**',
    loadChildren: () => import('./features/not-found/not-found.module')
      .then(m => m.NotFoundModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
