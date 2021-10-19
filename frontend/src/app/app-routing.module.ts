import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayout } from './core/layouts/main/main.layout';
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
