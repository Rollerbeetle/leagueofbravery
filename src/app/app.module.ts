import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from './shared/shared.module';

import { RiotApiService } from './api/riot-api.service';
import { ChampionListModule } from './champion-list/champion-list.module';
import { ChampionDetailsModule } from './champion-details/champion-details.module';

import { AppComponent } from './app.component';
import { ChampionListComponent } from './champion-list/champion-list.component';
import { ChampionDetailsComponent } from './champion-details/champion-details.component';

const appRoutes: Routes = [
  { path: '', component: ChampionListComponent },
  { path: 'champion/:id', redirectTo: 'detail/:id' },
  { path: 'detail/:id', component: ChampionDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ChampionListModule,
    ChampionDetailsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    RiotApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
