import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeamView } from './views/team/team.view';

const routes: Routes = [
  {
    path: '',
    component: TeamView,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
