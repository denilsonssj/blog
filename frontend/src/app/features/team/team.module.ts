import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamView } from './views/team/team.view';

@NgModule({
  declarations: [
    TeamView
  ],
  imports: [
    CommonModule,

    TeamRoutingModule,
  ]
})
export class TeamModule { }
