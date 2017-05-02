import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { ChampionListComponent } from './champion-list/champion-list.component';
import { ChampionDetailsComponent } from './champion-details/champion-details.component';
import { MasteryComponent } from './mastery/mastery.component';

const appRoutes: Routes = [
  { path: 'champions', component: ChampionListComponent },
  { path: 'mastery', component: MasteryComponent },
  { path: 'detail/:id', component: ChampionDetailsComponent },

  // Redirects
  { path: 'champion/:id', redirectTo: 'detail/:id' },
  { path: '', redirectTo: 'champions', pathMatch: 'full'},

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
